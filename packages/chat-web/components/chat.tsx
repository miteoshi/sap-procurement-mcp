"use client"

import * as React from "react"
import Link from "next/link"
import { useChat } from "@ai-sdk/react"
import {
  DefaultChatTransport,
  lastAssistantMessageIsCompleteWithApprovalResponses,
  type UIMessage,
} from "ai"

import { useConnector } from "@/hooks/use-connector"
import { useSpeechRecognition } from "@/hooks/use-speech-recognition"
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis"
import { useVoiceSettings } from "@/hooks/use-voice-settings"
import { API_URL, notifyChatsChanged } from "@/lib/api"
import { humanizeToolName, takeSentences } from "@/lib/speech-text"
import { ChatMessage } from "@/components/chat-message"
import { PromptForm } from "@/components/prompt-form"
import { StatusIcon } from "@/components/status-icon"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"
import { Message, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import { Trace, TraceIcon, TraceLine, TraceTitle } from "@/components/ui/trace"

type InputMode = "voice" | "text"

// How the current turn was entered. Read by the transport at send time (not
// render time), so automatic follow-ups after an approval keep the same mode.
// A plain object rather than a ref: only one Chat is mounted at a time.
let currentInputMode: InputMode = "text"
const setInputMode = (mode: InputMode) => {
  currentInputMode = mode
}
const getInputMode = () => currentInputMode

const SUGGESTIONS = [
  "Which materials are low on stock?",
  "Give me a procurement health check",
  "What schemes are active on sunflower oil?",
  "Start a call with Shreeji General Stores",
]

export function Chat({
  id,
  initialMessages,
}: {
  id: string
  initialMessages: UIMessage[]
}) {
  const connector = useConnector()
  const { voiceReplies, lang } = useVoiceSettings()

  const transport = React.useMemo(
    () =>
      new DefaultChatTransport({
        api: `${API_URL}/api/chat`,
        // The server owns history: send only the newest message.
        prepareSendMessagesRequest: ({ id, messages }) => ({
          body: {
            id,
            message: messages[messages.length - 1],
            inputMode: getInputMode(),
          },
        }),
      }),
    []
  )

  const {
    messages,
    sendMessage,
    regenerate,
    status,
    stop,
    error,
    addToolApprovalResponse,
  } = useChat({
    id,
    messages: initialMessages,
    transport,
    sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithApprovalResponses,
  })

  const isBusy = status === "submitted" || status === "streaming"
  const lastMessage = messages.at(-1)

  // A retailer interaction was saved in this chat (complete tool succeeded).
  const interactionSaved = messages.some((m) =>
    m.parts.some(
      (p) =>
        p.type === "dynamic-tool" &&
        p.toolName === "complete_retail_interaction" &&
        p.state === "output-available"
    )
  )
  const awaitingApproval = messages.some((m) =>
    m.parts.some(
      (p) => p.type === "dynamic-tool" && p.state === "approval-requested"
    )
  )

  // Keep the sidebar in sync: the chat exists as soon as streaming starts.
  const wasBusy = React.useRef(false)
  React.useEffect(() => {
    if (status === "streaming" || (wasBusy.current && status === "ready")) {
      notifyChatsChanged()
    }
    wasBusy.current = isBusy
  }, [status, isBusy])

  // ── voice ───────────────────────────────────────────────────────────────
  const synth = useSpeechSynthesis({ lang })
  const { speak } = synth

  function submit(text: string, mode: InputMode) {
    setInputMode(mode)
    synth.cancel()
    if (messages.length === 0) {
      // Reflect the new chat in the URL without remounting.
      window.history.replaceState(null, "", `/chat/${id}`)
    }
    void sendMessage({ text })
  }

  function endConversation() {
    submit(
      "That's all for now. Please wrap up this conversation: save the interaction with a summary and outcome, then tell me the summary, outcome, products of interest with quantities, and follow-ups. If this wasn't a retailer conversation, just say there's nothing to save.",
      "text"
    )
  }

  const recognition = useSpeechRecognition({
    lang,
    onFinal: (text) => submit(text, "voice"),
  })

  function toggleMic() {
    if (recognition.listening) {
      recognition.stop()
    } else {
      synth.cancel() // don't let the mic hear the assistant
      recognition.start()
    }
  }

  // Speak the answer sentence by sentence while it streams (voice turns only).
  const spoken = React.useRef({
    messageId: "",
    position: 0,
    approvals: new Set<string>(),
  })
  React.useEffect(() => {
    if (!voiceReplies || getInputMode() !== "voice") return
    const last = messages.at(-1)
    if (!last || last.role !== "assistant") return

    if (spoken.current.messageId !== last.id) {
      spoken.current = {
        messageId: last.id,
        position: 0,
        approvals: new Set(),
      }
    }

    const text = last.parts
      .filter((p) => p.type === "text")
      .map((p) => p.text)
      .join("\n\n")
    const { sentences, next } = takeSentences(
      text,
      spoken.current.position,
      status === "ready"
    )
    spoken.current.position = next
    sentences.forEach(speak)

    // Approvals are clicked, never spoken: tell the user to look at the screen.
    for (const part of last.parts) {
      if (
        part.type === "dynamic-tool" &&
        part.state === "approval-requested" &&
        !part.approval.isAutomatic &&
        !spoken.current.approvals.has(part.toolCallId)
      ) {
        spoken.current.approvals.add(part.toolCallId)
        speak(
          `I need your approval to ${humanizeToolName(part.toolName).toLowerCase()}. Please check the screen.`
        )
      }
    }
  }, [messages, status, voiceReplies, speak])

  // ── render ──────────────────────────────────────────────────────────────
  const offlineReason = connector.ready
    ? null
    : (connector.reason ?? "Checking connector…")

  return (
    <div className="mx-auto flex min-h-0 w-full flex-1 flex-col">
      {messages.length === 0 ? (
        <div className="flex flex-1 items-center justify-center p-6">
          <Empty>
            <EmptyHeader>
              <EmptyTitle>What can I help with?</EmptyTitle>
              <EmptyDescription>
                {connector.ready && connector.status
                  ? `Connected to ${connector.status.name} with ${connector.status.toolCount} tools. Type, or tap the mic and speak.`
                  : "Waiting for the MCP connector…"}
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <div className="flex max-w-xl flex-wrap justify-center gap-2">
                {SUGGESTIONS.map((s) => (
                  <Button
                    key={s}
                    variant="outline"
                    size="sm"
                    disabled={!connector.ready}
                    onClick={() => submit(s, "text")}
                  >
                    {s}
                  </Button>
                ))}
              </div>
            </EmptyContent>
          </Empty>
        </div>
      ) : (
        <MessageScrollerProvider>
          <MessageScroller className="flex-1">
            <MessageScrollerViewport>
              <MessageScrollerContent className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-6 py-6">
                {messages.map((message) => (
                  <MessageScrollerItem
                    key={message.id}
                    messageId={message.id}
                    scrollAnchor={message.role === "user"}
                  >
                    <ChatMessage
                      message={message}
                      isStreaming={isBusy && message.id === lastMessage?.id}
                      onApproval={(approvalId, approved) =>
                        void addToolApprovalResponse({
                          id: approvalId,
                          approved,
                        })
                      }
                      onSpeak={
                        synth.supported
                          ? (t) => {
                              synth.cancel()
                              takeSentences(t, 0, true).sentences.forEach(
                                synth.speak
                              )
                            }
                          : undefined
                      }
                      onRetry={
                        !isBusy &&
                        message.id === lastMessage?.id &&
                        connector.ready
                          ? () => {
                              setInputMode("text")
                              void regenerate({ messageId: message.id })
                            }
                          : undefined
                      }
                    />
                  </MessageScrollerItem>
                ))}
                {status === "submitted" && (
                  <MessageScrollerItem messageId="thinking">
                    <Message>
                      <MessageContent>
                        <Trace>
                          <TraceLine status="running">
                            <TraceIcon>
                              <StatusIcon status="running" />
                            </TraceIcon>
                            <TraceTitle>Thinking</TraceTitle>
                          </TraceLine>
                        </Trace>
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>
                )}
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </MessageScrollerProvider>
      )}

      <div className="mx-auto flex w-full max-w-2xl flex-col gap-2 px-6 pb-6">
        {offlineReason && (
          <Alert variant="destructive">
            <AlertTitle>Connector offline</AlertTitle>
            <AlertDescription>
              {offlineReason} Chat is disabled until it reconnects; this page
              retries automatically.
            </AlertDescription>
          </Alert>
        )}
        {error && connector.ready && (
          <Alert variant="destructive">
            <AlertTitle>Request failed</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        )}
        {messages.length > 0 && (
          <div className="flex items-center justify-end gap-2">
            {interactionSaved ? (
              <Link
                href="/interactions"
                className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
              >
                Saved to Interactions · view
              </Link>
            ) : (
              <Button
                variant="outline"
                size="sm"
                disabled={isBusy || awaitingApproval || !connector.ready}
                onClick={endConversation}
              >
                End conversation &amp; save
              </Button>
            )}
          </div>
        )}
        <PromptForm
          isBusy={isBusy}
          disabledReason={offlineReason}
          onSubmit={(text) => submit(text, "text")}
          onStop={() => stop()}
          voice={{
            supported: recognition.supported,
            listening: recognition.listening,
            interim: recognition.interim,
            error: recognition.error,
            onToggle: toggleMic,
            speaking: synth.speaking,
            onStopSpeaking: synth.cancel,
          }}
        />
      </div>
    </div>
  )
}
