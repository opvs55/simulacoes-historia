# Módulo Simulações — Currículo em Ação, Vol. 3

Simulação social de turma para aulas de História do Ensino Médio: o aluno é sorteado para
uma posição social, decide dentro de uma crise histórica real ao longo de 5 rodadas
assíncronas, e no fim descobre que o resultado foi da turma inteira — não dele.

Especificação completa em [`docs/GDD-v2-modulo-simulacoes.md`](docs/GDD-v2-modulo-simulacoes.md).

## Status

Infraestrutura criada em 2026-08-23. Conteúdo de cenário: só a Rodada 1 de "São Paulo, 1917"
está escrita, com fontes reais do livro do 2º ano — o resto é Fase 1 em andamento (seção 14
do GDD), não concluída.

| Camada | Estado |
|---|---|
| Motor puro (`lib/simulacao`) | Implementado e testado: sorteio por cota, regra da coesão, agregação ponderada, saldo geral. |
| Cliente Supabase (`lib/supabase`) | Implementado e conectado a um projeto Supabase real. |
| Schema do banco (`supabase/schema.sql`) | Aplicado — 6 tabelas, RLS ligada sem políticas. |
| Conteúdo de cenário (`/cenarios`) | `sao-paulo-1917.js`: Rodada 1 ("O preço do pão") completa e testada contra o motor, com fontes reais creditadas do livro (Aula 2 e 3). Rodadas 2-5 pendentes — ver o `TODO` no fim do arquivo para o que falta e por quê. |
| Telas do aluno / painel do professor | Stubs de rota apenas, sem implementação (`app/simulacao/[codigo]`, `app/professor`). |

## Stack

Next.js 14 (App Router) + React 18 · CSS Modules · [Supabase](https://supabase.com) (Postgres)
· deploy [Vercel](https://vercel.com).

## Estrutura

```
/lib/simulacao       motor puro — sem React, sem Supabase, 100% testável
/lib/supabase        clientes (browser com anon key, servidor com service role key)
/cenarios            conteúdo dos cenários (dado, não código) — ver schema.md
/supabase            schema.sql
/app                 rotas Next.js (App Router)
/docs                GDD completo
```

## Rodando localmente

```bash
npm install
npm test        # testes do motor (node --test)
npm run dev      # http://localhost:3000
```

Para conectar a um projeto Supabase, copie `.env.example` para `.env.local` e preencha:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Sem essas variáveis o app roda, mas qualquer tela que dependa do banco fica bloqueada —
o "modo demonstração" com repositório em memória (seção 16.1 do GDD) ainda não foi
implementado.

## Próximos passos

Ver a seção 14 (Roadmap) do GDD. Nesta ordem: escrever o conteúdo de "São Paulo, 1917" por
extenso e testar em papel com uma turma real (Fase 1) — só depois ajustar o balanceamento do
motor com dados reais (Fase 2) e construir as telas do mínimo jogável (Fase 3).
