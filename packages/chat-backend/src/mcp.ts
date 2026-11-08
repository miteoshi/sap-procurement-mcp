import { createMCPClient, type MCPClient } from "@ai-sdk/mcp";
import { Experimental_StdioMCPTransport as StdioMCPTransport } from "@ai-sdk/mcp/mcp-stdio";
import type { ToolSet } from "ai";

/**
 * The stdio transport only forwards PATH/HOME/USER/etc. to the child, NOT the
 * rest of process.env. The MCP server also loads its own .env from its cwd via
 * dotenv, so setting cwd is usually enough; these are forwarded as a convenience
 * when set on this process.
 */
const PASSTHROUGH_ENV = [
  "CAP_SERVICE_URL",
  "RETAIL_SERVICE_URL",
  "XSUAA_CLIENT_ID",
  "XSUAA_CLIENT_SECRET",
  "XSUAA_TOKEN_URL",
  "CAP_DEV_USER",
  "CAP_DEV_PASSWORD",
  "LOG_LEVEL",
  "NODE_ENV",
];

export type ConnectorState = "connecting" | "connected" | "disconnected";

export interface ConnectorStatus {
  state: ConnectorState;
  name: string;
  toolCount: number;
  error?: string;
}

export interface ConnectorConfig {
  command: string;
  args: string[];
  cwd: string;
  env?: Record<string, string>;
}

const MAX_BACKOFF_MS = 30_000;
const PROBE_TIMEOUT_MS = 3_000;

export class McpConnector {
  private state: ConnectorState = "disconnected";
  private lastError: string | undefined;
  private client: MCPClient | null = null;
  private toolSet: ToolSet = {};
  private name = "mcp";
  private connecting: Promise<void> | null = null;
  private retryTimer: NodeJS.Timeout | null = null;
  private backoffMs = 1_000;
  private lastProbe = 0;
  private stopped = false;

  constructor(private readonly config: ConnectorConfig) {}

  /** Begin connecting. Never throws: failures schedule a retry with backoff. */
  start() {
    this.stopped = false;
    void this.connect();
  }

  status(): ConnectorStatus {
    return {
      state: this.state,
      name: this.name,
      toolCount: Object.keys(this.toolSet).length,
      error: this.state === "connected" ? undefined : this.lastError,
    };
  }

  tools(): ToolSet {
    return this.toolSet;
  }

  /**
   * True only if the connector is connected AND the child process still
   * answers. Probes are cached briefly so health polling stays cheap.
   */
  async isReady(maxAgeMs = 5_000): Promise<boolean> {
    if (this.state !== "connected" || !this.client) return false;
    if (Date.now() - this.lastProbe < maxAgeMs) return true;
    try {
      await this.client.listTools({ options: { timeout: PROBE_TIMEOUT_MS } });
      this.lastProbe = Date.now();
      return true;
    } catch (err) {
      this.markDown(err);
      return false;
    }
  }

  async stop() {
    this.stopped = true;
    if (this.retryTimer) clearTimeout(this.retryTimer);
    const client = this.client;
    this.client = null;
    this.state = "disconnected";
    await client?.close().catch(() => {});
  }

  /**
   * Call an MCP tool directly (used by the Interactions pages, not the model).
   * Returns structured content or parsed JSON text; plain text otherwise.
   */
  async callTool(name: string, args: Record<string, unknown> = {}) {
    if (!(await this.isReady()))
      throw new Error("The MCP connector is offline.");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tool = this.toolSet[name] as any;
    if (!tool?.execute) throw new Error(`Tool "${name}" is not available.`);
    const result = await tool.execute(args, {
      toolCallId: `api-${Date.now()}`,
      messages: [],
    });
    return unwrapToolResult(result);
  }

  /** Argument names a tool accepts, read from its JSON schema (best effort). */
  inputKeys(name: string): string[] {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const schema = (this.toolSet[name] as any)?.inputSchema;
    const props = schema?.jsonSchema?.properties ?? schema?.properties;
    return props && typeof props === "object" ? Object.keys(props) : [];
  }

  private connect(): Promise<void> {
    if (this.connecting) return this.connecting;
    this.connecting = this.doConnect().finally(() => {
      this.connecting = null;
    });
    return this.connecting;
  }

  private async doConnect() {
    this.state = "connecting";
    let client: MCPClient | undefined;
    try {
      const env: Record<string, string> = { ...this.config.env };
      for (const key of PASSTHROUGH_ENV) {
        const value = process.env[key];
        if (value && env[key] === undefined) env[key] = value;
      }

      client = await createMCPClient({
        transport: new StdioMCPTransport({
          command: this.config.command,
          args: this.config.args,
          cwd: this.config.cwd,
          env,
        }),
        clientName: "chat-backend",
        initializationOptions: { timeout: 15_000 },
        onUncaughtError: (err) => this.markDown(err, client),
      });

      const tools = await client.tools();
      if (Object.keys(tools).length === 0) {
        throw new Error("The MCP server connected but exposes no tools.");
      }

      this.client = client;
      this.toolSet = tools;
      this.name =
        client.initializeResult?.serverInfo?.name ?? this.config.command;
      this.state = "connected";
      this.lastError = undefined;
      this.lastProbe = Date.now();
      this.backoffMs = 1_000;
      console.log(
        `[mcp] connected to "${this.name}" with ${
          Object.keys(tools).length
        } tools`
      );
    } catch (err) {
      this.markDown(err, client);
    }
  }

  private markDown(err: unknown, failedClient?: MCPClient | null) {
    // Ignore late errors from a client we've already replaced.
    if (failedClient && this.client && failedClient !== this.client) return;
    if (this.state === "disconnected" && this.retryTimer) return;

    this.lastError = err instanceof Error ? err.message : String(err);
    console.error(`[mcp] connector down: ${this.lastError}`);
    this.state = "disconnected";
    this.toolSet = {};

    const dead = failedClient ?? this.client;
    this.client = null;
    void dead?.close().catch(() => {});

    if (this.stopped || this.retryTimer) return;
    const delay = this.backoffMs;
    this.backoffMs = Math.min(this.backoffMs * 2, MAX_BACKOFF_MS);
    this.retryTimer = setTimeout(() => {
      this.retryTimer = null;
      void this.connect();
    }, delay);
    this.retryTimer.unref?.();
  }
}

function unwrapToolResult(result: unknown): unknown {
  const r = result as {
    isError?: boolean;
    structuredContent?: unknown;
    content?: { type: string; text?: string }[];
  };
  const text = Array.isArray(r?.content)
    ? r.content
        .filter((c) => c.type === "text")
        .map((c) => c.text ?? "")
        .join("\n")
    : undefined;
  if (r?.isError) throw new Error(text || "The tool returned an error.");
  if (r?.structuredContent !== undefined) return r.structuredContent;
  if (text === undefined) return result;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
