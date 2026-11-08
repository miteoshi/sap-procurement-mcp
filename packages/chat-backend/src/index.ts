import { serve } from "@hono/node-server"
import { createAnthropic } from "@ai-sdk/anthropic"

import { createApp } from "./app.js"
import { env } from "./env.js"
import { McpConnector } from "./mcp.js"
import { ChatStore } from "./store.js"

const connector = new McpConnector({
  command: env.MCP_COMMAND,
  args: env.MCP_ARGS,
  cwd: env.MCP_CWD,
})
const store = new ChatStore(env.DB_PATH)
const anthropic = createAnthropic({ apiKey: env.ANTHROPIC_API_KEY })

const app = createApp({ connector, store, model: anthropic(env.MODEL) })

connector.start()

const server = serve({ fetch: app.fetch, hostname: env.HOST, port: env.PORT }, (info) => {
  console.log(`[chat-backend] http://${info.address}:${info.port}  model=${env.MODEL}`)
  console.log(`[chat-backend] mcp: ${env.MCP_COMMAND} ${env.MCP_ARGS.join(" ")}  (cwd ${env.MCP_CWD})`)
  if (env.GENERATED_APPROVAL_SECRET) {
    console.log("[chat-backend] TOOL_APPROVAL_SECRET not set: using a random one for this run")
  }
  if (!["127.0.0.1", "localhost", "::1"].includes(env.HOST)) {
    console.warn(
      "[chat-backend] WARNING: listening beyond loopback with NO authentication. " +
        "Anyone who can reach this port can read/write your SAP data through the tools."
    )
  }
})

async function shutdown() {
  server.close()
  await connector.stop()
  store.close()
  process.exit(0)
}
process.on("SIGINT", shutdown)
process.on("SIGTERM", shutdown)
