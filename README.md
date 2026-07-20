# SAP Procurement MCP Gateway

An enterprise-style Model Context Protocol (MCP) server that enables AI
assistants such as Claude to interact with SAP procurement systems using natural
language.

The project follows a layered architecture where the MCP server exposes business
tools, while an SAP CAP backend provides the underlying procurement domain
through OData. Because the MCP layer depends only on the OData contract, the
backend can be replaced with SAP S/4HANA or another compliant service without
changing the AI integration.

---

## Architecture

```
                       Natural Language
                              │
                              ▼
                        Claude Desktop
                              │
                    Model Context Protocol
                              │
                              ▼
                   Procurement MCP Server
                              │
       ┌──────────────────────┼──────────────────────┐
       │                      │                      │
       ▼                      ▼                      ▼
    Tool Layer          Service Layer          CAP Client
(Input Validation)   (Business Logic)     (OData + Auth)
                              │
                              ▼
                   SAP CAP Procurement Service
                              │
                              ▼
                   SQLite (Dev) / SAP HANA
```

---

## Project Structure

```
packages/

├── cap-service/
│   ├── SAP CAP service
│   ├── Procurement domain model
│   ├── OData V4 endpoints
│   └── SQLite (dev) / SAP HANA (production)
│
└── mcp-server/
    ├── MCP server
    ├── Tool definitions
    ├── Business services
    ├── CAP client
    └── Authentication
```

---

## Features

### AI + SAP Integration

- MCP server compatible with Claude Desktop
- Natural language interaction with SAP procurement data
- Automatic multi-step tool chaining
- Separation between AI layer and SAP backend

---

### Enterprise Architecture

- Layered architecture
- Business services separated from transport layer
- OData client abstraction
- Authentication provider abstraction
- Retry handling
- Request timeout handling
- Correlation ID logging
- Environment-based configuration

---

### Procurement Domain

Current capabilities include:

- Vendor search
- Purchase order lookup
- Purchase order status
- Inventory lookup

---

## Tool Flow

The MCP server exposes independent business tools.

Example:

```
User

"Show Bosch's latest purchase orders."

↓

search_vendor

↓

list_recent_orders

↓

Claude summarizes the results
```

More complex workflows are automatically orchestrated by the LLM without
hardcoded logic.

---

## Technology Stack

### Backend

- TypeScript
- Node.js
- SAP CAP
- OData V4

### AI

- Model Context Protocol (MCP)
- Claude Desktop

### Infrastructure

- SQLite (development)
- SAP HANA (production)
- Docker
- Cloud Foundry

---

## Running Locally

```bash
pnpm install

pnpm --filter cap-service watch

pnpm --filter mcp-server dev
```

The CAP service runs locally using SQLite and mocked authentication.

The MCP server communicates with the CAP service over OData.

---

## Deployment

### CAP Service

Deploy independently to SAP BTP / Cloud Foundry.

```
cf push
```

### MCP Server

Containerized deployment.

Compatible with:

- Docker
- Cloud Run
- Cloud Foundry
- Render
- Railway
- Kubernetes

---

## Design Principles

- AI layer is independent of SAP implementation
- Business logic lives in services rather than tools
- Tools remain small and focused
- Transport concerns are isolated inside the CAP client
- Authentication is pluggable
- Designed to evolve toward SAP S/4HANA

---

## Roadmap

- [x] Vendor lookup
- [x] Purchase order lookup
- [x] Inventory lookup
- [x] Claude Desktop integration
- [x] SAP CAP backend
- [ ] Expanded procurement capabilities
- [ ] Inventory analytics
- [ ] Finance module
- [ ] Evaluation framework (DeepEval)
- [ ] CI/CD evaluation pipeline
- [ ] SAP BTP deployment
