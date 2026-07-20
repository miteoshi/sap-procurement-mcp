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
    return pRetry(() => this.request<T>('GET', path, { params }), {
      retries: 2,
      minTimeout: 300,
      onFailedAttempt: (err) => {
        logger.warn({ attempt: err.attemptNumber, path }, 'CAP request retrying');
      },
    });
  }

  async post<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>('POST', path, { body });
  }

  async patch<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>('PATCH', path, { body });
  }

  private async request<T>(
    method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE',
    path: string,
    options?: { params?: Record<string, string>; body?: unknown }
  ): Promise<T> {
    const url = new URL(`${env.CAP_SERVICE_URL}${path}`);

    //for get requests ->
    //eg http://localhost:4004/odata/v4/procurement/Vendors
    // http://localhost:4004/odata/v4/procurement/Vendors?$filter=country%20eq%20'DE'
    if (options?.params) {
      Object.entries(options.params).forEach(([k, v]) => url.searchParams.set(k, v));
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const headers: Record<string, string> = {
        Accept: 'application/json',
      };

      if (options?.body) {
        headers['Content-Type'] = 'application/json';
      }

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


      //to replace "+" with "%20"
      const finalUrl = url.toString().replace(/\+/g, "%20");

      const fetchOptions: RequestInit = {
        method,
        headers,
        signal: controller.signal,
      };

      if (options?.body) {
        fetchOptions.body = JSON.stringify(options.body);
      }

      const res = await fetch(finalUrl, fetchOptions);

      if (!res.ok) {
        const body = await res.text();

        logger.error({
          status: res.status,
          body,
          url: url.toString(),
        }, "CAP request failed");

        //User asked something invalid.
        if (res.status >= 400 && res.status < 500) {
          throw new AbortError(
            new CapClientError(`CAP request failed: ${res.status}`, res.status),
          );
        }

        //temporary errors, like 500, 503, 504. 
        //So we retry here
        throw new CapClientError(`CAP request failed: ${res.status}`, res.status);
      }

      return (await res.json()) as T;
    } finally {
      clearTimeout(timeout);
    }
  }
}
