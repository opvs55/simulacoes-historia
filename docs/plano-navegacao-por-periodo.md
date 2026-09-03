# Plano — navegação por período

Registra a avaliação de todo o site recebida em 2026-09-03 (novo handoff, seção "3a"
de `Simulacoes - proposta de estrutura.dc.html`) e as decisões tomadas para
implementá-la. Complementa [plano-curriculo-1a-2a-serie.md](plano-curriculo-1a-2a-serie.md)
(que trata de conteúdo) — este é sobre estrutura/navegação.

## O diagnóstico (6 problemas, todos confirmados no código)

1. As linhas do tempo — a melhor parte do site — só são alcançáveis de dentro de `/materiais`.
2. Não existe casca compartilhada: cada página tem seu próprio "← Voltar" para lugares diferentes.
3. "Estado do módulo" (Supabase, schema...) é conversa nossa, mas está na página do aluno.
4. `.kicker`/`.btn`/`.plate`/`.selo`/`.item`/`.voltar` redefinidos em 11 `page.module.css`
   diferentes — já divergindo (`NOME_ERA` também está duplicado em 2 arquivos).
5. `TimelineShell` já grava progresso em `localStorage` (`linha-do-tempo.<slug>` → índice da
   tela) — nada lê isso fora da própria timeline.
6. Nomenclatura inconsistente (aba diz "Conteúdos", rota é `/materiais`, título "Materiais").

## A regra de design: "papel para escolher, cinema para viver"

- **Papel** (início, listas, biblioteca): fundo claro, hairlines, segue o tema do sistema.
- **Cinema** (linha do tempo, simulação): fundo escuro **fixo**, não segue `prefers-color-scheme`
  — hoje o dark mode do sistema faz o papel virar cinema e a distinção desaparece.

## Decisão tomada com o professor (2026-09-03)

Eixo de navegação vira **período histórico**, não tipo de atividade — confirmado
explicitamente após a pergunta que o próprio handoff levanta. `/simulacoes` e `/materiais`
continuam existindo como listas simples (úteis pra mim), deixam de ser a porta do aluno.

## Modelo de dados: era como fonte única

Cenários já têm `era` (`absolutismo` | `republica` | `era-vargas`) — só faltava propagar.
Nada de listar manualmente "quais cenários pertencem a cada era" em outro lugar (isso já
duplicaria dado) — tudo deriva de `.era` nas próprias fontes:

- `cenarios/eras.js` (novo): só metadados da era (nome, período, resumo, capa, série) — 4
  entradas, incluindo `colonizacao` (só a linha do tempo "Povos Originários", sem simulação
  ainda — mesmo status de `docs/plano-curriculo-1a-2a-serie.md` seção 3.3).
- Linhas do tempo (`app/linha-do-tempo/page.js`) ganham campo `era`, mesmos slugs dos cenários.
- Um material pertence à era do **primeiro** cenário em `cenariosRelacionados` (mesma regra
  já usada para agrupar em `/materiais`). Sem `cenariosRelacionados`, o material não aparece
  em `/estudar/[era]` — só na lista plana de `/materiais`. Não force uma era em material órfão.

## Fases (adaptado da ordem sugerida — "player" e "materiais" da ordem original já feitos)

1. **`ui/` compartilhado** — `.kicker`/`.btn`/`.plate`/`.selo`/`.item`/`.voltar` num módulo só.
   Páginas novas usam desde o início; páginas existentes migram depois, sem pressa (risco menor
   que reescrever 11 arquivos de uma vez).
2. **Barra de navegação fixa** (Início · Estudar · Turma) no `layout.js`.
3. **Home nova** — "onde você parou" (lê `localStorage`, some se nunca começou nada), "o tema
   de agora", tira "Estado do módulo". Seletor de série em `localStorage`, default `'1a'`.
4. **`cenarios/eras.js` + `/estudar` + `/estudar/[era]`** — a página que hoje não existe: linha
   do tempo + simulações + materiais do mesmo período, numa lista só.
5. **`/turma`** — código de turma em 6 caixas (visual só; sem Supabase ainda, mesmo estado que
   `EntrarComCodigo.js` hoje) + link para `/professor` com etiqueta "em obras".

Cada fase é testada e commitada antes da próxima. `/simulacoes`, `/materiais` e
`/linha-do-tempo` (hub) continuam no ar, inalterados, durante e depois — não são removidos.

## Estado em 2026-09-03

Fases 1 (parcial — `ui/` criado, as 11 páginas com cópias locais não foram migradas: risco
maior que ganho imediato), 2, 3, 4 e 5 concluídas e no ar. `cenarios/eras.js` tem 4 eras
(`colonizacao`, `absolutismo`, `republica`, `era-vargas`) — a primeira ainda sem simulação.
Home lê progresso real do `TimelineShell`, `/estudar/[era]` reúne linha do tempo + simulações
+ materiais sem duplicar (testado nas 4 eras), `/turma` tem o código em 6 casas com autoavanço
de foco, testado ponta a ponta.
