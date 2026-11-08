import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  generateId,
  isStepCount,
  streamText,
  toUIMessageStream,
  validateUIMessages,
  type LanguageModel,
  type UIMessage,
} from "ai";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { z } from "zod";

import { env } from "./env.js";
import type { McpConnector } from "./mcp.js";
import { toolApproval } from "./policy.js";
import { buildSystemPrompt } from "./prompt.js";
import { CHAT_ID, titleFrom, type ChatStore } from "./store.js";

const chatRequest = z.object({
  id: z.string().regex(CHAT_ID),
  // Only the newest message is sent; history is loaded from the store.
  message: z.looseObject({
    id: z.string().min(1),
    role: z.enum(["user", "assistant"]),
    parts: z.array(z.looseObject({ type: z.string() })),
  }),
  inputMode: z.enum(["voice", "text"]).default("text"),
});

export interface AppDeps {
  connector: McpConnector;
  store: ChatStore;
  model: LanguageModel;
}

export function createApp({ connector, store, model }: AppDeps) {
  const app = new Hono();

  app.use(
    "/api/*",
    cors({
      origin: env.ALLOWED_ORIGIN,
      allowMethods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    })
  );

  // Connector status. The UI polls this and blocks chatting when not connected.
  app.get("/api/health", async (c) => {
    await connector.isReady();
    return c.json({ connector: connector.status(), model: env.MODEL });
  });

  app.get("/api/chats", (c) => c.json(store.list()));

  app.get("/api/chats/:id", (c) => {
    const id = c.req.param("id");
    if (!CHAT_ID.test(id)) return c.json({ error: "Invalid chat id." }, 400);
    const chat = store.get(id);
    return chat ? c.json(chat) : c.json({ error: "Not found." }, 404);
  });

  app.patch("/api/chats/:id", async (c) => {
    const id = c.req.param("id");
    if (!CHAT_ID.test(id)) return c.json({ error: "Invalid chat id." }, 400);
    const body = z
      .object({ title: z.string().trim().min(1).max(120) })
      .safeParse(await c.req.json().catch(() => null));
    if (!body.success) return c.json({ error: "Invalid title." }, 400);
    return store.rename(id, body.data.title)
      ? c.json({ ok: true })
      : c.json({ error: "Not found." }, 404);
  });

  app.delete("/api/chats/:id", (c) => {
    const id = c.req.param("id");
    if (!CHAT_ID.test(id)) return c.json({ error: "Invalid chat id." }, 400);
    return store.delete(id)
      ? c.json({ ok: true })
      : c.json({ error: "Not found." }, 404);
  });

  // ── Retail interactions (read through the same MCP tools the model uses) ──
  app.get("/api/interactions", async (c) => {
    try {
      const retailer = c.req.query("retailer")?.trim();
      const keys = connector.inputKeys("list_retail_interactions");
      const args: Record<string, unknown> = {};
      if (retailer) {
        const key = keys.find((k) => /retailer/i.test(k));
        if (key) args[key] = retailer;
      }
      return c.json({
        data: await withRetailerNames(
          connector,
          await connector.callTool("list_retail_interactions", args)
        ),
      });
    } catch (err) {
      return c.json({ error: errorMessage(err) }, 502);
    }
  });

  app.get("/api/interactions/:id", async (c) => {
    const id = c.req.param("id");
    if (!/^[\w.:-]{1,80}$/.test(id)) {
      return c.json({ error: "Invalid interaction id." }, 400);
    }
    try {
      const keys = connector.inputKeys("get_retail_interaction");
      const key =
        keys.find((k) => /interaction.*id/i.test(k)) ??
        keys.find((k) => /^id$/i.test(k)) ??
        keys[0] ??
        "interactionId";
      return c.json({
        data: await withRetailerNames(
          connector,
          await connector.callTool("get_retail_interaction", { [key]: id })
        ),
      });
    } catch (err) {
      return c.json({ error: errorMessage(err) }, 502);
    }
  });

  app.post("/api/chat", async (c) => {
    // No chat without the connector.
    if (!(await connector.isReady())) {
      return c.json(
        {
          error: "connector_unavailable",
          message:
            "The MCP connector is not connected, so chat is disabled. It is retrying automatically.",
        },
        503
      );
    }

    const parsed = chatRequest.safeParse(await c.req.json().catch(() => null));
    if (!parsed.success) return c.json({ error: "Invalid request." }, 400);
    const { id, inputMode } = parsed.data;
    const incoming = parsed.data.message as unknown as UIMessage;

    const tools = connector.tools();
    const previous = store.get(id)?.messages ?? [];

    // A message whose id is already stored REPLACES it (and drops what followed).
    // That covers two flows: approving/denying a tool call (the client re-sends
    // the assistant message with the approval attached) and "retry" (the client
    // re-sends the user message to regenerate the answer).
    const at = previous.findIndex((m) => m.id === incoming.id);
    if (incoming.role === "assistant" && at < 0) {
      return c.json({ error: "Unknown assistant message." }, 400);
    }
    const history = at >= 0 ? previous.slice(0, at) : previous;
    const combined = [...history, incoming];

    let messages: UIMessage[];
    try {
      messages = await validateUIMessages({
        messages: combined,
        tools: tools as Parameters<typeof validateUIMessages>[0]["tools"],
      });
    } catch {
      // Tool schemas may have changed since older turns were saved. Fall back to
      // structural validation so an old chat doesn't become unusable.
      try {
        messages = await validateUIMessages({ messages: combined });
      } catch {
        return c.json({ error: "Invalid messages." }, 400);
      }
    }

    // Persist before calling the model so a failed call still leaves the chat
    // (and the user's message) in the history.
    store.save(
      id,
      messages,
      titleFrom(messages.find((m) => m.role === "user") ?? incoming)
    );

    const result = streamText({
      model,
      system: buildSystemPrompt(inputMode),
      messages: await convertToModelMessages(messages, {
        tools,
        ignoreIncompleteToolCalls: true,
      }),
      tools,
      toolApproval,
      experimental_toolApprovalSecret: env.TOOL_APPROVAL_SECRET,
      stopWhen: isStepCount(env.MAX_STEPS),
      maxOutputTokens: env.MAX_OUTPUT_TOKENS,
      abortSignal: c.req.raw.signal,
    });

    return createUIMessageStreamResponse({
      stream: toUIMessageStream({
        stream: result.stream,
        originalMessages: messages,
        // The server must mint the assistant message id: it is sent to the
        // browser in the stream's start chunk, and approval/retry requests are
        // matched against the stored message by this id.
        generateMessageId: generateId,
        // Also fires when the user presses Stop, so partial answers are kept.
        onEnd: ({ messages: finished }) => store.save(id, finished),
        onError: (error) => {
          console.error("[chat] stream error:", error);
          return "Something went wrong while generating the answer. Please try again.";
        },
      }),
    });
  });

  return app;
}

function errorMessage(err: unknown) {
  return err instanceof Error ? err.message : "Request failed.";
}

/**
 * Interaction records only carry a retailer id. Look the names up once via
 * the retailer search tool and add `retailerName` so the UI can show it.
 * Best effort: on any failure the data is returned unchanged.
 */
async function withRetailerNames(connector: McpConnector, data: unknown) {
  try {
    const found = await connector.callTool("search_fmcg_retailers", {
      limit: 100,
    });
    const list = Array.isArray(found) ? found : [];
    const names = new Map<string, string>();
    for (const r of list) {
      if (r && typeof r === "object") {
        const { ID, name } = r as { ID?: unknown; name?: unknown };
        if (typeof ID === "string" && typeof name === "string")
          names.set(ID, name);
      }
    }
    if (names.size === 0) return data;

    const tag = (o: unknown) => {
      if (!o || typeof o !== "object" || Array.isArray(o)) return;
      const rec = o as Record<string, unknown>;
      const key = Object.keys(rec).find((k) => /^retailer_?id$/i.test(k));
      const name = key ? names.get(String(rec[key])) : undefined;
      if (name && rec.retailerName === undefined) rec.retailerName = name;
    };
    if (Array.isArray(data)) data.forEach(tag);
    else {
      tag(data);
      if (data && typeof data === "object") {
        for (const v of Object.values(data))
          Array.isArray(v) ? v.forEach(tag) : tag(v);
      }
    }
  } catch {
    // Names are a nicety; the page still works with the interaction number.
  }
  return data;
}
