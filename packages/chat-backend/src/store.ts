import { mkdirSync } from "node:fs"
import path from "node:path"
import { DatabaseSync } from "node:sqlite"
import type { UIMessage } from "ai"

export interface ChatSummary {
  id: string
  title: string
  updatedAt: number
}

export interface StoredChat extends ChatSummary {
  messages: UIMessage[]
}

export const CHAT_ID = /^[A-Za-z0-9_-]{1,64}$/

export class ChatStore {
  private db: DatabaseSync

  constructor(file: string) {
    if (file !== ":memory:") mkdirSync(path.dirname(file), { recursive: true })
    this.db = new DatabaseSync(file)
    this.db.exec(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS chats (
        id         TEXT PRIMARY KEY,
        title      TEXT NOT NULL,
        messages   TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      );
      CREATE INDEX IF NOT EXISTS chats_updated ON chats (updated_at DESC);
    `)
  }

  list(): ChatSummary[] {
    return this.db
      .prepare(
        "SELECT id, title, updated_at AS updatedAt FROM chats ORDER BY updated_at DESC LIMIT 200"
      )
      .all() as unknown as ChatSummary[]
  }

  get(id: string): StoredChat | null {
    const row = this.db
      .prepare(
        "SELECT id, title, messages, updated_at AS updatedAt FROM chats WHERE id = ?"
      )
      .get(id) as
      | { id: string; title: string; messages: string; updatedAt: number }
      | undefined
    if (!row) return null
    return {
      id: row.id,
      title: row.title,
      updatedAt: row.updatedAt,
      messages: JSON.parse(row.messages) as UIMessage[],
    }
  }

  /** Insert or update. `titleHint` is only used when the chat is created. */
  save(id: string, messages: UIMessage[], titleHint?: string) {
    const now = Date.now()
    this.db
      .prepare(
        `INSERT INTO chats (id, title, messages, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?)
         ON CONFLICT(id) DO UPDATE SET messages = excluded.messages, updated_at = excluded.updated_at`
      )
      .run(id, titleHint?.trim() || "New chat", JSON.stringify(messages), now, now)
  }

  rename(id: string, title: string) {
    const result = this.db
      .prepare("UPDATE chats SET title = ? WHERE id = ?")
      .run(title, id)
    return Number(result.changes) > 0
  }

  delete(id: string) {
    const result = this.db.prepare("DELETE FROM chats WHERE id = ?").run(id)
    return Number(result.changes) > 0
  }

  close() {
    this.db.close()
  }
}

export function titleFrom(message: UIMessage): string {
  const text = message.parts
    .filter((p): p is Extract<typeof p, { type: "text" }> => p.type === "text")
    .map((p) => p.text)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()
  return text.length > 60 ? `${text.slice(0, 57)}…` : text || "New chat"
}
