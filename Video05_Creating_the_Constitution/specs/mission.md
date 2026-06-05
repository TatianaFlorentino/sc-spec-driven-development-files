# AgentClinic — Mission

## Visão

AgentClinic é uma clínica fictícia onde agentes de IA podem obter ajuda com seus problemas mais comuns: alucinações, context rot, loop infinito, perda de identidade e outros males que afligem a vida de um agente moderno.

O projeto usa essa metáfora médica para ensinar, de forma didática e progressiva, como estruturar uma API REST com Node.js e TypeScript — desde o modelo de dados até a interface web.

## Público-Alvo

Estudantes de IA e desenvolvedores que estão aprendendo sobre:

- Agentes de IA e seus comportamentos (alucinação, drift de contexto, etc.)
- Construção de APIs REST com TypeScript
- Modelagem de dados com SQLite
- Organização de projetos guiados por especificação (spec-driven development)

O material é estruturado como curso/aula: cada fase do desenvolvimento corresponde a um vídeo ou lição.

## Escopo

**Dentro do escopo:**

- API REST para registrar agentes (pacientes), sintomas e diagnósticos
- Persistência com SQLite
- Interface web básica para interagir com a clínica
- Dados simulados — sem chamadas reais a LLMs
- Código claro e didático, priorizando legibilidade sobre otimização

**Fora do escopo:**

- Integração com APIs de LLMs reais (OpenAI, Anthropic, etc.)
- Autenticação e controle de acesso
- Deploy em produção
- Múltiplos bancos de dados ou ORMs complexos

## Restrições

| Restrição | Decisão |
|-----------|---------|
| Clareza acima de performance | O código deve ser legível por iniciantes |
| Sem dependências desnecessárias | Manter o projeto leve e fácil de rodar localmente |
| Passos incrementais | Cada aula introduz exatamente uma ideia nova |
| SQLite como banco único | Sem necessidade de instalar servidores externos |
| TypeScript strict | Tipos explícitos como ferramenta de documentação viva |
