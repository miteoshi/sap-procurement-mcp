"use client"

import * as React from "react"

// The Web Speech API isn't in TypeScript's DOM lib in every version, so declare
// the small slice we use.
interface RecognitionResult {
  readonly isFinal: boolean
  readonly length: number
  readonly [index: number]: { readonly transcript: string }
}
interface RecognitionEvent {
  readonly resultIndex: number
  readonly results: ArrayLike<RecognitionResult>
}
interface Recognition {
  lang: string
  continuous: boolean
  interimResults: boolean
  maxAlternatives: number
  onstart: (() => void) | null
  onresult: ((event: RecognitionEvent) => void) | null
  onerror: ((event: { error: string }) => void) | null
  onend: (() => void) | null
  start(): void
  stop(): void
  abort(): void
}
type RecognitionCtor = new () => Recognition

function getCtor(): RecognitionCtor | undefined {
  if (typeof window === "undefined") return undefined
  const w = window as unknown as {
    SpeechRecognition?: RecognitionCtor
    webkitSpeechRecognition?: RecognitionCtor
  }
  return w.SpeechRecognition ?? w.webkitSpeechRecognition
}

const subscribeNever = () => () => {}

const ERRORS: Record<string, string> = {
  "not-allowed":
    "Microphone access is blocked. Allow it in your browser's site settings.",
  "service-not-allowed":
    "Speech recognition is blocked by the browser or system settings.",
  "audio-capture": "No microphone was found.",
  network:
    "Speech recognition needs an internet connection (the browser sends audio to its speech service).",
  "language-not-supported": "That language isn't supported for speech input.",
}

export function useSpeechRecognition({
  lang,
  onFinal,
}: {
  lang: string
  onFinal: (text: string) => void
}) {
  // Server render says "unsupported"; the client re-renders with the real answer.
  const supported = React.useSyncExternalStore(
    subscribeNever,
    () => Boolean(getCtor()),
    () => false
  )
  const [listening, setListening] = React.useState(false)
  const [interim, setInterim] = React.useState("")
  const [error, setError] = React.useState<string | null>(null)

  const recognition = React.useRef<Recognition | null>(null)
  const finalText = React.useRef("")
  const discard = React.useRef(false)
  const onFinalRef = React.useRef(onFinal)
  React.useEffect(() => {
    onFinalRef.current = onFinal
  })

  const start = React.useCallback(() => {
    const Ctor = getCtor()
    if (!Ctor || recognition.current) return

    const rec = new Ctor()
    rec.lang = lang
    rec.continuous = false // one utterance; it ends on a pause
    rec.interimResults = true
    rec.maxAlternatives = 1
    finalText.current = ""
    discard.current = false
    setError(null)

    rec.onstart = () => setListening(true)
    rec.onresult = (event) => {
      let interimText = ""
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i]!
        const transcript = result[0]?.transcript ?? ""
        if (result.isFinal) finalText.current += transcript
        else interimText += transcript
      }
      setInterim((finalText.current + interimText).trim())
    }
    rec.onerror = (event) => {
      // "no-speech" and "aborted" are normal outcomes, not failures.
      if (event.error !== "no-speech" && event.error !== "aborted") {
        setError(ERRORS[event.error] ?? `Speech recognition error: ${event.error}`)
      }
    }
    rec.onend = () => {
      recognition.current = null
      setListening(false)
      setInterim("")
      const text = finalText.current.trim()
      finalText.current = ""
      if (text && !discard.current) onFinalRef.current(text)
    }

    recognition.current = rec
    try {
      rec.start()
    } catch {
      recognition.current = null
      setListening(false)
    }
  }, [lang])

  /** Stop listening and send what was heard. */
  const stop = React.useCallback(() => recognition.current?.stop(), [])

  /** Stop listening and throw away what was heard. */
  const cancel = React.useCallback(() => {
    discard.current = true
    recognition.current?.abort()
  }, [])

  React.useEffect(
    () => () => {
      discard.current = true
      recognition.current?.abort()
    },
    []
  )

  return { supported, listening, interim, error, start, stop, cancel }
}
