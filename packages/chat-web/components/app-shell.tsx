"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { MenuIcon, Volume2Icon, VolumeXIcon } from "lucide-react"

import { useConnector } from "@/hooks/use-connector"
import { useVoiceSettings, VOICE_LANGUAGES } from "@/hooks/use-voice-settings"
import { ChatSidebar } from "@/components/chat-sidebar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function ConnectorBadge() {
  const { status, ready, reason, backendUnreachable } = useConnector()
  const tone = ready
    ? "bg-emerald-500"
    : status?.state === "connecting"
      ? "bg-amber-500"
      : "bg-red-500"
  const label = ready
    ? `${status?.name} · ${status?.toolCount} tools`
    : backendUnreachable
      ? "Backend unreachable"
      : (reason ?? "Checking…")
  return (
    <div
      className="text-muted-foreground flex min-w-0 items-center gap-2 text-xs"
      role="status"
      aria-live="polite"
      title={reason ?? undefined}
    >
      <span className={cn("size-2 shrink-0 rounded-full", tone)} />
      <span className="truncate">{label}</span>
    </div>
  )
}

function VoiceControls() {
  const { voiceReplies, setVoiceReplies, lang, setLang } = useVoiceSettings()
  return (
    <div className="flex items-center gap-1">
      <select
        aria-label="Voice language"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="bg-background text-foreground border-input h-7 rounded-xl border px-2 text-xs"
      >
        {VOICE_LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label={
          voiceReplies ? "Turn off spoken replies" : "Turn on spoken replies"
        }
        aria-pressed={voiceReplies}
        title={voiceReplies ? "Spoken replies on" : "Spoken replies off"}
        onClick={() => setVoiceReplies(!voiceReplies)}
      >
        {voiceReplies ? <Volume2Icon /> : <VolumeXIcon />}
      </Button>
    </div>
  )
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  // The drawer is "open for" the page it was opened on, so navigating
  // elsewhere closes it without an effect.
  const [openFor, setOpenFor] = React.useState<string | null>(null)
  const open = openFor === pathname
  const setOpen = (value: boolean) => setOpenFor(value ? pathname : null)

  return (
    <div className="flex h-svh">
      <aside className="bg-sidebar text-sidebar-foreground border-sidebar-border hidden w-64 shrink-0 border-r md:block">
        <ChatSidebar />
      </aside>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <aside className="bg-sidebar text-sidebar-foreground relative h-full w-72 max-w-[85%]">
            <ChatSidebar />
          </aside>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between gap-3 px-4 py-2.5">
          <div className="flex min-w-0 items-center gap-2">
            <Button
              variant="ghost"
              size="icon-sm"
              className="md:hidden"
              aria-label="Open chat history"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </Button>
            <ConnectorBadge />
          </div>
          <VoiceControls />
        </header>
        {children}
      </div>
    </div>
  )
}
