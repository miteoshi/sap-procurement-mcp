import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';
import 'dotenv/config';

import { ProcurementService } from './services/procurementService.js';
import { findVendorTool } from './tools/findVendor.js';
import { listRecentOrdersTool } from './tools/listRecentOrders.js';
import { getPoStatusTool } from './tools/getPoStatus.js';
import { checkInventoryTool } from './tools/checkInventory.js';
import { CapClientError } from './clients/capClient.js';
import { logger } from './config/logger.js';

const service = new ProcurementService();
const tools = [findVendorTool, listRecentOrdersTool, getPoStatusTool, checkInventoryTool];

const server = new Server(
  { name: 'procurement-mcp', version: '1.0.0' },
  { capabilities: { tools: {} } },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: tools.map((t) => ({
    name: t.name,
    description: t.description,
    inputSchema: z.toJSONSchema(t.inputSchema) as any,
  })),
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const tool = tools.find((t) => t.name === request.params.name);
  if (!tool) {
    return {
      content: [{ type: 'text', text: `Unknown tool: ${request.params.name}` }],
      isError: true,
    };
  }

  try {
    const parsedInput = tool.inputSchema.parse(request.params.arguments);
    // handler signatures differ per tool only in the schema type; cast is safe
    // because we just validated with that exact tool's schema.
    const result = await (tool.handler as any)(service, parsedInput);
    return { content: [{ type: 'text', text: JSON.stringify(result) }] };
  } catch (err) {
    // Never leak raw stack traces / internal errors back to the LLM context.
    if (err instanceof CapClientError) {
      logger.error({ tool: tool.name, status: err.status }, err.message);
      return {
        content: [{ type: 'text', text: `Data source error: ${err.message}` }],
        isError: true,
      };
    }
    logger.error({ tool: tool.name, err }, 'Unhandled tool error');
    return {
      content: [{ type: 'text', text: 'Internal error processing this tool call.' }],
      isError: true,
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  logger.info('procurement-mcp server started');
}

main().catch((err) => {
  logger.error({ err }, 'Fatal startup error');
  process.exit(1);
});
