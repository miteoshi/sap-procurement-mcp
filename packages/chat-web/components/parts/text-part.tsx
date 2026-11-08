"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { MarkdownPre } from "@/components/markdown-code"
import { type TextUIPart } from "ai"

export function TextPart({ part }: { part: TextUIPart }) {
  return (
    <div className="typeset typeset-docs">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{ pre: MarkdownPre }}
      >
        {part.text}
      </ReactMarkdown>
    </div>
  )
}
