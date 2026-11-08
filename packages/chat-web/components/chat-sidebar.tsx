"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  ClipboardListIcon,
  PencilIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react"

import { groupChats, useChats } from "@/hooks/use-chats"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ChatSidebar() {
  const { chats, loaded, remove, rename } = useChats()
  const pathname = usePathname()
  const router = useRouter()
  const activeId = pathname.startsWith("/chat/")
    ? decodeURIComponent(pathname.slice("/chat/".length))
    : null
  const groups = React.useMemo(() => groupChats(chats), [chats])

  async function onDelete(id: string, title: string) {
    if (!window.confirm(`Delete "${title}"? This can't be undone.`)) return
    await remove(id).catch(() => window.alert("Couldn't delete the chat."))
    if (id === activeId) router.push("/")
  }

  async function onRename(id: string, title: string) {
    const next = window.prompt("Rename chat", title)?.trim()
    if (!next || next === title) return
    await rename(id, next).catch(() =>
      window.alert("Couldn't rename the chat.")
    )
  }

  return (
    <div className="flex h-full min-h-0 flex-col gap-3 p-3">
      <Button
        variant="secondary"
        // Full navigation so a fresh chat id is minted and state resets.
        // eslint-disable-next-line @next/next/no-html-link-for-pages
        render={<a href="/" />}
        nativeButton={false}
        className="justify-start"
      >
        <PlusIcon data-icon="inline-start" />
        New chat
      </Button>

      <Button
        variant="ghost"
        render={<Link href="/interactions" />}
        nativeButton={false}
        className={cn(
          "justify-start",
          pathname.startsWith("/interactions") && "bg-sidebar-accent"
        )}
      >
        <ClipboardListIcon data-icon="inline-start" />
        Interactions
      </Button>

      <nav
        aria-label="Chat history"
        className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto"
      >
        {loaded && groups.length === 0 && (
          <p className="px-2 text-sm text-muted-foreground">No chats yet.</p>
        )}
        {groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-0.5">
            <h2 className="px-2 pb-1 text-xs font-medium text-muted-foreground">
              {group.label}
            </h2>
            {group.items.map((chat) => (
              <div
                key={chat.id}
                className={cn(
                  "group flex items-center rounded-xl hover:bg-sidebar-accent",
                  chat.id === activeId && "bg-sidebar-accent"
                )}
              >
                <Link
                  href={`/chat/${chat.id}`}
                  className="min-w-0 flex-1 truncate px-2 py-1.5 text-sm"
                  aria-current={chat.id === activeId ? "page" : undefined}
                  title={chat.title}
                >
                  {chat.title}
                </Link>
                <div className="flex pr-1 md:opacity-0 md:group-focus-within:opacity-100 md:group-hover:opacity-100">
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    aria-label={`Rename ${chat.title}`}
                    onClick={() => void onRename(chat.id, chat.title)}
                  >
                    <PencilIcon />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    aria-label={`Delete ${chat.title}`}
                    onClick={() => void onDelete(chat.id, chat.title)}
                  >
                    <Trash2Icon />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </nav>
    </div>
  )
}
