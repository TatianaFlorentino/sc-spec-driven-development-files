# AgentClinic — Roadmap

Cada fase corresponde a uma aula. O projeto avança de forma incremental: no final de cada fase, o código é executável e demonstrável.

---

## Fase 1 — Scaffold do Projeto
**Aula: Estrutura inicial e "Hello, Clinic!"**

- [ ] Inicializar projeto Node.js com TypeScript
- [ ] Configurar Hono e criar rota `GET /health`
- [ ] Configurar `tsconfig.json` com strict mode
- [ ] Criar estrutura de diretórios (`src/`, `specs/`, `public/`)
- [ ] Adicionar script `dev` com hot reload

**Entregável:** servidor rodando em `localhost:3000` respondendo `{ status: "clinic is open" }`

---

## Fase 2 — Modelagem de Dados
**Aula: Quem são os pacientes e quais são seus males?**

- [ ] Definir tipos TypeScript: `Agent`, `Symptom`, `Diagnosis`
- [ ] Criar schema SQLite com tabelas `agents`, `consultations`, `symptoms`
- [ ] Escrever script de migração inicial
- [ ] Popular banco com dados de exemplo (seed)

**Entregável:** banco de dados criado com dados fictícios de agentes doentes

---

## Fase 3 — API de Agentes (Pacientes)
**Aula: CRUD — registrando e consultando agentes**

- [ ] `POST /agents` — cadastrar novo agente
- [ ] `GET /agents` — listar todos os agentes
- [ ] `GET /agents/:id` — buscar agente por ID
- [ ] `DELETE /agents/:id` — dar alta a um agente

**Entregável:** API funcional para gerenciar pacientes da clínica

---

## Fase 4 — API de Consultas e Diagnósticos
**Aula: O agente chega com sintomas, sai com diagnóstico**

- [ ] `POST /consultations` — abrir consulta com lista de sintomas
- [ ] `GET /consultations/:id` — ver resultado de uma consulta
- [ ] Lógica de diagnóstico: mapear sintomas para diagnósticos conhecidos
- [ ] Catálogo de patologias: `hallucination`, `context_rot`, `infinite_loop`, `identity_drift`

**Entregável:** endpoint de consulta que recebe sintomas e retorna um diagnóstico

---

## Fase 5 — Interface Web Básica
**Aula: Tornando a clínica visível**

- [ ] Página inicial com lista de agentes cadastrados
- [ ] Formulário para registrar novo agente
- [ ] Formulário de consulta com seleção de sintomas
- [ ] Página de resultado do diagnóstico
- [ ] Estilização mínima com CSS

**Entregável:** UI funcional integrada à API — a clínica ganha rosto

---

## Fase 6 — Polimento e Documentação
**Aula: Preparando para o mundo real**

- [ ] Tratamento de erros consistente em todas as rotas
- [ ] Validação de entrada com mensagens claras
- [ ] README com instruções de setup e uso
- [ ] Exemplos de requisições (`curl` ou `.http`)
- [ ] Revisão do código com foco em clareza didática

**Entregável:** projeto completo, documentado e pronto para ser usado como referência de curso

---

## Visão do Futuro (fora do escopo atual)

Ideias para versões futuras, caso o projeto evolua além do curso:

- Sistema de "tratamentos" com planos de recuperação para cada patologia
- Histórico de consultas por agente
- Modo de simulação: agente entra em loop e a clínica detecta automaticamente
- Integração opcional com LLMs reais para diagnósticos mais ricos
