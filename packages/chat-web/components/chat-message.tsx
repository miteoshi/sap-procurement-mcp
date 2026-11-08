"use client"

import { type TextUIPart, type UIMessage } from "ai"

import { MessageActions } from "@/components/message-actions"
import {
  ApprovalCard,
  McpToolPartView,
  type McpToolPart,
} from "@/components/parts/mcp-tool-part"
import { TextPart } from "@/components/parts/text-part"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Message, MessageContent } from "@/components/ui/message"
import { Trace } from "@/components/ui/trace"

type Block =
  | { kind: "text"; part: TextUIPart }
  | { kind: "tools"; parts: McpToolPart[] }
  | { kind: "approval"; part: McpToolPart & { state: "approval-requested" } }

function isPendingApproval(
  part: McpToolPart
): part is McpToolPart & { state: "approval-requested" } {
  return part.state === "approval-requested" && !part.approval.isAutomatic
}

// Text splits tool calls into runs; each run gets one Trace. A call waiting on
// the user becomes its own interactive card.
function groupParts(parts: UIMessage["parts"]): Block[] {
  const blocks: Block[] = []
  for (const part of parts) {
    if (part.type === "text") {
      if (!part.text.trim()) continue
      const last = blocks.at(-1)
      if (last?.kind === "text") {
        last.part = { ...last.part, text: last.part.text + part.text }
      } else {
        blocks.push({ kind: "text", part })
      }
    } else if (part.type === "dynamic-tool") {
      if (isPendingApproval(part)) {
        blocks.push({ kind: "approval", part })
        continue
      }
      const last = blocks.at(-1)
      if (last?.kind === "tools") last.parts.push(part)
      else blocks.push({ kind: "tools", parts: [part] })
    }
  }
  return blocks
}

export function ChatMessage({
  message,
  isStreaming = false,
  onRetry,
  onSpeak,
  onApproval,
}: {
  message: UIMessage
  isStreaming?: boolean
  onRetry?: () => void
  onSpeak?: (text: string) => void
  onApproval: (approvalId: string, approved: boolean) => void
}) {
  if (message.role === "user") {
    return (
      <Message align="end">
        <MessageContent>
          <Bubble align="end" variant="muted">
            <BubbleContent>
              {message.parts
                .filter((p): p is TextUIPart => p.type === "text")
                .map((p) => p.text)
                .join("")}
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    )
  }

  const blocks = groupParts(message.parts)
  const text = blocks
    .flatMap((b) => (b.kind === "text" ? [b.part.text] : []))
    .join("\n\n")

  return (
    <Message align="start">
      <MessageContent>
        {blocks.map((block, index) => {
          switch (block.kind) {
            case "text":
              return <TextPart key={index} part={block.part} />
            case "approval":
              return (
                <ApprovalCard
                  key={block.part.toolCallId}
                  part={block.part}
                  onRespond={onApproval}
                />
              )
            case "tools":
              return (
                <Trace key={index}>
                  {block.parts.map((part) => (
                    <McpToolPartView
                      key={part.toolCallId}
                      part={part}
                      isStreaming={isStreaming}
                    />
                  ))}
                </Trace>
              )
          }
        })}
        {!isStreaming && text && (
          <MessageActions
            text={text}
            onRetry={onRetry}
            onSpeak={onSpeak ? () => onSpeak(text) : undefined}
          />
        )}
      </MessageContent>
    </Message>
  )
}
