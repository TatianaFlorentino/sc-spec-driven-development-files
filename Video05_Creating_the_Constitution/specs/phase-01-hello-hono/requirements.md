# Phase 01 — Requisitos

## RF-01 Rota raiz

**O servidor deve responder à rota `GET /` com status HTTP 200 e corpo JSON.**

```
GET http://localhost:3000/
```

Resposta esperada:

```json
{
  "message": "Hello from AgentClinic"
}
```

### Critérios de aceitação

- [ ] Status HTTP é exatamente `200`
- [ ] Header `Content-Type` contém `application/json`
- [ ] Corpo contém a chave `message` com valor `"Hello from AgentClinic"` (string exata)
- [ ] Nenhuma outra chave está presente no corpo

---

## RF-02 Porta e host

**O servidor deve ouvir na porta `3000` em `localhost`.**

### Critérios de aceitação

- [ ] `http://localhost:3000/` é acessível após `npm run dev`
- [ ] A porta é configurada no código, não hardcoded em múltiplos lugares
- [ ] O terminal exibe uma mensagem confirmando que o servidor está ativo

---

## RF-03 Hot reload em desenvolvimento

**Alterações em `src/` devem reiniciar o servidor automaticamente, sem encerrar o processo manualmente.**

### Critérios de aceitação

- [ ] Editar e salvar `src/index.ts` reinicia o servidor em menos de 2 segundos
- [ ] O hot reload funciona com o script `npm run dev`

---

## RNF-01 TypeScript strict

**Todo o código deve ser TypeScript válido com `strict: true`.**

### Critérios de aceitação

- [ ] `npx tsc --noEmit` executa sem erros
- [ ] `tsconfig.json` inclui `"strict": true`

---

## RNF-02 Estrutura de diretórios

**O projeto deve seguir a estrutura definida em [specs/tech-stack.md](../tech-stack.md).**

```
src/
└── index.ts    ← entry point do servidor
```

### Critérios de aceitação

- [ ] O entry point é `src/index.ts`
- [ ] Nenhum arquivo TypeScript existe fora de `src/` (exceto configurações de tooling)

---

## RNF-03 Dependências mínimas

**Apenas dependências necessárias para esta fase devem estar em `package.json`.**

| Pacote | Tipo | Motivo |
|--------|------|--------|
| `hono` | `dependencies` | Framework web |
| `@hono/node-server` | `dependencies` | Adapter para rodar Hono no Node.js |
| `tsx` | `devDependencies` | Execução e watch de TypeScript |
| `typescript` | `devDependencies` | Compilador TypeScript |
| `@types/node` | `devDependencies` | Tipos do Node.js |

### Critérios de aceitação

- [ ] `npm install` seguido de `npm run dev` funciona em uma máquina limpa
- [ ] Nenhuma dependência além das listadas acima está em `package.json`
