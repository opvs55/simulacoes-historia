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
4. **Fonte histórica de verdade, com crédito.** O conteúdo de "São Paulo, 1917" foi escrito a
   partir do livro do 2º ano (Aulas 2, 3 e 4) e do artigo acadêmico de TOLEDO, E. *"Um ano
   extraordinário: greves, revoltas e circulação de ideias no Brasil em 1917"* (Estudos
   Históricos, v. 30, n. 61, 2017). **Toda fonte no jogo declara `natureza`**: `documental`
   (transcrição real, creditada) ou `recriada` (reconstituição escrita para a simulação). Nenhuma
   reconstituição é apresentada como documento de época — há teste automático cobrando isso.

---

## Status (2026-08-23)

| Camada | Estado |
|---|---|
| Motor puro (`lib/simulacao`) | Pronto e testado — sorteio por cota, regra da coesão, agregação ponderada, efeitos fixos, saldo geral. |
| Conteúdo `sao-paulo-1917.js` | **5 rodadas completas**, com fontes creditadas e 2 boatos falsos plantados (mecânica das "fontes que mentem"). |
| Tela do aluno | **Jogável de ponta a ponta em modo solo**: entrar → sorteio → 5 rodadas → fecho com perguntas de debate. |
| Testes | 22 passando (`npm test`), incluindo uma partida completa das 5 rodadas. |
| Banco (`supabase/schema.sql`) | Aplicado no Supabase — 6 tabelas, RLS ligada sem políticas ainda. |
| Painel do professor | Stub de rota apenas, sem implementação. |
| Cenário "A Coroa e o Cofre" (1ª série) | Só desenhado no GDD, não implementado. |

### O que ainda não existe

- **Multiplayer.** Hoje cada aluno joga sozinho e sua decisão move as barras pelo próprio peso.
  A turma inteira somando — que é o coração do projeto — depende de ligar a tela ao Supabase.
- **Mecanismo Investigar.** As fontes de investigação (olhar/ler/ouvir) estão escritas no cenário
  mas ainda não aparecem na tela.
- **Texto de consequência por decisão.** Hoje o aluno vê a barra mexer, mas não lê *o que
  aconteceu* por causa da escolha dele. É a próxima melhoria de conteúdo.
- **Glossário.** Termos como "contracheque", "carestia", "açambarcamento" precisam de apoio de
  leitura sem tirar o aluno da tela.
- **Imagens e riqueza visual.** O material hoje é 100% texto.
- **Painel do professor**, exportação de CSV, e as políticas de RLS.

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
  __tests__/           22 testes
/lib/supabase        clientes (browser com anon key, servidor com service role key)
/cenarios            CONTEÚDO — o professor edita aqui, sem tocar em código
  sao-paulo-1917.js    5 rodadas, 7 papéis, fontes creditadas
  schema.md            o contrato de um cenário
/supabase            schema.sql (aplicado)
/app                 rotas Next.js (App Router)
/docs                GDD completo
```

**Regra de ouro:** conteúdo, motor e interface são três camadas que não se misturam. O motor não
sabe que existe React. A tela não sabe calcular nada. O cenário é texto e números, e nada mais.

---

## O cenário implementado: São Paulo, 1917

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

1. Texto de consequência após cada decisão (o aluno precisa ler *o que aconteceu*, não só ver a
   barra mexer).
2. Ligar ao Supabase → multiplayer de verdade, com a turma somando.
3. Mecanismo Investigar na tela (as fontes já estão escritas).
4. Glossário de termos.
5. Painel do professor: abrir partida, acompanhar, ler justificativas, fechar, exportar.
