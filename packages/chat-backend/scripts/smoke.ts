/**
 * End-to-end smoke test: real stdio MCP connector (stub server) + real Hono app,
 * with a scripted model standing in for Claude. Run: pnpm smoke
 */
process.env.ANTHROPIC_API_KEY ??= "test-key"
process.env.TOOL_APPROVAL_SECRET ??= "smoke-test-secret-smoke-test-secret"

import { execSync } from "node:child_process"
import { existsSync, mkdtempSync, readFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { MockLanguageModelV4, simulateReadableStream } from "ai/test"
import type { UIMessage } from "ai"

const { createApp } = await import("../src/app.js")
const { McpConnector } = await import("../src/mcp.js")
const { ChatStore } = await import("../src/store.js")

const results: { name: string; ok: boolean; detail?: string }[] = []
function check(name: string, ok: boolean, detail?: string) {
  results.push({ name, ok, detail })
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${!ok && detail ? `\n      ${detail}` : ""}`)
}
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
async function until(fn: () => Promise<boolean> | boolean, ms: number) {
  const end = Date.now() + ms
  while (Date.now() < end) {
    if (await fn()) return true
    await sleep(150)
  }
  return false
}

// --- scripted model helpers ------------------------------------------------
const usage = {
  inputTokens: { total: 1, noCache: 1, cacheRead: 0, cacheWrite: 0 },
  outputTokens: { total: 1, text: 1, reasoning: 0 },
}
const say = (text: string) => ({
  stream: simulateReadableStream({
    chunks: [
      { type: "stream-start", warnings: [] },
      { type: "text-start", id: "t" },
      { type: "text-delta", id: "t", delta: text },
      { type: "text-end", id: "t" },
      { type: "finish", finishReason: { unified: "stop", raw: "stop" }, usage },
    ],
  }),
})
const call = (toolName: string, input: object, id = "call_1") => ({
  stream: simulateReadableStream({
    chunks: [
      { type: "stream-start", warnings: [] },
      { type: "tool-call", toolCallId: id, toolName, input: JSON.stringify(input) },
      { type: "finish", finishReason: { unified: "tool-calls", raw: "tool_use" }, usage },
    ],
  }),
})
const scripted = (...steps: any[]) => new MockLanguageModelV4({ doStream: steps })

// --- harness ---------------------------------------------------------------
const logFile = path.join(mkdtempSync(path.join(tmpdir(), "smoke-")), "stub.log")
const connector = new McpConnector({
  command: path.resolve("node_modules/.bin/tsx"),
  args: [path.resolve("scripts/stub-mcp-server.ts")],
  cwd: process.cwd(),
  env: { STUB_LOG: logFile },
})
const store = new ChatStore(":memory:")
const appWith = (model: any) => createApp({ connector, store, model })
const cancels = () => (existsSync(logFile) ? readFileSync(logFile, "utf8").split("\n").filter(Boolean) : [])

const userMsg = (id: string, text: string): UIMessage => ({
  id,
  role: "user",
  parts: [{ type: "text", text }],
})
const post = (app: ReturnType<typeof appWith>, body: object) =>
  app.request("/api/chat", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  })

// 1 ─ chat is blocked while the connector is down ---------------------------
{
  const app = appWith(scripted(say("should never run")))
  const h = await (await app.request("/api/health")).json()
  check("health reports disconnected before start", h.connector.state === "disconnected")
  const res = await post(app, { id: "c0", message: userMsg("u0", "hi") })
  const body = await res.json()
  check("chat refused (503) with no connector", res.status === 503 && body.error === "connector_unavailable", `${res.status} ${JSON.stringify(body)}`)
  check("refused chat leaves no history", store.list().length === 0)
}

// 2 ─ connect ---------------------------------------------------------------
connector.start()
const connected = await until(() => connector.isReady(0), 15_000)
check("connector connects over stdio", connected, JSON.stringify(connector.status()))
{
  const app = appWith(scripted(say("x")))
  const h = await (await app.request("/api/health")).json()
  check("health shows connected + 3 tools + server name", h.connector.state === "connected" && h.connector.toolCount === 3 && h.connector.name === "stub-procurement-mcp", JSON.stringify(h))
}

// 3 ─ plain reply + persistence ---------------------------------------------
{
  const app = appWith(scripted(say("Hello from the assistant")))
  const res = await post(app, { id: "c1", message: userMsg("u1", "Hi there, who are you?") })
  const text = await res.text()
  check("plain chat streams a reply", res.status === 200 && text.includes("Hello from the assistant"), text.slice(0, 200))
  const chat = store.get("c1")
  check("history saved: user + assistant", chat?.messages.length === 2 && chat.messages[1]?.role === "assistant")
  check("assistant message has a non-empty server-minted id", Boolean(chat?.messages[1]?.id))
  check("title derived from first user message", chat?.title === "Hi there, who are you?", chat?.title)
}

// 4 ─ read-only tool runs without approval -----------------------------------
{
  const app = appWith(scripted(call("search_vendors", { query: "Acme" }), say("Found Acme Industries")))
  const res = await post(app, { id: "c2", message: userMsg("u2", "find vendor acme") })
  const text = await res.text()
  const last = store.get("c2")?.messages.at(-1) as any
  const part = last?.parts.find((p: any) => p.type === "dynamic-tool")
  check("read tool executes with no approval prompt", res.status === 200 && !text.includes("tool-approval-request") && part?.state === "output-available", JSON.stringify(part)?.slice(0, 300))
}

// 5 ─ conversation-logging write tool is auto-approved ------------------------
{
  const app = appWith(scripted(call("start_retail_interaction", { channel: "VOICE" }), say("Started")))
  const res = await post(app, { id: "c3", message: userMsg("u3", "talk to a retailer"), inputMode: "voice" })
  const text = await res.text()
  check("retail logging tool is auto-approved", !text.includes("tool-approval-request") && text.includes("INT-1"), text.slice(0, 200))
}

// 6 ─ write tool: approval requested, NOT executed, then approved → executed ----
{
  const app = appWith(scripted(call("cancel_purchase_order", { poId: "PO-42" }), say("PO-42 is cancelled.")))
  const res = await post(app, { id: "c4", message: userMsg("u4", "cancel PO-42") })
  const text = await res.text()
  const pendingAssistant = store.get("c4")?.messages.at(-1) as any
  const part = pendingAssistant?.parts.find((p: any) => p.type === "dynamic-tool")
  check("write tool pauses for approval", text.includes("tool-approval-request") && part?.state === "approval-requested", `state=${part?.state}`)
  check("write tool NOT executed before approval", cancels().length === 0, JSON.stringify(cancels()))

  // Reproduce what the browser's addToolApprovalResponse does.
  const approved = structuredClone(pendingAssistant)
  const p = approved.parts.find((x: any) => x.type === "dynamic-tool")
  p.state = "approval-responded"
  p.approval = { ...p.approval, approved: true }
  const res2 = await post(app, { id: "c4", message: approved })
  const text2 = await res2.text()
  const final = store.get("c4")
  const fp = (final?.messages.at(-1) as any)?.parts.find((x: any) => x.type === "dynamic-tool")
  check("approved write tool executes exactly once", cancels().length === 1 && cancels()[0] === "cancel PO-42" && fp?.state === "output-available", `log=${JSON.stringify(cancels())} state=${fp?.state} body=${text2.slice(0, 160)}`)
  check("approval continues the SAME assistant message (no duplicate)", final?.messages.length === 2, `len=${final?.messages.length}`)
}

// 7 ─ denied approval does not execute ------------------------------------------
{
  const before = cancels().length
  const app = appWith(scripted(call("cancel_purchase_order", { poId: "PO-77" }, "call_9"), say("Okay, I won't cancel it.")))
  await (await post(app, { id: "c5", message: userMsg("u5", "cancel PO-77") })).text()
  const pending = store.get("c5")?.messages.at(-1) as any
  const denied = structuredClone(pending)
  const p = denied.parts.find((x: any) => x.type === "dynamic-tool")
  p.state = "approval-responded"
  p.approval = { ...p.approval, approved: false }
  await (await post(app, { id: "c5", message: denied })).text()
  const fp = (store.get("c5")?.messages.at(-1) as any)?.parts.find((x: any) => x.type === "dynamic-tool")
  check("denied write tool never executes", cancels().length === before && fp?.state === "output-denied", `state=${fp?.state} cancels=${cancels().length - before}`)
}

// 8 ─ forged approval is rejected --------------------------------------------------
{
  const before = cancels().length
  const app = appWith(scripted(call("cancel_purchase_order", { poId: "PO-99" }, "call_f"), say("(should not get here)")))
  await (await post(app, { id: "c6", message: userMsg("u6", "cancel PO-99") })).text()
  const pending = store.get("c6")?.messages.at(-1) as any
  const forged = structuredClone(pending)
  const p = forged.parts.find((x: any) => x.type === "dynamic-tool")
  // A hostile client invents an approval, stripping anything the server signed.
  p.state = "approval-responded"
  p.approval = { id: p.approval.id, approved: true }
  delete p.callProviderMetadata
  const res = await post(app, { id: "c6", message: forged })
  const text = await res.text().catch(() => "")
  check("forged (unsigned) approval does NOT execute the tool", cancels().length === before, `cancels=${cancels().length - before} status=${res.status} body=${text.slice(0, 200)}`)
}

// 9 ─ history API --------------------------------------------------------------------
{
  const app = appWith(scripted(say("x")))
  const list = await (await app.request("/api/chats")).json()
  check("GET /api/chats lists chats newest first", list.length >= 5 && list[0].updatedAt >= list.at(-1).updatedAt)
  const one = await app.request("/api/chats/c1")
  check("GET /api/chats/:id returns messages", one.status === 200 && (await one.json()).messages.length === 2)
  const bad = await app.request("/api/chats/..%2Fetc")
  check("path-traversal-ish id is rejected", bad.status === 400 || bad.status === 404, String(bad.status))
  const ren = await app.request("/api/chats/c1", { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ title: "Renamed" }) })
  check("rename works", ren.status === 200 && store.get("c1")?.title === "Renamed")
  const del = await app.request("/api/chats/c1", { method: "DELETE" })
  check("delete works", del.status === 200 && store.get("c1") === null)
}

// 10 ─ child crash → detected → auto-reconnect ----------------------------------------
{
  execSync("pkill -f '[s]tub-mcp-server.ts' || true")
  const down = await until(async () => !(await connector.isReady(0)), 8_000)
  check("detects the MCP process dying", down, JSON.stringify(connector.status()))
  const app = appWith(scripted(say("x")))
  const res = await post(app, { id: "c7", message: userMsg("u7", "hi") })
  check("chat is refused while connector is down", res.status === 503 || connector.status().state === "connected", String(res.status))
  const back = await until(() => connector.isReady(0), 20_000)
  check("auto-reconnects with backoff", back, JSON.stringify(connector.status()))
}

await connector.stop()
execSync("pkill -f '[s]tub-mcp-server.ts' || true")
const failed = results.filter((r) => !r.ok)
console.log(`\n${results.length - failed.length}/${results.length} checks passed`)
process.exit(failed.length ? 1 : 0)
