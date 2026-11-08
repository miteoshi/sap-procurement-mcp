import { CapClient } from '../../clients/capClient.js';
import { env } from '../../config/env.js';
import { ProductService } from './products/productService.js';
import { RetailPriceService } from './pricing/retailPriceService.js';
import { SchemeService } from './schemes/schemeService.js';
import { RetailerService } from './retailers/retailerService.js';
import { InteractionService } from './interactions/interactionService.js';
import { FollowUpService } from './follow-ups/followUpService.js';
import type {
  AddInteractionMessageInput, CaptureProductInterestInput, CompleteInteractionInput,
  ListInteractionsInput, ProductSearchFilters, RetailerSearchFilters, StartInteractionInput,
} from '../../types/fmcg.js';

/** Facade for FMCGDATA, following the same composition pattern as ProcurementService. */
export class FmcgService {
  private readonly productService: ProductService;
  private readonly retailPriceService: RetailPriceService;
  private readonly schemeService: SchemeService;
  private readonly retailerService: RetailerService;
  private readonly interactionService: InteractionService;
  private readonly followUpService: FollowUpService;

  constructor(
    private readonly client: CapClient = new CapClient(
      env.RETAIL_SERVICE_URL ?? env.CAP_SERVICE_URL.replace(/\/procurement\/?$/, '/retail'),
    ),
  ) {
    this.productService = new ProductService(this.client);
    this.retailPriceService = new RetailPriceService(this.client);
    this.schemeService = new SchemeService(this.client, this.productService);
    this.retailerService = new RetailerService(this.client);
    this.interactionService = new InteractionService(this.client);
    this.followUpService = new FollowUpService(this.client);
  }

  async searchProducts(filters: ProductSearchFilters = {}) {
    return this.productService.searchProducts(filters);
  }

  async getProductDetails(sku: string) {
    const product = await this.productService.getProductBySku(sku);
    if (!product) return undefined;
    const [currentPrice, activeSchemes] = await Promise.all([
      this.retailPriceService.getCurrentPrice(product.ID),
      this.schemeService.getActiveSchemes(sku),
    ]);
    return {
      ...product,
      availability: (product.stockQuantity ?? 0) > 0 ? 'IN_STOCK' : 'OUT_OF_STOCK',
      currentPrice: currentPrice ?? null,
      activeSchemes,
    };
  }

  async getActiveSchemes(sku?: string) {
    return this.schemeService.getActiveSchemes(sku);
  }

  async searchRetailers(filters: RetailerSearchFilters = {}) {
    return this.retailerService.searchRetailers(filters);
  }

  async startInteraction(input: StartInteractionInput) {
    return this.interactionService.startInteraction(input);
  }

  async addInteractionMessage(input: AddInteractionMessageInput) {
    return this.interactionService.addMessage(input);
  }

  async captureProductInterest(input: CaptureProductInterestInput) {
    const product = await this.productService.getProductBySku(input.sku);
    if (!product) throw new Error(`Unknown FMCG product SKU: ${input.sku}`);
    return this.interactionService.captureProductInterest({
      interactionId: input.interactionId, productId: product.ID,
      quantity: input.quantity, unit: input.unit ?? product.unit, notes: input.notes,
    });
  }

  async createFollowUp(input: import('../../types/fmcg.js').CreateFollowUpInput) {
    return this.followUpService.createFollowUp(input);
  }

  async completeInteraction(input: CompleteInteractionInput) {
    return this.interactionService.completeInteraction(input);
  }

  async listInteractions(input: ListInteractionsInput = {}) {
    return this.interactionService.listInteractions(input);
  }

  async getInteraction(interactionId: string) {
    return this.interactionService.getInteraction(interactionId);
  }
}
