export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8787"

/** Base URL for fetches made on the Next.js server (RSC), which may differ. */
export const SERVER_API_URL = process.env.BACKEND_URL ?? API_URL

export interface ChatSummary {
  id: string
  title: string
  updatedAt: number
}

export interface ConnectorStatus {
  state: "connected" | "connecting" | "disconnected"
  name: string
  toolCount: number
  error?: string
}

export interface Health {
  connector: ConnectorStatus
  model: string
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, init)
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
  return (await res.json()) as T
}

export const api = {
  health: () => request<Health>("/api/health", { cache: "no-store" }),
  listChats: () => request<ChatSummary[]>("/api/chats", { cache: "no-store" }),
  deleteChat: (id: string) =>
    request<{ ok: true }>(`/api/chats/${encodeURIComponent(id)}`, {
      method: "DELETE",
    }),
  listInteractions: () =>
    request<{ data: unknown }>("/api/interactions", { cache: "no-store" }),
  getInteraction: (id: string) =>
    request<{ data: unknown }>(`/api/interactions/${encodeURIComponent(id)}`, {
      cache: "no-store",
    }),
  renameChat: (id: string, title: string) =>
    request<{ ok: true }>(`/api/chats/${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title }),
    }),
}

/** Lets the sidebar refresh when a chat is created, updated, or deleted. */
export const CHATS_CHANGED = "chats:changed"
export function notifyChatsChanged() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(CHATS_CHANGED))
  }
}
