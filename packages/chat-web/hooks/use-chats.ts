"use client"

import * as React from "react"

import { api, CHATS_CHANGED, type ChatSummary } from "@/lib/api"

export function useChats() {
  const [chats, setChats] = React.useState<ChatSummary[]>([])
  const [loaded, setLoaded] = React.useState(false)

  const refresh = React.useCallback(
    () =>
      api
        .listChats()
        .then(setChats)
        .catch(() => {
          // Backend down: keep showing what we have.
        })
        .finally(() => setLoaded(true)),
    []
  )

  React.useEffect(() => {
    void refresh()
    const onChange = () => void refresh()
    window.addEventListener(CHATS_CHANGED, onChange)
    return () => window.removeEventListener(CHATS_CHANGED, onChange)
  }, [refresh])

  const remove = React.useCallback(
    async (id: string) => {
      await api.deleteChat(id)
      await refresh()
    },
    [refresh]
  )

  const rename = React.useCallback(
    async (id: string, title: string) => {
      await api.renameChat(id, title)
      await refresh()
    },
    [refresh]
  )

  return { chats, loaded, refresh, remove, rename }
}

const DAY = 24 * 60 * 60 * 1000

/** Group like Claude's sidebar: Today / Yesterday / Previous 7 days / Older. */
export function groupChats(chats: ChatSummary[], now = Date.now()) {
  const startOfToday = new Date(now).setHours(0, 0, 0, 0)
  const groups: { label: string; items: ChatSummary[] }[] = [
    { label: "Today", items: [] },
    { label: "Yesterday", items: [] },
    { label: "Previous 7 days", items: [] },
    { label: "Older", items: [] },
  ]
  for (const chat of chats) {
    const index =
      chat.updatedAt >= startOfToday
        ? 0
        : chat.updatedAt >= startOfToday - DAY
          ? 1
          : chat.updatedAt >= startOfToday - 7 * DAY
            ? 2
            : 3
    groups[index]!.items.push(chat)
  }
  return groups.filter((g) => g.items.length > 0)
}
