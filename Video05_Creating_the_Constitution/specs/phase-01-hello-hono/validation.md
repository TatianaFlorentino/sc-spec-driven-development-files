# Phase 01 — Validação

Como verificar que a Phase 01 está funcionando corretamente.

## Pré-requisito

O servidor deve estar rodando:

```bash
npm run dev
```

O terminal deve exibir algo como:

```
Server is running on http://localhost:3000
```

---

## V-01 Validação via curl

```bash
curl -i http://localhost:3000/
```

**Saída esperada:**

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8

{"message":"Hello from AgentClinic"}
```

**O que verificar:**
- Linha de status: `200 OK` ✓
- Header `Content-Type`: contém `application/json` ✓
- Corpo: `{"message":"Hello from AgentClinic"}` ✓

---

## V-02 Validação via navegador

1. Abra `http://localhost:3000/` no navegador
2. A página deve exibir o JSON diretamente (ou formatado, dependendo do browser)

**Resultado esperado:**

```json
{
  "message": "Hello from AgentClinic"
}
```

---

## V-03 Validação de TypeScript

```bash
npx tsc --noEmit
```

**Resultado esperado:** nenhuma saída (zero erros).

Qualquer linha de erro indica falha no requisito **RNF-01**.

---

## V-04 Validação de hot reload

1. Com `npm run dev` rodando, abra `src/index.ts`
2. Altere `"Hello from AgentClinic"` para `"Hello from AgentClinic v2"`
3. Salve o arquivo
4. Execute `curl http://localhost:3000/` novamente

**Resultado esperado:**

```json
{"message":"Hello from AgentClinic v2"}
```

5. Reverta a alteração antes de fazer commit.

---

## Checklist Final

Execute cada validação e marque antes de avançar para a Phase 02:

- [x] V-01 curl retorna `200` com corpo correto
- [x] V-02 navegador exibe o JSON
- [x] V-03 `tsc --noEmit` sem erros
- [x] V-04 hot reload atualiza a resposta em menos de 2 segundos
- [x] `npm run dev` exibe mensagem de confirmação no terminal

---

## Falhas comuns e soluções

| Sintoma | Causa provável | Solução |
|---------|---------------|---------|
| `Cannot find module 'hono'` | Dependências não instaladas | `npm install` |
| `Port 3000 is already in use` | Outro processo na porta | `npx kill-port 3000` |
| `tsc: command not found` | TypeScript não instalado | `npm install` |
| `SyntaxError` no terminal | TypeScript inválido | Verificar `src/index.ts` |
| Resposta em texto puro (não JSON) | Falta `c.json()` na rota | Usar `c.json({...})` em vez de `c.text()` |
