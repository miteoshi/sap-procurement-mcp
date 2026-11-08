"use client"

import * as React from "react"
import Link from "next/link"

import { useConnector } from "@/hooks/use-connector"
import { api } from "@/lib/api"
import {
  CHANNEL_KEYS,
  DATE_KEYS,
  extractList,
  formatDate,
  ID_KEYS,
  NUMBER_KEYS,
  OUTCOME_KEYS,
  pick,
  retailerNameOf,
  STATUS_KEYS,
  SUMMARY_KEYS,
  type Obj,
} from "@/lib/interactions"

type State =
  | { kind: "loading" }
  | { kind: "error"; message: string }
  | { kind: "ok"; items: Obj[] }

export default function InteractionsPage() {
  const { ready } = useConnector()
  const [state, setState] = React.useState<State>({ kind: "loading" })

  React.useEffect(() => {
    if (!ready) return
    let cancelled = false
    api
      .listInteractions()
      .then(
        (r) =>
          !cancelled && setState({ kind: "ok", items: extractList(r.data) })
      )
      .catch(
        (e: Error) =>
          !cancelled && setState({ kind: "error", message: e.message })
      )
    return () => {
      cancelled = true
    }
  }, [ready])

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 overflow-y-auto px-6 py-6">
      <h1 className="text-lg font-medium">Interactions</h1>
      <p className="mb-4 text-sm text-muted-foreground">
        Saved retailer conversations, read from the CAP service.
      </p>

      {!ready && (
        <p className="text-sm text-muted-foreground">
          Waiting for the MCP connector…
        </p>
      )}
      {ready && state.kind === "loading" && (
        <p className="text-sm text-muted-foreground">Loading…</p>
      )}
      {state.kind === "error" && (
        <p className="text-sm text-destructive">
          Couldn&apos;t load interactions: {state.message}
        </p>
      )}
      {state.kind === "ok" && state.items.length === 0 && (
        <p className="text-sm text-muted-foreground">
          No saved interactions yet. Finish a retailer chat with “End
          conversation &amp; save”.
        </p>
      )}
      {state.kind === "ok" && (
        <ul className="flex flex-col gap-2">
          {state.items.map((item, i) => {
            const id = pick(item, ID_KEYS)
            const number = pick(item, NUMBER_KEYS)
            const retailer = retailerNameOf(item) ?? number ?? "Interaction"
            const summary = pick(item, SUMMARY_KEYS)
            const meta = [
              formatDate(pick(item, DATE_KEYS)),
              pick(item, CHANNEL_KEYS),
              pick(item, STATUS_KEYS),
              pick(item, OUTCOME_KEYS),
            ].filter(Boolean)
            const body = (
              <>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-medium">{retailer}</span>
                  {(number ?? id) !== retailer && (
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {number ?? id}
                    </span>
                  )}
                </div>
                {meta.length > 0 && (
                  <div className="text-xs text-muted-foreground">
                    {meta.join(" · ")}
                  </div>
                )}
                {summary && (
                  <p className="mt-1 line-clamp-2 text-sm">{summary}</p>
                )}
              </>
            )
            return (
              <li key={id ?? i}>
                {id ? (
                  <Link
                    href={`/interactions/${encodeURIComponent(id)}`}
                    className="block rounded-xl border p-3 hover:bg-muted"
                  >
                    {body}
                  </Link>
                ) : (
                  <div className="rounded-xl border p-3">{body}</div>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
