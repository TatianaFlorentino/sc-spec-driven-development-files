# Phase 01 — Plano: Hello, Hono!

## O que será construído

Um servidor HTTP mínimo usando Hono, respondendo `"Hello from AgentClinic"` na rota `GET /`.

O objetivo não é construir funcionalidade real — é estabelecer a fundação técnica do projeto: TypeScript compilando, Hono respondendo, servidor rodando localmente.

## Por quê esta é a primeira fase

Antes de modelar dados ou escrever lógica de negócio, precisamos de um ponto de partida executável. Esta fase resolve três problemas de uma vez:

1. **Valida o ambiente** — confirma que Node.js, TypeScript e Hono estão configurados corretamente
2. **Estabelece convenções** — estrutura de diretórios, scripts npm, tsconfig
3. **Cria momentum** — o estudante vê algo funcionando desde a primeira aula

## O que esta fase NÃO inclui

- Banco de dados (vem na Phase 02)
- Rotas além de `GET /` (vêm nas Phases 03 e 04)
- Lógica de diagnóstico ou modelos de dados
- Interface web (vem na Phase 05)

## Decisões técnicas desta fase

| Decisão | Escolha | Motivo |
|---------|---------|--------|
| Entry point | `src/index.ts` | Convenção clara; TypeScript desde o início |
| Porta | `3000` | Padrão de mercado para desenvolvimento local |
| Hot reload | `tsx watch` | Zero configuração, funciona com TypeScript nativamente |
| Resposta da rota | JSON `{ message: "Hello from AgentClinic Tatiana" }` | JSON é o formato da API; consistente com as fases seguintes |

## Relação com o Roadmap

Esta fase entrega o **Entregável da Phase 1** definido em [specs/roadmap.md](../roadmap.md):
> servidor rodando em `localhost:3000` respondendo `{ status: "clinic is open" }`

> **Nota:** o campo mudou de `status` para `message` para deixar a rota raiz semanticamente distinta da futura rota `GET /health`.
