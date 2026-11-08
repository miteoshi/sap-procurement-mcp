import { generateId } from "ai"

import { Chat } from "@/components/chat"

// A fresh chat id per visit.
export const dynamic = "force-dynamic"

export default function Page() {
  const id = generateId()
  return <Chat key={id} id={id} initialMessages={[]} />
}
