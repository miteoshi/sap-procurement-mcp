import pRetry, { AbortError } from 'p-retry';
import { env } from '../config/env.js';
import { logger } from '../config/logger.js';
import { AuthTokenProvider } from './authTokenProvider.js';

const REQUEST_TIMEOUT_MS = 8_000;

export class CapClientError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
  ) {
    super(message);
    this.name = 'CapClientError';
  }
}

/**
 * Single point of contact with the CAP OData service. Tools never
 * call fetch() directly — everything goes through here so auth,
 * retry, timeout, and error shape are consistent.
 */
export class CapClient {
  private readonly authProvider = new AuthTokenProvider();

  async get<T>(path: string, params?: Record<string, string>): Promise<T> {
    return pRetry(() => this.request<T>(path, params), {
      retries: 2,
      minTimeout: 300,
      onFailedAttempt: (err) => {
        logger.warn({ attempt: err.attemptNumber, path }, 'CAP request retrying');
      },
    });
  }

private async request<T>(path: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(`${env.CAP_SERVICE_URL}${path}`);

  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const headers: Record<string, string> = {
      Accept: 'application/json',
    };

    // Only send a Bearer token when using a real XSUAA server.
    // For local development with mocked CAP auth, don't send Authorization.
    if (env.XSUAA_TOKEN_URL) {
      const token = await this.authProvider.getToken();
      headers.Authorization = `Bearer ${token}`;
    }
    else {
      headers.Authorization = `Basic ${Buffer.from(
        `${env.CAP_DEV_USER}:${env.CAP_DEV_PASSWORD}`
      ).toString("base64")}`;
    }
    
      logger.info(
    {
      url: url.toString(),
      headers,
    },
    "Outgoing CAP request"
    );
    // console.error("URL:", url.toString());
    // console.error("HEADERS:", headers);

    const finalUrl = url.toString().replace(/\+/g, "%20");

    const res = await fetch(finalUrl, {
      headers,
      signal: controller.signal,
    });

if (!res.ok) {
  const body = await res.text();

  logger.error({
    status: res.status,
    body,
    url: url.toString(),
  }, "CAP request failed");

  if (res.status >= 400 && res.status < 500) {
    throw new AbortError(
      new CapClientError(`CAP request failed: ${res.status}`, res.status),
    );
  }

  throw new CapClientError(`CAP request failed: ${res.status}`, res.status);
}

    return (await res.json()) as T;
  } finally {
    clearTimeout(timeout);
  }
}
}
