/**
 * Minimal stand-in for packages/mcp-server (same low-level stdio setup and
 * tool names), so the chat backend can be developed and tested without the CAP
 * service running. Run via the smoke test or point MCP_COMMAND/MCP_ARGS at it.
 */
import { appendFileSync } from "node:fs"
import { Server } from "@modelcontextprotocol/sdk/server/index.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js"
import { z } from "zod"

const tools = [
  {
    name: "search_vendors",
    description: "Search vendors by name.",
    inputSchema: z.object({ query: z.string() }),
    run: ({ query }: { query: string }) => [
      { vendorId: "V-1001", name: `${query} Industries`, status: "ACTIVE" },
    ],
  },
  {
    name: "cancel_purchase_order",
    description: "Cancel a purchase order.",
    inputSchema: z.object({ poId: z.string() }),
    run: ({ poId }: { poId: string }) => {
      // Side-effect marker the smoke test asserts on.
      if (process.env.STUB_LOG) appendFileSync(process.env.STUB_LOG, `cancel ${poId}\n`)
      return { success: true, poId, status: "CANCELLED" }
    },
  },
  {
    name: "start_retail_interaction",
    description: "Start a retailer interaction. Always set channel explicitly.",
    inputSchema: z.object({ channel: z.enum(["VOICE", "TEXT"]) }),
    run: ({ channel }: { channel: string }) => ({ interactionId: "INT-1", channel }),
  },
]

const server = new Server(
  { name: "stub-procurement-mcp", version: "0.0.1" },
  { capabilities: { tools: {} } }
)

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: tools.map((t) => ({
    name: t.name,
    description: t.description,
    inputSchema: z.toJSONSchema(t.inputSchema) as any,
  })),
}))

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  const tool = tools.find((t) => t.name === req.params.name)
  if (!tool) return { content: [{ type: "text", text: "Unknown tool" }], isError: true }
  const input = tool.inputSchema.parse(req.params.arguments) as any
  return { content: [{ type: "text", text: JSON.stringify((tool.run as any)(input)) }] }
})

await server.connect(new StdioServerTransport())
