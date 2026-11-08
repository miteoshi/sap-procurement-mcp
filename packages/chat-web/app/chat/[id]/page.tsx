import type { UIMessage } from "ai"

import { Chat } from "@/components/chat"
import { SERVER_API_URL } from "@/lib/api"

export const dynamic = "force-dynamic"

const CHAT_ID = /^[A-Za-z0-9_-]{1,64}$/

async function load(
  id: string
): Promise<
  | { kind: "ok"; messages: UIMessage[] }
  | { kind: "missing" }
  | { kind: "unreachable" }
> {
  try {
    const res = await fetch(`${SERVER_API_URL}/api/chats/${id}`, {
      cache: "no-store",
    })
    if (res.status === 404) return { kind: "missing" }
    if (!res.ok) return { kind: "unreachable" }
    const chat = (await res.json()) as { messages: UIMessage[] }
    return { kind: "ok", messages: chat.messages }
  } catch {
    return { kind: "unreachable" }
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  if (!CHAT_ID.test(id)) {
    return <Notice title="Invalid chat link" body="That chat id isn't valid." />
  }

  const result = await load(id)

  if (result.kind === "unreachable") {
    return (
      <Notice
        title="Can't load this chat"
        body="The chat backend isn't reachable. Check that it's running, then reload."
      />
    )
  }

  return (
    <Chat
      key={id}
      id={id}
      initialMessages={result.kind === "ok" ? result.messages : []}
    />
  )
}

function Notice({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-1 items-center justify-center p-6 text-center">
      <div className="flex max-w-sm flex-col gap-1">
        <h1 className="text-sm font-medium">{title}</h1>
        <p className="text-muted-foreground text-sm">{body}</p>
      </div>
    </div>
  )
}
