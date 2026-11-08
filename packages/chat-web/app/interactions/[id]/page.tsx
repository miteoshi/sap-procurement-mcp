"use client"

import * as React from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeftIcon } from "lucide-react"

import { useConnector } from "@/hooks/use-connector"
import { api } from "@/lib/api"
import {
  CHANNEL_KEYS,
  DATE_KEYS,
  formatDate,
  humanizeKey,
  isObj,
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
  | { kind: "ok"; data: unknown }

function Scalar({ value }: { value: unknown }) {
  if (value === null || value === undefined || value === "")
    return <span className="text-muted-foreground">—</span>
  if (typeof value === "string") {
    const looksDate = /^\d{4}-\d{2}-\d{2}T/.test(value)
    return <>{looksDate ? formatDate(value) : value}</>
  }
  return <>{String(value)}</>
}

function Row({ obj }: { obj: Obj }) {
  const entries = Object.entries(obj).filter(
    ([, v]) => v !== null && v !== undefined && v !== ""
  )
  return (
    <dl className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-0.5 text-sm">
      {entries.map(([k, v]) => (
        <React.Fragment key={k}>
          <dt className="text-muted-foreground">{humanizeKey(k)}</dt>
          <dd className="min-w-0 break-words">
            {isObj(v) ? <Row obj={v} /> : <Scalar value={v} />}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  )
}

function Section({ title, items }: { title: string; items: unknown[] }) {
  return (
    <section className="mt-6">
      <h2 className="mb-2 text-sm font-medium">
        {title} <span className="text-muted-foreground">({items.length})</span>
      </h2>
      {items.length === 0 ? (
        <p className="text-sm text-muted-foreground">None recorded.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {items.map((item, i) => (
            <li key={i} className="rounded-xl border p-3">
              {isObj(item) ? <Row obj={item} /> : <Scalar value={item} />}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default function InteractionPage() {
  const { id: rawId } = useParams<{ id: string }>()
  const id = decodeURIComponent(rawId)
  const { ready } = useConnector()
  const [state, setState] = React.useState<State>({ kind: "loading" })

  React.useEffect(() => {
    if (!ready) return
    let cancelled = false
    api
      .getInteraction(id)
      .then((r) => !cancelled && setState({ kind: "ok", data: r.data }))
      .catch(
        (e: Error) =>
          !cancelled && setState({ kind: "error", message: e.message })
      )
    return () => {
      cancelled = true
    }
  }, [ready, id])

  // The record may be wrapped ({ interaction: {...} }); unwrap one level.
  let record: Obj = {}
  if (state.kind === "ok" && isObj(state.data)) {
    const inner = Object.values(state.data).filter(isObj)
    record =
      Object.keys(state.data).length <= 2 && inner.length === 1
        ? { ...state.data, ...inner[0] }
        : state.data
  }

  const arrays = Object.entries(record).filter(([, v]) => Array.isArray(v)) as [
    string,
    unknown[],
  ][]
  const scalars = Object.fromEntries(
    Object.entries(record).filter(([, v]) => !Array.isArray(v))
  )
  const summary = pick(record, SUMMARY_KEYS)
  const outcome = pick(record, OUTCOME_KEYS)
  const meta = [
    formatDate(pick(record, DATE_KEYS)),
    pick(record, CHANNEL_KEYS),
    pick(record, STATUS_KEYS),
  ].filter(Boolean)

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 overflow-y-auto px-6 py-6">
      <Link
        href="/interactions"
        className="mb-3 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
      >
        <ArrowLeftIcon className="size-3" /> All interactions
      </Link>

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
          Couldn&apos;t load this interaction: {state.message}
        </p>
      )}

      {state.kind === "ok" && (
        <>
          <h1 className="text-lg font-medium">
            {retailerNameOf(record) ??
              pick(record, NUMBER_KEYS) ??
              "Interaction"}
          </h1>
          <p className="text-xs text-muted-foreground">
            {[pick(record, NUMBER_KEYS) ?? id, ...meta].join(" · ")}
          </p>

          {(summary || outcome) && (
            <section className="mt-4 rounded-xl bg-muted/50 p-3 text-sm">
              {outcome && (
                <p>
                  <span className="font-medium">Outcome:</span> {outcome}
                </p>
              )}
              {summary && (
                <p className={outcome ? "mt-1" : undefined}>{summary}</p>
              )}
            </section>
          )}

          <section className="mt-6">
            <h2 className="mb-2 text-sm font-medium">Details</h2>
            <Row obj={scalars} />
          </section>

          {arrays.map(([k, items]) => (
            <Section key={k} title={humanizeKey(k)} items={items} />
          ))}
        </>
      )}
    </div>
  )
}
