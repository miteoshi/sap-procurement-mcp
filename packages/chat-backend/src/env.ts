import "dotenv/config"
import { randomBytes } from "node:crypto"
import path from "node:path"
import { z } from "zod"

const schema = z.object({
  PORT: z.coerce.number().int().default(8787),
  HOST: z.string().default("127.0.0.1"),
  ALLOWED_ORIGIN: z.string().default("http://localhost:3000"),
  DB_PATH: z.string().default("./data/chat.sqlite"),

  ANTHROPIC_API_KEY: z.string().min(1, "ANTHROPIC_API_KEY is required"),
  MODEL: z.string().default("claude-sonnet-5-5"),
  MAX_OUTPUT_TOKENS: z.coerce.number().int().default(4096),
  MAX_STEPS: z.coerce.number().int().default(10),
  TOOL_APPROVAL_SECRET: z.string().optional(),

  MCP_COMMAND: z.string().default("node"),
  MCP_ARGS: z.string().default("dist/server.js"),
  MCP_CWD: z.string().default("../mcp-server"),
})

const parsed = schema.safeParse(process.env)
if (!parsed.success) {
  console.error("Invalid configuration:")
  for (const issue of parsed.error.issues) {
    console.error(`  ${issue.path.join(".")}: ${issue.message}`)
  }
  process.exit(1)
}

const raw = parsed.data

export const env = {
  ...raw,
  DB_PATH: path.resolve(raw.DB_PATH),
  MCP_CWD: path.resolve(raw.MCP_CWD),
  MCP_ARGS: raw.MCP_ARGS.split(/\s+/).filter(Boolean),
  TOOL_APPROVAL_SECRET:
    raw.TOOL_APPROVAL_SECRET || randomBytes(32).toString("hex"),
  GENERATED_APPROVAL_SECRET: !raw.TOOL_APPROVAL_SECRET,
}
