import { env } from '../config/env.js';
import { logger } from '../config/logger.js';

interface CachedToken {
  accessToken: string;
  expiresAt: number; // epoch ms
}

/**
 * Client-credentials OAuth against XSUAA. Tokens are cached in memory
 * and refreshed with a safety margin before expiry, so we don't fetch
 * a new token on every single tool call.
 */
export class AuthTokenProvider {
  private cached: CachedToken | null = null;
  private readonly refreshMarginMs = 60_000;

  async getToken(): Promise<string> {
    if (this.cached && this.cached.expiresAt - Date.now() > this.refreshMarginMs) {
      return this.cached.accessToken;
    }
    return this.fetchNewToken();
  }

  private async fetchNewToken(): Promise<string> {
    // Local/dev mode: cap-service runs with mocked auth, no real token needed.
    if (!env.XSUAA_TOKEN_URL) {
      throw new Error(
        "AuthTokenProvider should only be used when XSUAA_TOKEN_URL is configured."
      );
    }

    const body = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: env.XSUAA_CLIENT_ID,
      client_secret: env.XSUAA_CLIENT_SECRET,
    });

    const res = await fetch(env.XSUAA_TOKEN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });

    if (!res.ok) {
      logger.error({ status: res.status }, 'Failed to obtain XSUAA token');
      throw new Error(`XSUAA token request failed: ${res.status}`);
    }

    const data = (await res.json()) as { access_token: string; expires_in: number };
    this.cached = {
      accessToken: data.access_token,
      expiresAt: Date.now() + data.expires_in * 1000,
    };
    return this.cached.accessToken;
  }
}
