# Módulo Simulações — Currículo em Ação, Vol. 3

Simulação social de turma para aulas de História do Ensino Médio: o aluno entra com um código
que o professor escreve no quadro, **é sorteado** para uma posição social que ele não escolheu,
atravessa 5 rodadas de decisões dentro de uma crise histórica real — e descobre, no fim, que o
resultado não foi dele: foi da turma, e que o peso da sua voz dependia do lugar em que ele caiu.

Especificação de design completa em [`docs/GDD-v2-modulo-simulacoes.md`](docs/GDD-v2-modulo-simulacoes.md).

---

## Para que serve

O objetivo é um **hub de estudo que engaje alunos de Ensino Médio** — não um livro digitalizado.
A simulação é a primeira peça desse hub. A tese pedagógica por trás dela:

**Currículo invertido.** O aluno vive a situação primeiro e recebe o nome depois. Ele não começa
lendo "o que foi o liberalismo oligárquico"; ele passa cinco rodadas *dentro* dele — decidindo
como operária têxtil, como coronel, como autoridade — e só no fecho o texto nomeia o que ele
acabou de atravessar. O conceito vira a conclusão de uma experiência, não o enunciado de uma aula.

Três consequências disso, que são regras do jogo, não detalhes:

- **O papel não se escolhe.** Ninguém escolhe nascer camponês ou tecelã. O sorteio é o primeiro
  conteúdo da simulação.
- **Peso desigual é o conteúdo, não um defeito.** A decisão da autoridade estadual vale 8; a da
  operária vale 1. O número aparece na tela, de propósito.
- **A única alavanca dos muitos é a coesão.** Papéis populares ganham multiplicador quando
  decidem a mesma coisa (1.0 → 1.5 → 2.0). Divididos, valem a soma; unidos, mudam a rodada.
  Elites não precisam disso — são poucas e coordenam sozinhas.

E uma regra de honestidade histórica: **a história não se dobra ao aluno.** A greve de 1917
acontece e o acordo de 20% é firmado em toda partida. O que a turma muda é o custo, o caminho e
quem pagou a conta.

---

## Como este projeto tem sido construído

Cronologia real, para quem pegar este repositório sem contexto:

1. **O GDD veio antes do código.** O design (papéis, cotas, pesos, a regra da coesão, os cuidados
   éticos) foi escrito por extenso antes de existir uma linha de JavaScript. Ele está versionado
   em `docs/` e continua sendo a fonte de verdade sobre *intenção*.
2. **Motor puro primeiro, tela depois.** `lib/simulacao` não sabe que React existe. É JavaScript
   puro, testado isoladamente, e por isso sobrevive a qualquer decisão futura de interface
   (incluindo uma eventual migração para React Native).
3. **Conteúdo é dado, não código.** Um cenário é *um arquivo* em `/cenarios`. Adicionar "A Coroa
   e o Cofre" não deve exigir mexer em nenhuma tela, tabela ou componente.
4. **Fonte histórica de verdade, com crédito.** O conteúdo dos 3 cenários foi escrito a partir do
   livro do 2º ano (Aulas 1 a 8) e de dois artigos acadêmicos completos que o professor enviou:
   TOLEDO, E. *"Um ano extraordinário: greves, revoltas e circulação de ideias no Brasil em 1917"*
   (Estudos Históricos, v. 30, n. 61, 2017) e as fontes citadas por DANTAS (2014) sobre o Plano
   Cohen. **Toda fonte no jogo declara `natureza`**: `documental` (transcrição real, creditada) ou
   `recriada` (reconstituição escrita para a simulação, nunca apresentada como documento de
   época). Um teste automático genérico (`cenarios-estruturais.test.js`) cobra isso de **qualquer**
   cenário no repositório, não só de um — já pegou 3 bugs de conteúdo reais antes de chegar à tela.
5. **Cada decisão explica a si mesma.** Toda opção de decisão tem um campo `consequencia`: uma ou
   duas frases mostrando o efeito concreto da escolha — nunca o nome do conceito histórico, que só
   aparece no fecho. É o currículo invertido aplicado opção por opção, não só à simulação inteira.

---

## Status (2026-08-23)

| Camada | Estado |
|---|---|
| Motor puro (`lib/simulacao`) | Pronto e testado — sorteio por cota, regra da coesão, agregação ponderada, efeitos fixos, saldo geral. |
| Conteúdo — **3 cenários completos** | Ver tabela abaixo. Todos com fontes creditadas, texto de consequência em toda opção, e caixas `imagemSugerida` indicando o que buscar e onde. |
| Tela do aluno | **Jogável de ponta a ponta em modo solo, para qualquer um dos 3 cenários** — uma tela de escolha aparece antes do apelido. Mostra o texto de `consequencia` depois de cada decisão. |
| Testes | 46 passando (`npm test`) — genéricos, cobrem os 3 cenários automaticamente (estrutura, fontes, destranca-opção, partida completa). |
| Banco (`supabase/schema.sql`) | Aplicado no Supabase — 6 tabelas, RLS ligada sem políticas ainda. |
| Painel do professor | Stub de rota apenas, sem implementação. |

### Os 3 cenários

| Cenário | Série | Aulas do livro | Rodadas | Sourcing |
|---|---|---|---|---|
| `sao-paulo-1917.js` | 2ª | 2, 3, 4 | 5 | Documental em todas as `fonte` principais (livro + artigo da TOLEDO, 2017, enviado pelo professor) |
| `a-terra-do-favor.js` | 2ª | 1, 2 | 4 | Documental — LEAL (1949), SCHWARCZ & STARLING (2015), charge da Careta (1927) |
| `o-plano-que-nao-existia.js` | 2ª | 6, 7, 8 | 3 | Documental — discurso de posse e Constituição de 1937, DANTAS (2014) sobre o Plano Cohen. O centro do cenário é literalmente a mecânica de "fonte que mente" (seção 6.4 do GDD): o aluno decide com base num documento forjado e só descobre no fecho. |

Ainda faltam os cenários da **1ª série** ("A Coroa e o Cofre", seção 7 do GDD — Luís XIV,
absolutismo, mercantilismo) — nenhum foi escrito.

### O que ainda não existe

- **Multiplayer.** Hoje cada aluno joga sozinho e sua decisão move as barras pelo próprio peso.
  A turma inteira somando — que é o coração do projeto — depende de ligar a tela ao Supabase.
- **Mecanismo Investigar.** As fontes de investigação (olhar/ler/ouvir) estão escritas em todo
  cenário, mas ainda não aparecem na tela — hoje o aluno só vê a `fonte` principal da cena.
- **Glossário.** Termos como "contracheque", "carestia", "açambarcamento" precisam de apoio de
  leitura sem tirar o aluno da tela. Discutido, ainda não implementado — ver seção de decisões
  em aberto.
- **Imagens de verdade.** Cada rodada tem uma caixa `imagemSugerida` (descrição + onde buscar),
  mas nenhuma imagem real foi anexada ainda — é curadoria manual pendente.
- **Painel do professor**, exportação de CSV, e as políticas de RLS.
- **Fluxo de código de partida gerado pelo professor.** Hoje qualquer código na URL funciona
  (`/simulacao/QUALQUERCOISA`); o professor gerar o código e o aluno digitar é trabalho futuro,
  explicitamente adiado até o resto estar mais maduro.

---

## Lições operacionais (para não redescobrir do zero)

- **O MCP de Vercel deste ambiente está com permissão quebrada** para criar/ler projetos e
  deploys — confirmado em múltiplas tentativas, inclusive em projeto novo. `create_git_project`
  "cria" e imediatamente falha ao verificar; `deploy_to_vercel` retorna 403 "no permission to
  create a Production Deployment"; `list_projects`/`get_project` retornam vazio/404 mesmo para
  projeto que existe de verdade (confirmado navegando direto na URL pública). **O que funciona:**
  o professor criar o projeto pelo dashboard (vercel.com/new → Import Git Repository) com a
  própria sessão — depois disso, o deploy automático a cada push funciona normalmente.
- **Cache do servidor de dev pode corromper depois de muita edição de arquivo.** Um sintoma:
  clique, digitação e submit param de fazer qualquer efeito na tela, sem erro nenhum aparente —
  a causa real é `main-app.js`/`app-pages-internals.js` (chunks do próprio Next.js) retornando
  404, o que impede o React de hidratar a página. Ela fica com HTML mas sem nenhum evento
  funcionando. Fix: `rm -rf .next` e reiniciar o servidor de dev.
- **Testes genéricos > testes por cenário.** `cenarios-estruturais.test.js` valida qualquer
  cenário automaticamente (estrutura, fontes, destranca-opção) em vez de duplicar as mesmas
  checagens arquivo por arquivo — já pegou 3 bugs reais de conteúdo (papel faltando fonte de
  acesso, fonte documental sem crédito) antes de qualquer aluno ver a tela.

---

## Decisões em aberto (o professor ainda não bateu o martelo)

- **React Native vs. Next.js web.** O app hoje é 100% Next.js. A ideia de migrar para React
  Native (app + web) foi levantada mas não decidida — a recomendação dada foi manter web por
  enquanto (fricção zero, sem instalar nada) e só migrar se precisar de presença em loja de app,
  já que `/lib/simulacao` é JS puro e não se perde na troca.
- **Glossário inline.** Recomendado (termos de vocabulário puro, tipo "contracheque", viram
  tooltip; termos conceituais, tipo "coronelismo", continuam passando pelo mecanismo Investigar)
  mas ainda não confirmado nem construído.
- **IA como "game master" (ex.: Gemini) gerando eventos dinâmicos.** Ideia lançada, não
  desenhada. Recomendação: se for adiante, entra como camada opcional por cima do motor
  determinístico atual — nunca substituindo `aplicarRodada`, que precisa continuar testável e
  previsível.
- **Painel do professor por aluno + perguntas de acompanhamento.** Mencionado, ainda sem desenho
  — fica para a Fase 4 do roadmap (seção 14 do GDD).
- **Curadoria de vídeos/referências complementares.** Sugerido pelo professor, não iniciado.

---

## Rodando localmente

```bash
npm install
```

```bash
npm test
```

```bash
npm run dev
```

Depois abra `http://localhost:3000/simulacao/DEMO01` (qualquer código funciona no lugar de
`DEMO01` enquanto o multiplayer não existir).

### Variáveis de ambiente — as chaves que este projeto usa

Copie `.env.example` para `.env.local` e preencha os três valores:

```
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key>
SUPABASE_SERVICE_ROLE_KEY=<service role key>
```

**Onde pegar cada uma:** no [dashboard do Supabase](https://supabase.com/dashboard) → seu projeto
→ **Settings → API**. A `anon key` é pública (vai para o navegador); a `service role key` **ignora
RLS e nunca pode ir para o cliente** — ela só é usada em `lib/supabase/server.js`, que tem
`import 'server-only'` justamente para o build quebrar se alguém tentar importá-la no navegador.

`.env.local` está no `.gitignore` e **nunca deve ser commitado**.

> **Se você é o professor voltando a este projeto:** as chaves em uso estão no seu `.env.local`
> local e no dashboard do Supabase — não estão neste repositório, por serem segredo. Se precisar
> reconfigurar do zero, pegue as três no dashboard como acima. Para rodar SQL (criar/alterar
> tabelas) é preciso, além disso, um **personal access token** (`sbp_...`), gerado em
> [supabase.com/dashboard/account/tokens](https://supabase.com/dashboard/account/tokens).

Sem essas variáveis o app **continua rodando** — a simulação em modo solo não depende do banco.

### Deploy

Push na branch `master` → deploy automático na [Vercel](https://vercel.com). As mesmas três
variáveis de ambiente precisam estar configuradas no projeto da Vercel (Settings → Environment
Variables) para as telas que dependem do banco funcionarem em produção.

---

## Estrutura

```
/lib/simulacao       motor puro — sem React, sem Supabase, 100% testável
  motor.js             aplicarRodada(estado, decisoes, cenario) → estado
  coesao.js            multiplicador de coesão por bloco
  sorteio.js           distribuição de papéis por cota
  saldo.js             monta o objeto do Saldo Geral
  __tests__/           46 testes — motor, sorteio, coesão, e validação estrutural genérica dos cenários
/lib/supabase        clientes (browser com anon key, servidor com service role key)
/cenarios            CONTEÚDO — o professor edita aqui, sem tocar em código
  sao-paulo-1917.js            5 rodadas, 7 papéis — o único com tela ligada
  a-terra-do-favor.js          4 rodadas, 6 papéis — coronelismo e voto de cabresto
  o-plano-que-nao-existia.js   3 rodadas, 7 papéis — Plano Cohen e Estado Novo
  schema.md                    o contrato de um cenário
/supabase            schema.sql (aplicado)
/app                 rotas Next.js (App Router)
/docs                GDD completo
```

**Regra de ouro:** conteúdo, motor e interface são três camadas que não se misturam. O motor não
sabe que existe React. A tela não sabe calcular nada. O cenário é texto e números, e nada mais.

---

## O cenário jogável hoje: São Paulo, 1917

(Os outros dois cenários — coronelismo e Plano Cohen — têm a mesma profundidade de conteúdo,
detalhada acima na tabela; só não têm tela ligada ainda, então não repito o round-a-round aqui.)

**Pergunta-provocação:** *"Quem foi que decidiu que o pão ia custar o dobro?"*

**7 papéis** (elite · mediador · popular), com peso e cota — ver `cenarios/sao-paulo-1917.js`.

**5 rodadas**, seguindo a cronologia real da Greve Geral de 1917:

| # | Rodada | O que acontece |
|---|---|---|
| 1 | O preço do pão | 8 de junho, Cotonifício Crespi, Mooca: 400 operários param pedindo 15-20% e o fim do turno noturno |
| 2 | 9 de julho | A morte do sapateiro José Gimenez Martinez, anarquista espanhol de 21 anos |
| 3 | O cortejo | O funeral vira ato político: mais de 10 mil pessoas até o cemitério do Araçá |
| 4 | O Comitê de Defesa Proletária | A pauta é escrita — inclui salário igual para as mulheres? |
| 5 | O acordo | Aumento de 20%, direito de reunião, libertação dos presos — e o que foi cumprido de fato |

**Desfecho fixo:** a greve acontece e o acordo é firmado em toda partida. O que muda é o par de
barras final — *direitos no papel* × *direitos cumpridos* — e essa distância é a aula.

---

## Cuidados éticos (não negociáveis)

- Nenhum papel é humilhante: quem cai "embaixo" na hierarquia tem agência real.
- **Escravidão não vira papel sorteado.** Em cenários coloniais futuros, pessoas escravizadas
  entram por fonte documental e narrativa, nunca como personagem lúdico distribuído por sorteio.
- Povos originários não são obstáculo de cenário — exigem projeto próprio, com objetivos próprios.
- Sem placar individual, sem ranking, sem incentivo a "jogar de vilão para ganhar".
- **Sem dado pessoal de aluno**: código de turma + apelido, só. Sem e-mail, sem nome completo.

---

## Próximos passos

1. Ligar ao Supabase → multiplayer de verdade, com a turma somando (hoje é sempre solo — a
   escolha de cenário na tela é provisória e vai sumir quando o código de partida já vier
   associado a um cenário só, como no desenho real do GDD).
2. Mecanismo Investigar na tela (as fontes já estão escritas nos 3 cenários).
3. Bater o martelo nas decisões em aberto acima (glossário, React Native, game master de IA).
4. Curadoria de imagens reais para as caixas `imagemSugerida`.
5. Painel do professor: abrir partida, acompanhar, ler justificativas, fechar, exportar.
6. Cenários da 1ª série ("A Coroa e o Cofre") — ainda não escritos.
