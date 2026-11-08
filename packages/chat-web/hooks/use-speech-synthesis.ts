"use client"

import * as React from "react"

const subscribeNever = () => () => {}

function pickVoice(
  voices: SpeechSynthesisVoice[],
  lang: string
): SpeechSynthesisVoice | undefined {
  const exact = voices.filter(
    (v) => v.lang.toLowerCase() === lang.toLowerCase()
  )
  const prefix = lang.split("-")[0]!.toLowerCase()
  const sameLanguage = voices.filter((v) =>
    v.lang.toLowerCase().startsWith(prefix)
  )
  const pool = exact.length ? exact : sameLanguage
  // Prefer on-device voices: lower latency and no network dependency.
  return pool.find((v) => v.localService) ?? pool[0]
}

export function useSpeechSynthesis({ lang }: { lang: string }) {
  const supported = React.useSyncExternalStore(
    subscribeNever,
    () => typeof window !== "undefined" && "speechSynthesis" in window,
    () => false
  )
  const [speaking, setSpeaking] = React.useState(false)
  const pending = React.useRef(0)
  const voices = React.useRef<SpeechSynthesisVoice[]>([])

  React.useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return
    const load = () => {
      voices.current = window.speechSynthesis.getVoices()
    }
    load()
    window.speechSynthesis.addEventListener("voiceschanged", load)
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", load)
      window.speechSynthesis.cancel()
    }
  }, [])

  /**
   * Queue one chunk of speech. Callers pass sentence-sized chunks: Chrome stops
   * long utterances after roughly 15 seconds, and short chunks also let speech
   * begin while the rest of the answer is still streaming in.
   */
  const speak = React.useCallback(
    (text: string) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return
      const trimmed = text.trim()
      if (!trimmed) return

      const utterance = new SpeechSynthesisUtterance(trimmed)
      utterance.lang = lang
      const voice = pickVoice(voices.current, lang)
      if (voice) utterance.voice = voice

      pending.current += 1
      setSpeaking(true)
      const done = () => {
        pending.current = Math.max(0, pending.current - 1)
        if (pending.current === 0) setSpeaking(false)
      }
      utterance.onend = done
      utterance.onerror = done
      window.speechSynthesis.speak(utterance)
    },
    [lang]
  )

  const cancel = React.useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return
    pending.current = 0
    setSpeaking(false)
    window.speechSynthesis.cancel()
  }, [])

  return { supported, speaking, speak, cancel }
}
