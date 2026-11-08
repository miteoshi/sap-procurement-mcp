"use client"

import * as React from "react"

import { api, type ConnectorStatus } from "@/lib/api"

export interface ConnectorView {
  /** null until the first response arrives */
  status: ConnectorStatus | null
  /** The chat backend itself could not be reached. */
  backendUnreachable: boolean
  /** Chat is allowed only when the MCP connector is connected. */
  ready: boolean
  /** One-line explanation when not ready. */
  reason: string | null
}

const CONNECTED_POLL_MS = 5_000
const DOWN_POLL_MS = 1_500

const Context = React.createContext<ConnectorView | null>(null)

/** One poller for the whole app (header badge + chat share it). */
export function ConnectorProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = React.useState<ConnectorStatus | null>(null)
  const [unreachable, setUnreachable] = React.useState(false)

  React.useEffect(() => {
    let cancelled = false
    let timer: ReturnType<typeof setTimeout>

    async function tick() {
      let next = DOWN_POLL_MS
      try {
        const health = await api.health()
        if (cancelled) return
        setStatus(health.connector)
        setUnreachable(false)
        if (health.connector.state === "connected") next = CONNECTED_POLL_MS
      } catch {
        if (cancelled) return
        setUnreachable(true)
        setStatus(null)
      }
      if (!cancelled) timer = setTimeout(tick, next)
    }

    void tick()
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  const value = React.useMemo<ConnectorView>(() => {
    const ready = !unreachable && status?.state === "connected"
    let reason: string | null = null
    if (unreachable) {
      reason = "Can't reach the chat backend."
    } else if (status && status.state !== "connected") {
      reason =
        status.state === "connecting"
          ? "The MCP connector is connecting…"
          : (status.error ?? "The MCP connector is offline.")
    }
    return { status, backendUnreachable: unreachable, ready, reason }
  }, [status, unreachable])

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useConnector() {
  const ctx = React.useContext(Context)
  if (!ctx) throw new Error("useConnector must be used inside ConnectorProvider")
  return ctx
}
