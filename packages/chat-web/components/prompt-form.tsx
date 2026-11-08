"use client"

import * as React from "react"
import { ArrowUpIcon, MicIcon, SquareIcon, Volume2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { cn } from "@/lib/utils"

export interface PromptVoice {
  supported: boolean
  listening: boolean
  interim: string
  error: string | null
  onToggle: () => void
  speaking: boolean
  onStopSpeaking: () => void
}

export function PromptForm({
  isBusy,
  disabledReason,
  voice,
  onSubmit,
  onStop,
}: {
  isBusy: boolean
  /** Set when chatting is not allowed (connector offline). */
  disabledReason: string | null
  voice: PromptVoice
  onSubmit: (text: string) => void
  onStop: () => void
}) {
  const [input, setInput] = React.useState("")
  const disabled = disabledReason !== null

  function handleSubmit(event?: React.FormEvent) {
    event?.preventDefault()
    const text = input.trim()
    if (!text || isBusy || disabled) return
    onSubmit(text)
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      {voice.speaking && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="self-start"
          onClick={voice.onStopSpeaking}
        >
          <Volume2Icon data-icon="inline-start" />
          Stop speaking
        </Button>
      )}
      {voice.error && (
        <p role="alert" className="text-destructive text-xs">
          {voice.error}
        </p>
      )}
      <InputGroup>
        <InputGroupTextarea
          placeholder={
            disabled
              ? "Chat is disabled while the connector is offline"
              : voice.listening
                ? "Listening…"
                : "Send a message…"
          }
          className="p-3.5"
          disabled={disabled}
          value={voice.listening ? voice.interim : input}
          readOnly={voice.listening}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" &&
              !event.shiftKey &&
              !event.nativeEvent.isComposing
            ) {
              event.preventDefault()
              handleSubmit()
            }
          }}
        />
        <InputGroupAddon align="block-end">
          {voice.supported && (
            <InputGroupButton
              type="button"
              size="icon-sm"
              variant={voice.listening ? "default" : "outline"}
              aria-label={voice.listening ? "Stop and send" : "Speak"}
              aria-pressed={voice.listening}
              className={cn("ml-auto", voice.listening && "animate-pulse")}
              disabled={disabled || (isBusy && !voice.listening)}
              onClick={voice.onToggle}
            >
              <MicIcon />
            </InputGroupButton>
          )}
          {isBusy ? (
            <InputGroupButton
              type="button"
              size="icon-sm"
              variant="outline"
              aria-label="Stop generating"
              className={voice.supported ? undefined : "ml-auto"}
              onClick={onStop}
            >
              <SquareIcon />
            </InputGroupButton>
          ) : (
            <InputGroupButton
              type="submit"
              size="icon-sm"
              variant="default"
              aria-label="Send message"
              className={voice.supported ? undefined : "ml-auto"}
              disabled={!input.trim() || disabled || voice.listening}
            >
              <ArrowUpIcon />
            </InputGroupButton>
          )}
        </InputGroupAddon>
      </InputGroup>
      {!voice.supported && (
        <p className="text-muted-foreground text-xs">
          Voice input isn&apos;t supported in this browser. Use Chrome, Edge, or
          Safari.
        </p>
      )}
    </form>
  )
}
