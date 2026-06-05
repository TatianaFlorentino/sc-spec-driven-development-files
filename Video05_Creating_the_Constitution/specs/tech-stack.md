# AgentClinic — Tech Stack

## Visão Geral

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Runtime | Node.js | 20+ LTS |
| Linguagem | TypeScript | 5.x |
| Framework Web | Hono | 4.x |
| Banco de Dados | SQLite | via `better-sqlite3` |
| Frontend | HTML + CSS + JS vanilla | — |

---

## Por que cada escolha?

### Node.js
Runtime JavaScript amplamente conhecido, com ecossistema maduro. Facilita a transição de quem já escreve JS no frontend. LTS garante estabilidade ao longo do curso.

### TypeScript
Tipos explícitos servem como documentação viva: ao ler `Patient`, `Symptom` e `Diagnosis`, o estudante entende o modelo de dados sem precisar abrir o banco. Erros aparecem em tempo de compilação, não em produção.

### Hono
Framework web leve e moderno, com API limpa e tipagem nativa para TypeScript. Cada rota fica clara e autocontida — ideal para fins didáticos. Sem "mágica" excessiva como em alguns frameworks maiores.

```ts
// Exemplo: quão legível é uma rota no Hono
app.get('/patients/:id', (c) => {
  const patient = db.getPatient(c.req.param('id'))
  return c.json(patient)
})
```

### SQLite + better-sqlite3
Banco de dados em arquivo — sem servidor para instalar, sem configuração. O estudante roda `npm install` e já tem um banco funcional. A API síncrona do `better-sqlite3` evita complexidade de async/await no início do curso.

### Frontend vanilla
Sem framework de frontend. HTML, CSS e JS puro para não desviar o foco do aprendizado principal: a construção da API. A UI existe para tornar o projeto tangível, não para ser o assunto central.

---

## Estrutura de Diretórios

```
agentclinic/
├── specs/              # Constituição do projeto (você está aqui)
├── src/
│   ├── db/             # Schema e queries SQLite
│   ├── routes/         # Rotas Hono por recurso
│   ├── types/          # Tipos TypeScript compartilhados
│   └── index.ts        # Entry point da aplicação
├── public/             # Assets estáticos da UI
├── package.json
└── tsconfig.json
```

---

## Decisões que NÃO tomamos (e por quê)

| Alternativa | Motivo da recusa |
|-------------|-----------------|
| Express | API menos ergonômica para TypeScript; mais boilerplate |
| Prisma / Drizzle | ORM adiciona uma camada de abstração desnecessária para este escopo |
| React / Vue | Desviaria o foco da aula para frontend |
| PostgreSQL | Requer instalação de servidor externo — barreira de entrada alta |
| Bun | Ainda em maturação; Node.js tem mais material de referência |
