# AgentClinic — SDD na Prática

## Sobre o projeto

Um servidor web construído do zero usando Spec-Driven Development (SDD),
como parte do curso Spec-Driven Development with Coding Agents da DeepLearning.AI.

## O que é SDD

Spec-Driven Development é a prática de escrever especificações em markdown
antes de qualquer linha de código — e usar essas specs como contexto para
um agente de IA implementar.

## Stack

- TypeScript
- Hono (framework web)
- Node.js v18+
- Claude Code (agente de IA)
- VS Code

## Como rodar localmente

```bash
git clone https://github.com/TatianaFlorentino/sc-spec-driven-development-files
cd my-agentclinic
npm install
npm run dev
```

Acesse: http://localhost:3000

## Estrutura do projeto

```
specs/
  mission.md
  tech-stack.md
  roadmap.md
  phase-01-hello-hono/
    plan.md
    requirements.md
    validation.md
src/
  index.ts
```

## Fluxo SDD seguido

1. Constituição — mission.md + tech-stack.md + roadmap.md
2. Especificação — plan.md + requirements.md + validation.md
3. Implementação — agente executa a spec
4. Validação — verificar cada critério de aceitação
5. Replanejamento — atualizar Constituição entre features

## Curso original

https://learn.deeplearning.ai/courses/spec-driven-development-with-coding-agents
