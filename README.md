# Retailer Voice Assistant (MCP + SAP CAP)

A browser-based voice agent for FMCG retailer conversations. A retailer (or a sales rep on their behalf) speaks or types; the assistant answers questions about products, prices, schemes and availability from business data, captures product interest and follow-ups, and saves a summary and outcome of every conversation. Past interactions can be reviewed in the app.

While merging, remember to merge readme too. This branch, is built on top of existing procurement mcp.

The assistant never answers from its own knowledge. Every fact comes from tools exposed by an MCP server that reads a SAP CAP service.

## Requirements coverage

| Requirement | How it is met |
|---|---|
| Browser voice agent with spoken replies | Mic input and spoken replies via the browser's Web Speech API. Answers are spoken sentence by sentence while they stream. |
| Text fallback if voice is unsupported | The text box always works. Voice controls are shown only when the browser supports them (Chrome, Edge, Safari). |
| Answer questions on products, prices, schemes, availability | MCP tools query the FMCG sample data in CAP (`search_fmcg_products`, `get_fmcg_product_details`, `get_active_fmcg_schemes`). |
| Capture product interest, quantities, follow-ups | `capture_fmcg_product_interest` and `create_retail_follow_up` write to CAP. |
| Summary and saved outcome at the end | "End conversation & save" button asks the assistant to call `complete_retail_interaction` with a summary and an outcome. |
| Start a conversation, interact, review previous ones | New chat, the chat itself, chat history in the sidebar, and an Interactions page that lists and opens saved records from CAP. |

## Architecture

```
Browser (Next.js, :3000)
  mic -> text, text + speech
        |  POST /api/chat  (streamed reply back)
        v
chat-backend (Hono, :8787)
  LLM (Claude or Gemini), SQLite chat history, approvals
        |  tool calls over stdio (JSON-RPC)
        v
mcp-server (child process of the backend)
        |  OData
        v
cap-service (SAP CAP)
```

- **Browser** (`packages/chat-web`): chat UI built on the shadcn chatbot template. Handles voice, chat history and the Interactions pages.
- **Backend** (`packages/chat-backend`): a browser cannot talk to a stdio MCP server, so this service starts the MCP server as a child process, hands its tools to the LLM, streams replies to the browser, stores chat history in SQLite, and enforces approvals.
- **MCP server** (`packages/mcp-server`): tools for procurement and FMCG retail (47 in total, 11 for the FMCG retailer flow).
- **CAP service** (`packages/cap-service`): data and OData services, seeded with fictional FMCG data in INR.

### Conversation flow for one retailer call

1. `search_fmcg_retailers` identifies the retailer.
2. `start_retail_interaction` creates the interaction (channel VOICE or TEXT).
3. `search_fmcg_products` then `get_fmcg_product_details` return price, stock and schemes.
4. `add_retail_interaction_message` saves the conversation.
5. `capture_fmcg_product_interest` and `create_retail_follow_up` record interest, quantity and next steps.
6. `complete_retail_interaction` saves the summary and outcome.
7. The Interactions page reads records back with `list_retail_interactions` and `get_retail_interaction`.

## Setup

### Prerequisites
- Node.js 22.13 or newer (the backend uses the built-in `node:sqlite`)
- pnpm
- An API key for one LLM provider: Anthropic
- Chrome, Edge or Safari for voice (needs an internet connection)

### Clone the FMCG branch from this repo
```
git clone --branch FMCG --single-branch --depth 1 https://github.com/miteoshi/sap-procurement-mcp.git

```

### Install
```bash
pnpm install
```

### Configure
```bash
# CAP/MCP settings: set your CAP service URL as you already do
cp packages/mcp-server/.env.example packages/mcp-server/.env

# Chat backend
cp packages/chat-backend/.env.example packages/chat-backend/.env
# set LLM_PROVIDER and the matching key, e.g.
#   LLM_PROVIDER=anthropic
#   ANTHROPIC_API_KEY=sk-ant-...
#   MODEL=claude-haiku-5-5        (or claude-sonnet-5-5 for more reliable tool use)
# or
#   LLM_PROVIDER=google
#   GOOGLE_GENERATIVE_AI_API_KEY=...

# Web app
cp packages/chat-web/.env.example packages/chat-web/.env.local
```


### Run these in terminal
```bash
cd packages/cap-service
pnpm exec cds deploy --to sqlite:db.sqlite
cd ..

pnpm --filter cap-service watch              # 1. CAP service on :4004
pnpm --filter mcp-server build               # 2. build once; the backend launches it itself
pnpm --filter chat-backend dev               # 3. API on :8787
pnpm --filter chat-web dev                   # 4. UI on :3000
```

Open http://localhost:3000. The header shows "Connected" when the MCP server is up. Do not start the MCP server yourself. The backend runs it, and its stdout is reserved for the protocol, so logs must go to stderr.

## Technical approach

- **MCP as the only data path.** The assistant has no other source of facts, and the system prompt forbids inventing values. This keeps answers tied to the sample data.
- **Backend in the middle.** The browser cannot run stdio, and the LLM key must stay on the server.
- **Chat is disabled without the connector.** `/api/chat` returns 503 until the MCP server is connected, and the UI reflects that.
- **Write safety.** Read-only tools and the conversation-logging tools run automatically. Every other tool needs user approval, and new tools are gated by default. Approvals are HMAC-signed so a modified browser cannot forge one.
- **Interest is not an order.** The capture tool records an enquiry only. It never places an order or reserves stock, and the prompt tells the assistant not to say otherwise.
- **Voice on top of text.** Speech recognition produces text, and the same chat pipeline runs. For spoken turns the prompt asks for short, markdown-free answers, and replies are spoken as they stream.
- **Interactions page.** Reads saved records back from CAP through the same MCP tools, so the UI and the assistant always see the same data.

## Assumptions

- The data is fictional sample data in INR. Prices and schemes are valid on the dates in the seed files.
- Retailers are identified by name search. There is no retailer login.
- One retailer conversation corresponds to one interaction record. Saving closes it.
- Voice relies on the browser's built-in speech services (Chrome sends audio to Google). Hindi and Gujarati accuracy depends on the browser.
- Summaries and outcomes are written by the model from the conversation and are not edited by the user before saving.

## Known limitations and next steps

- **No authentication.** The backend binds to localhost.
- Chat history is a single shared SQLite file.
- Follow-ups can be created but not closed, because the MCP server has no tool for it.

## Repository layout

```
packages/
  cap-service/    SAP CAP data model, services, seed data
  mcp-server/     MCP tools (procurement + FMCG retail), stdio transport
  chat-backend/   Hono API, LLM orchestration, approvals, SQLite history
  chat-web/       Next.js chat UI, voice, history, Interactions pages
```
