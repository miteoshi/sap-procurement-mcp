"use client"

import { type DynamicToolUIPart } from "ai"
import { CheckIcon, ShieldAlertIcon, XIcon } from "lucide-react"

import { humanizeToolName } from "@/lib/speech-text"
import { StatusIcon } from "@/components/status-icon"
import { Button } from "@/components/ui/button"
import { CodeBlock, CodeBlockContent } from "@/components/ui/code-block"
import {
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ui/trace"

export type McpToolPart = DynamicToolUIPart

/** Tools return MCP content blocks; show the JSON text inside, pretty-printed. */
function formatOutput(output: unknown): string {
  const blocks = (output as { content?: unknown })?.content
  if (Array.isArray(blocks)) {
    const text = blocks
      .map((b) =>
        b && typeof b === "object" && "text" in b ? String(b.text) : ""
      )
      .filter(Boolean)
      .join("\n")
    if (text) {
      try {
        return JSON.stringify(JSON.parse(text), null, 2)
      } catch {
        return text
      }
    }
  }
  return typeof output === "string" ? output : JSON.stringify(output, null, 2)
}

function formatInput(input: unknown): string {
  return JSON.stringify(input ?? {}, null, 2)
}

function reportedError(output: unknown): boolean {
  return (output as { isError?: boolean } | null)?.isError === true
}

export function ApprovalCard({
  part,
  onRespond,
}: {
  part: McpToolPart & { state: "approval-requested" }
  onRespond: (approvalId: string, approved: boolean) => void
}) {
  const reason = part.approval.requestReason
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-amber-500/40 bg-amber-500/5 p-4">
      <div className="flex items-start gap-2">
        <ShieldAlertIcon className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400" />
        <div className="min-w-0">
          <p className="text-sm font-medium">
            Approve: {humanizeToolName(part.toolName)}?
          </p>
          {reason && <p className="text-muted-foreground text-sm">{reason}</p>}
        </div>
      </div>
      <CodeBlock size="sm">
        <CodeBlockContent wrap className="max-h-48">
          {formatInput(part.input)}
        </CodeBlockContent>
      </CodeBlock>
      <div className="flex gap-2">
        <Button size="sm" onClick={() => onRespond(part.approval.id, true)}>
          <CheckIcon data-icon="inline-start" />
          Approve
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => onRespond(part.approval.id, false)}
        >
          <XIcon data-icon="inline-start" />
          Deny
        </Button>
      </div>
    </div>
  )
}

export function McpToolPartView({
  part,
  isStreaming,
}: {
  part: McpToolPart
  isStreaming: boolean
}) {
  const title = humanizeToolName(part.toolName)

  switch (part.state) {
    case "input-streaming":
    case "input-available":
    case "approval-responded": {
      // Waiting on the server (or the approval was just given): show activity,
      // unless the stream is gone, in which case this call never finished.
      const status = isStreaming ? "running" : "error"
      return (
        <TraceLine status={status}>
          <TraceIcon>
            <StatusIcon status={status} />
          </TraceIcon>
          <TraceTitle>
            {isStreaming ? `${title}…` : `${title} didn't finish`}
          </TraceTitle>
        </TraceLine>
      )
    }

    case "approval-requested":
      // Interactive version is rendered by ChatMessage via ApprovalCard.
      return (
        <TraceLine status={isStreaming ? "running" : undefined}>
          <TraceIcon>
            <ShieldAlertIcon />
          </TraceIcon>
          <TraceTitle>{title}</TraceTitle>
          <TraceDescription>waiting for approval</TraceDescription>
        </TraceLine>
      )

    case "output-denied":
      return (
        <TraceLine status="error">
          <TraceIcon>
            <StatusIcon status="error" />
          </TraceIcon>
          <TraceTitle>{title}</TraceTitle>
          <TraceDescription>denied, not run</TraceDescription>
        </TraceLine>
      )

    case "output-error":
      return (
        <TraceCollapsible>
          <TraceCollapsibleTrigger>
            <TraceLine status="error">
              <TraceIcon>
                <StatusIcon status="error" />
              </TraceIcon>
              <TraceTitle>{title} failed</TraceTitle>
            </TraceLine>
          </TraceCollapsibleTrigger>
          <TraceCollapsibleContent>
            <CodeBlock size="sm" variant="destructive">
              <CodeBlockContent wrap className="max-h-64">
                {part.errorText}
              </CodeBlockContent>
            </CodeBlock>
          </TraceCollapsibleContent>
        </TraceCollapsible>
      )

    case "output-available": {
      const failed = reportedError(part.output)
      return (
        <TraceCollapsible>
          <TraceCollapsibleTrigger>
            <TraceLine status={failed ? "error" : undefined}>
              <TraceIcon>
                <StatusIcon status={failed ? "error" : undefined} />
              </TraceIcon>
              <TraceTitle>{title}</TraceTitle>
              {failed && <TraceDescription>returned an error</TraceDescription>}
            </TraceLine>
          </TraceCollapsibleTrigger>
          <TraceCollapsibleContent>
            <div className="flex flex-col gap-2">
              <CodeBlock size="sm">
                <CodeBlockContent wrap className="max-h-40">
                  {formatInput(part.input)}
                </CodeBlockContent>
              </CodeBlock>
              <CodeBlock size="sm" variant={failed ? "destructive" : undefined}>
                <CodeBlockContent wrap className="max-h-64">
                  {formatOutput(part.output)}
                </CodeBlockContent>
              </CodeBlock>
            </div>
          </TraceCollapsibleContent>
        </TraceCollapsible>
      )
    }
  }
}
