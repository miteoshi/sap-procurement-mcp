"use client"

import * as React from "react"

export const VOICE_LANGUAGES = [
  { code: "en-IN", label: "English (India)" },
  { code: "hi-IN", label: "हिन्दी" },
  { code: "gu-IN", label: "ગુજરાતી" },
  { code: "en-US", label: "English (US)" },
] as const

interface VoiceSettings {
  /** Read answers aloud when the question was spoken. */
  voiceReplies: boolean
  setVoiceReplies: (value: boolean) => void
  lang: string
  setLang: (value: string) => void
}

const KEY = "chat-web:voice"
const CHANGED = "chat-web:voice-changed"
const DEFAULT_LANG = process.env.NEXT_PUBLIC_VOICE_LANG ?? "en-IN"

interface Saved {
  voiceReplies?: boolean
  lang?: string
}

// localStorage as an external store: no setState-in-effect, and the server
// render (snapshot null) matches the first client render, then it updates.
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback)
  window.addEventListener(CHANGED, callback)
  return () => {
    window.removeEventListener("storage", callback)
    window.removeEventListener(CHANGED, callback)
  }
}

function getSnapshot(): string | null {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null // storage unavailable: use defaults
  }
}

function write(next: Saved) {
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    // ignore: settings just won't persist
  }
  window.dispatchEvent(new Event(CHANGED))
}

const Context = React.createContext<VoiceSettings | null>(null)

export function VoiceSettingsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const raw = React.useSyncExternalStore(subscribe, getSnapshot, () => null)

  const value = React.useMemo<VoiceSettings>(() => {
    let saved: Saved = {}
    try {
      saved = raw ? (JSON.parse(raw) as Saved) : {}
    } catch {
      // corrupt value: use defaults
    }
    const voiceReplies =
      typeof saved.voiceReplies === "boolean" ? saved.voiceReplies : true
    const lang = typeof saved.lang === "string" ? saved.lang : DEFAULT_LANG
    return {
      voiceReplies,
      lang,
      setVoiceReplies: (v) => write({ voiceReplies: v, lang }),
      setLang: (l) => write({ voiceReplies, lang: l }),
    }
  }, [raw])

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useVoiceSettings() {
  const ctx = React.useContext(Context)
  if (!ctx) {
    throw new Error("useVoiceSettings must be used inside VoiceSettingsProvider")
  }
  return ctx
}
