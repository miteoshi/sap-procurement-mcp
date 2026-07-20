import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';
import 'dotenv/config';

import { ProcurementService } from './services/procurementService.js';
import { searchVendorsTool } from './tools/sap-operations/vendors/searchVendors.js';
import { getVendorTool } from './tools/sap-operations/vendors/getVendor.js';
import { createVendorTool } from './tools/sap-operations/vendors/createVendor.js';
import { updateVendorTool } from './tools/sap-operations/vendors/updateVendor.js';
import { blockVendorTool } from './tools/sap-operations/vendors/blockVendor.js';
import { unblockVendorTool } from './tools/sap-operations/vendors/unblockVendor.js';
import { deactivateVendorTool } from './tools/sap-operations/vendors/deactivateVendor.js';
import { searchPurchaseOrdersTool } from './tools/sap-operations/purchase-orders/searchPurchaseOrders.js';
import { getPurchaseOrderTool } from './tools/sap-operations/purchase-orders/getPurchaseOrder.js';
import { createPurchaseOrderTool } from './tools/sap-operations/purchase-orders/createPurchaseOrder.js';
import { addPoLineItemTool } from './tools/sap-operations/purchase-orders/addPoLineItem.js';
import { releasePurchaseOrderTool } from './tools/sap-operations/purchase-orders/releasePurchaseOrder.js';
import { cancelPurchaseOrderTool } from './tools/sap-operations/purchase-orders/cancelPurchaseOrder.js';
import { receiveGoodsTool } from './tools/sap-operations/purchase-orders/receiveGoods.js';
import { checkInventoryTool } from './tools/sap-operations/inventory/checkInventory.js';
import { listInventoryTool } from './tools/sap-operations/inventory/listInventory.js';
import { checkLowStockTool } from './tools/sap-operations/inventory/checkLowStock.js';
import { issueGoodsTool } from './tools/sap-operations/inventory/issueGoods.js';

import { getLastPurchasePriceTool } from './tools/sap-operations/pricing/getLastPurchasePrice.js';
import { getVendorMaterialPriceTool } from './tools/sap-operations/pricing/getVendorMaterialPrice.js';
import { createPurchaseOrderFromQuoteTool } from './tools/sap-operations/pricing/createPurchaseOrderFromQuote.js';

import { vendorSummaryTool } from './tools/ai-operations/vendors/vendorSummary.js';
import { supplierPerformanceTool } from './tools/ai-operations/vendors/supplierPerformance.js';
import { supplierSpendSummaryTool } from './tools/ai-operations/vendors/supplierSpendSummary.js';
import { CapClientError } from './clients/capClient.js';
import { logger } from './config/logger.js';

const service = new ProcurementService();
const tools = [
  // SAP Operations
  searchVendorsTool,
  getVendorTool,
  createVendorTool,
  updateVendorTool,
  blockVendorTool,
  unblockVendorTool,
  deactivateVendorTool,
  searchPurchaseOrdersTool,
  getPurchaseOrderTool,
  createPurchaseOrderTool,
  addPoLineItemTool,
  releasePurchaseOrderTool,
  cancelPurchaseOrderTool,
  receiveGoodsTool,
  
  // Inventory
  checkInventoryTool,
  listInventoryTool,
  checkLowStockTool,
  issueGoodsTool,

  // AI Operations
  vendorSummaryTool,
  supplierPerformanceTool,
  supplierSpendSummaryTool,

  // Pricing Intelligence
  getLastPurchasePriceTool,
  getVendorMaterialPriceTool,
  createPurchaseOrderFromQuoteTool
];

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
