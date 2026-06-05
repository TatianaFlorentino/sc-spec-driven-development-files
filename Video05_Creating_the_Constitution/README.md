# AgentClinic SDD

A fictional clinic where AI agents seek help for their most common ailments — hallucination, context rot, infinite loops, and identity drift.

Built as a hands-on example of **Spec-Driven Development (SDD)**: every feature starts as a written specification before a single line of code is written.

> Part of the course [Reasoning About Code with Claude](https://www.deeplearning.ai) on DeepLearning.AI.

---

## What is Spec-Driven Development?

SDD is a development workflow where specs come before code:

1. **Write the Constitution** — mission, tech stack, roadmap (`specs/`)
2. **Specify the feature** — plan, requirements, acceptance criteria
3. **Implement** — code that satisfies the spec, nothing more
4. **Validate** — run the checks defined in the spec
5. **Replan** — update the constitution to reflect what was actually built

The commit history is the audit trail: you can read it like a story.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js 20+ LTS |
| Language | TypeScript 5.x (strict) |
| Web Framework | Hono 3.x |
| Node Adapter | @hono/node-server 0.5.x |
| Database | SQLite via `better-sqlite3` *(Phase 02)* |
| Frontend | HTML + CSS + JS vanilla *(Phase 05)* |

---

## Running locally

```bash
git clone <repo-url>
cd Video05_Creating_the_Constitution
npm install
npm run dev
```

The server starts at `http://localhost:3000`.

```bash
curl http://localhost:3000/
# {"message":"Hello from AgentClinic"}
```

---

## Project structure

```
agentclinic/
├── specs/                        # The Constitution — specs before code
│   ├── mission.md                # Vision, audience, scope, constraints
│   ├── tech-stack.md             # Stack decisions and rationale
│   ├── roadmap.md                # Development phases
│   └── phase-01-hello-hono/      # Feature spec: Phase 01
│       ├── plan.md               # What & why
│       ├── requirements.md       # Acceptance criteria
│       └── validation.md        # How to verify
├── src/
│   └── index.ts                  # Hono server entry point
├── package.json
└── tsconfig.json
```

---

## SDD in the commit history

Each commit maps to a step in the SDD workflow:

```
feat: add project constitution (mission, tech-stack, roadmap)
  └─ Step 1 — Constitution written before any feature work

docs: add phase-01 hello-hono specs
  └─ Step 2 — Spec written before implementation

feat(phase-01): implement hello-hono server
  └─ Step 3 — Code written to satisfy the spec

fix(phase-01): align response message and startup log with spec
  └─ Step 4 — Validation caught a mismatch; code fixed to match spec

docs: update constitution to reflect phase-01 reality
  └─ Step 5 — Constitution updated after implementation learnings

docs(phase-01): close out all spec files after validation
  └─ Acceptance criteria and checklist marked done
```

The pattern repeats for every phase: **spec → code → validate → replan**.

---

## Roadmap

| Phase | Description | Status |
|-------|-------------|--------|
| 01 | Hello, Hono — basic server | ✅ Done |
| 02 | Data modeling — TypeScript types + SQLite schema | Planned |
| 03 | Agents API — CRUD for patient agents | Planned |
| 04 | Consultations API — symptoms in, diagnosis out | Planned |
| 05 | Basic web UI | Planned |
| 06 | Polish and documentation | Planned |

---

## Learn more

This project is part of **[Reasoning About Code with Claude](https://www.deeplearning.ai)** on DeepLearning.AI — a course on using Claude to write better-specified, more maintainable software.
