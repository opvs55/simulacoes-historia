# Plano de currículo — 1ª e 2ª série

Avaliação do conteúdo dos livros didáticos (Currículo Paulista / CMSP, Volume 3, 2ª edição,
1ª e 2ª série do Ensino Médio) e cronograma de implementação no site. Escrito em 2026-09-03,
a partir dos dois PDFs que o professor enviou.

**Como usar este documento:** é o plano de trabalho, não uma decisão fechada. Cada fase abaixo
tem um critério claro de "pronto" — quando uma fase terminar, risque, atualize o Status no
README e volte aqui só quando for planejar a próxima leva de conteúdo.

---

## 0. Resumo

Os dois livros são material multidisciplinar (História + Geografia + Língua Inglesa) — só a
parte de História interessa aqui, e em cada volume ela ocupa as Aulas 1 a 12.

- **2ª série:** 3 das 12 aulas já viraram simulação (`sao-paulo-1917`, `a-terra-do-favor`,
  `o-plano-que-nao-existia`). Sobra uma aula com potencial forte pra virar um 4º cenário
  (Revolta Constitucionalista de 1932) e um bloco de 4 aulas do período democrático
  (1945–1964) ainda sem nenhuma cobertura.
- **1ª série:** 0 das 12 aulas têm cenário implementado, mas **4 delas já têm um cenário
  inteiro desenhado** — "A Coroa e o Cofre", seção 7 do GDD, com papéis, cotas, indicadores e
  5 rodadas prontos. É a peça de maior retorno por menor esforço deste plano: falta só
  transformar o desenho em código, igual já foi feito 3 vezes.
- O resto da 1ª série (Aulas 5, 7–12) é sobre povos originários e colonização da América —
  conteúdo rico, mas que **não deve virar simulação no mesmo molde dos outros cenários** sem
  antes pensar no formato com mais cuidado (ver seção 3.3).
- A navegação do site precisa aprender a separar por série **antes** de a 1ª série entrar,
  senão o problema que o professor já sentiu com Júri/Fonte-ou-boato ("ficou tudo meio
  solto") se repete em escala maior. A solução recomendada (seção 2) é barata: os hubs que já
  existem (`/simulacoes`, `/materiais`, `/linha-do-tempo`) ganham agrupamento por série em vez
  de listas únicas — não é preciso duplicar rotas.

---

## 1. Avaliação de conteúdo

### 1.1 — 2ª série (`historia2_compressed.pdf`)

| # | Aula | Cobertura hoje |
|---|---|---|
| 1 | "Bestializados ou bilontras": uma res publica para quem? (Proclamação da República) | Gancho em `a-terra-do-favor` e na Linha do tempo |
| 2 | A República Oligárquica: "a terra do favor" | **Cenário `a-terra-do-favor`** |
| 3 | Movimento operário: greves e lutas por direitos na Primeira República | **Cenário `sao-paulo-1917`** |
| 4 | Mulheres operárias: permanências e mudanças no mundo do trabalho | Tocado de raspão em `sao-paulo-1917` (papel "Operária têxtil"), sem aula própria |
| 5 | O fim da "república que não era velha": o Movimento de 1930 | **Linha do tempo** (`/linha-do-tempo/republica-velha`), não simulação |
| 6 | Restauração da legalidade com espírito conservador: os paulistas e a Revolta de 1932 | **Sem cobertura** — ver 3.2 |
| 7 | Da (re)constitucionalização do país ao Estado Novo | **Cenário `o-plano-que-nao-existia`** |
| 8 | O que tinha de "novo" no Estado Novo? | **Cenário `o-plano-que-nao-existia`** |
| 9 | As leis trabalhistas no Brasil: Governo Vargas e a CLT | Citada no fecho do cenário 3 e na Linha do tempo, sem aula própria |
| 10 | Governo Dutra e a Guerra Fria | **Sem cobertura** |
| 11 | De volta ao Catete: "bota o retrato do velho outra vez" (2º governo Vargas, 1951–54) | **Sem cobertura** — tema sensível, ver 3.4 |
| 12 | "O vendedor de esperanças": os cinco anos de Juscelino Kubitschek | **Sem cobertura** |

**Leitura:** as Aulas 1–3 e 7–8 (o arco que já virou jogo) formam um bloco coeso — Primeira
República → crise → Estado Novo. As Aulas 4–6 e 9–12 são dois blocos deixados de fora: um
"epílogo" da Primeira República (mulheres operárias, 1930, a Revolta de 32) e o período
democrático inteiro de 1945–1964 (Dutra, 2º Vargas, JK), que hoje não tem nenhuma presença no
site — nem simulação, nem linha do tempo, nem material.

### 1.2 — 1ª série (`historia1_compressed.pdf`)

| # | Aula | Cobertura hoje |
|---|---|---|
| 1 | Entre a fé e o controle: os mecanismos da Contrarreforma | Gancho em "A Coroa e o Cofre" (R3) |
| 2 | Poder divino e controle absoluto: a ascensão das monarquias europeias | **Base de "A Coroa e o Cofre"** |
| 3 | Modernidade em movimento: entre permanências e rupturas | Aula de síntese/conceito — sem gancho de simulação natural |
| 4 | Da metrópole à colônia: a lógica mercantilista na expansão europeia | **Base de "A Coroa e o Cofre"** (R2) |
| 5 | Práticas e saberes ancestrais: a diversidade dos povos originários | **Sem cobertura** — ver 3.3 |
| 6 | Ventos da mudança: navegações e conquistas nos séculos XV e XVI | Gancho em "A Coroa e o Cofre" |
| 7 | Dois mundos em conflito: o encontro entre portugueses e povos originários | **Sem cobertura** — ver 3.3 |
| 8 | Aula desafio: permanências de um imaginário — o Brasil indígena pelos olhos do colonizador | **Sem cobertura** — já citada no GDD como fonte candidata a "Fonte ou boato", nunca implementada |
| 9 | Os donos da terra: território, poder e identidade nas civilizações inca, asteca e maia | **Sem cobertura** |
| 10 | Materialidade e saberes incas: arquitetura, engenharia e cultura têxtil nos Andes | **Sem cobertura** — mais descritiva, pouco decisória |
| 11 | Conquista e resistência: os impactos da colonização espanhola na América | **Sem cobertura** — ver 3.3 |
| 12 | Colonização portuguesa na América: poder, resistência e transformações sociais | **Sem cobertura** — ver 3.3 |

**Leitura:** o livro divide claramente em dois blocos. Aulas 1, 2, 4, 6 são exatamente o
material que "A Coroa e o Cofre" já cobre — o GDD foi escrito olhando para este livro (ou um
muito parecido) e acertou o alvo. Aulas 5, 7–12 são um segundo bloco, sobre povos originários e
colonização da América, que **não tem nada desenhado ainda** e que precisa de um tratamento
diferente do resto do site (seção 3.3).

---

## 2. Navegação: separar por série sem duplicar estrutura

O pedido é claro: quando a 1ª série entrar, `/simulacoes`, `/materiais` e `/linha-do-tempo` não
podem virar uma lista única crescendo para sempre — precisa dar pra ver "isso é 1ª série, isso é
2ª série" de cara.

**Recomendação: não duplicar rotas por série** (nada de `/1a-serie/simulacoes` e
`/2a-serie/simulacoes` como árvores separadas). Os três hubs já filtram e ordenam a partir de
metadado do próprio cenário — cada `cenarios/*.js` já tem `serie: '1a' | '2a'`, esse campo já
existe e já é exibido (`app/simulacoes/[slug]/page.js` já mostra "1ª série" / "2ª série"). Falta
só usar esse campo para **agrupar**, não apenas rotular:

- `/simulacoes`: em vez de uma lista única, duas seções — "1ª série" e "2ª série" — cada uma com
  seus cards. Cresce por baixo de cada seção, não por baixo da página inteira.
- `/materiais`: mesma ideia — `materiais/dados.js` ganha um campo `serie` por item (hoje não
  tem, porque todo o conteúdo existente é 2ª série), e a página agrupa.
- `/linha-do-tempo`: idem — quando existir uma segunda linha do tempo (1ª série), a lista se
  agrupa por série.
- Home (`/`): a seção "Simulações jogáveis" passa a mostrar as duas séries com uma âncora clara
  (ex.: um pequeno seletor "1ª série · 2ª série" no topo da seção, ou duas fileiras rotuladas) —
  hoje ela cita as 3 simulações da 2ª série sem dizer a série; isso muda no mesmo commit em que
  a primeira simulação da 1ª série for publicada, não antes (não vale a pena reestruturar a home
  para uma série que ainda não existe no site).

Isso é pouco código (um `.filter(c => c.serie === ...)` e um título de seção a mais em cada
hub) e não quebra nenhuma URL existente. É a Fase 1 do cronograma abaixo, de propósito — depois
dela, toda simulação/material novo já nasce no lugar certo.

---

## 3. Simulações propostas

### 3.1 — 1ª série: "A Coroa e o Cofre" (prioridade máxima)

Já está inteiramente desenhada — seção 7 do GDD: 6 papéis com cota e peso, 6 indicadores (o
Tesouro Real e a Dívida com a burguesia, que só sobe, nunca desce — essa é a tese da aula), 5
rodadas com opções por papel e efeitos. Cobre as Aulas 1, 2, 4 e 6 da 1ª série de uma vez.

**Isto não precisa de mais desenho — precisa de implementação.** O trabalho é o mesmo já feito
3 vezes para a 2ª série: `cenarios/coroa-e-cofre.js` seguindo `cenarios/schema.md`, fontes
credenciadas (documental vs. recriada, igual às outras três), imagens (mesmo pipeline do
`scripts/gerar-imagens.mjs`, cenas genéricas — nenhum retrato de Luís XIV nomeado, o rei da
partida já é "o Conselho da Coroa", não uma pessoa real), e os testes estruturais genéricos
(`cenarios-estruturais.test.js`) já validam qualquer cenário novo automaticamente.

### 3.2 — 2ª série: "9 de julho" — Revolta Constitucionalista de 1932 (novo, precisa desenho)

Candidato mais forte pra 4º cenário. Ainda não desenhado — precisaria de uma sessão dedicada
tipo a que gerou o GDD original, mas o material do livro já dá o esqueleto:

- **Pergunta-provocação possível:** *"Foi uma luta pela Constituição, ou a elite paulista
  querendo de volta o poder que perdeu em 1930?"* — o próprio livro já entrega essa tensão:
  "essa construção ajudou a dar aparência de movimento cívico a uma mobilização que também
  atendia a interesses políticos e econômicos."
- **Papéis possíveis:** fazendeiro/industrial financiador, estudante voluntário (o MMDC nasceu
  de mobilização estudantil real), enfermeira voluntária (mulheres tiveram papel documentado —
  aproveitaria também a Aula 4, "mulheres operárias", que hoje não tem cenário próprio),
  interventor federal, soldado do lado federal, jornalista construindo a memória do "9 de
  julho" enquanto o combate ainda acontece.
- **Fonte de gancho já identificada no GDD:** "o bandeirante de 1932 — memória construída com
  finalidade política, apresentada como tradição" (seção sobre fontes documental/recriada) — ou
  seja, o cuidado ético de não confundir mito com documento já está mapeado, só falta usar.
  O próprio desfecho é rico para o "currículo invertido": derrota militar em três meses, mas
  vitória de memória (feriado estadual até hoje) — o tipo de final que rende debate de verdade.
- **Por que priorizar este e não os outros do bloco 9–12:** é o único, dos quatro temas sem
  cobertura da 2ª série, com um dilema decisório natural (elite vs. governo central, várias
  posições legítimas) e sem o peso emocional de um desfecho trágico real — ver 3.4.

### 3.2b — 1ª série: dois cenários sobre organização interna pré-contato (novo, 2026-09-03)

Decisão do professor: mais simulações do 1º ano antes de voltar pra "9 de julho". A Aula 9
("Os donos da terra") tem material rico o bastante para **duas** simulações — inca e asteca,
cada uma com ângulo próprio — desde que fiquem estritamente **antes de qualquer contato
europeu**, sem tocar em conquista/colonização (essa parte continua sendo só timeline, ver 3.3).

- **"O Tawantinsuyu" (Império Inca)** — ângulo território/poder/integração. Pergunta: *"Como
  manter unido um império de dezenas de povos e línguas diferentes, sem moeda e sem escrita
  alfabética?"* Indicador de efeito fixo: `centralizacao-de-cusco` só sobe (análogo à Dívida em
  "A Coroa e o Cofre") — toda integração tem custo sobre a autonomia dos ayllus locais. 6 papéis
  (Sapa Inca/conselheiro, curaca local, sacerdote, artesão, camponês de ayllu, chasqui). 5
  rodadas seguindo os governantes reais do livro (Pachacuti 1438–63 até Huayna Cápac
  1493–1525), parando antes da crise sucessória que abriria a porta para 1532.
- **"Tenochtitlán" (Império Asteca)** — ângulo economia/tributo, mais próximo do fiscal de "A
  Coroa e o Cofre" que do territorial do cenário inca (evita repetir a mesma mecânica duas
  vezes). Usa o material do livro sobre Tlatoani, tributo de povos dominados, chinampas e os
  pochteca (comércio de longa distância).

Mesmo cuidado ético já aplicado à Linha do tempo de povos originários: sem rostos em
close-up (risco de estereotipagem), sem cenas de combate, fontes reais ou explicitamente
marcadas como `recriada`.

### 3.3 — 1ª série: colonização da América (Aulas 5, 7–12) — não precipitar

Este é o bloco mais rico do que sobra nos dois livros, e o mais delicado. O GDD já tem duas
regras escritas para exatamente este caso, de antes mesmo de qualquer cenário colonial existir:

> "Escravidão não vira papel sorteado. Para cenários coloniais futuros, pessoas escravizadas
> entram por fonte documental e narrativa, nunca como personagem lúdico distribuído por
> sorteio." / "Povos originários não são obstáculo de cenário. [...] exigem projeto próprio,
> com objetivos próprios."

A Aula 8 é literalmente uma aula sobre desmontar o imaginário do colonizador sobre o indígena —
isso é ótimo material para o "Fonte ou boato" (que já existe e já sabe lidar com boato
histórico), mas transformar as Aulas 7, 11 e 12 (o encontro, a conquista espanhola, a
colonização portuguesa) num cenário de papéis sorteados e decisões pesadas, no mesmo molde
mecânico dos outros quatro, corre o risco de gamificar violência colonial e genocídio — o
oposto do cuidado que o resto do projeto já demonstra.

**Recomendação:** não incluir isto nas próximas fases do cronograma. Quando chegar a vez,
merece uma conversa própria sobre formato — possivelmente algo mais parecido com a Linha do
tempo (leitura, fontes reais, sem "jogar" a posição de quem foi colonizado ou escravizado) do
que com uma simulação de decisões. A Aula 5 (diversidade dos povos originários, antes do
contato) e a Aula 9–10 (civilizações inca/asteca/maia) são as menos arriscadas do bloco — dá
pra pensar nelas separadas do resto, focadas em conhecer em vez de decidir.

### 3.4 — 2ª série: período democrático 1945–1964 (Aulas 9–12) — baixa prioridade, uma ressalva

Dutra/Guerra Fria (Aula 10) e JK (Aula 12) são bons candidatos a simulação no mesmo molde dos
outros — JK em especial ("50 anos em 5": industrialização rápida, Brasília, mas inflação e
êxodo rural) tem um dilema decisório natural. A CLT (Aula 9) já é citada no fecho de
`sao-paulo-1917` e na Linha do tempo; não parece precisar de cenário próprio.

**A Aula 11 (2º governo Vargas) é uma ressalva à parte:** o arco termina no suicídio de um
chefe de Estado em exercício. Não é o mesmo tipo de "final pesado" que o projeto já sabe tratar
(a repressão de 1917, a fraude eleitoral de 1927, o Plano Cohen são pesados mas não são a morte
de uma pessoa real, recente o suficiente para ter fotografia). Se isto virar conteúdo, a
recomendação é o mesmo caminho da seção 3.3: leitura/linha do tempo antes de decisão jogável, e
uma conversa própria sobre até onde o "currículo invertido" (decidir primeiro, nomear depois)
funciona quando o fato final é uma morte real e documentada.

---

## 4. Cronograma

Sem datas fixas — depende da disponibilidade real do professor, não do ritmo desta conversa.
Ordenado por prioridade e dependência (cada fase pressupõe a anterior pronta).

| Fase | O quê | Por quê nessa ordem | Critério de pronto |
|---|---|---|---|
| **1** ✅ | Navegação por série nos 3 hubs (`/simulacoes`, `/materiais`, `/linha-do-tempo`) + home | Tudo que vem depois já nasce organizado; evita retrabalho | Cada hub mostra 1ª e 2ª série agrupadas, mesmo com só 2ª série povoada ainda |
| **2** ✅ | Implementar "A Coroa e o Cofre" (`cenarios/coroa-e-cofre.js`) | Já está 100% desenhada — maior retorno, menor esforço deste plano inteiro | Jogável de ponta a ponta, testes estruturais passando, é a 1ª entrada da 1ª série em `/simulacoes` |
| **3** | Desenhar "9 de julho" (papéis, cotas, indicadores, rodadas — sessão dedicada, como a que gerou o GDD original) | Precisa existir como design antes de virar código | Documento de design aprovado pelo professor, no mesmo nível de detalhe da seção 7/8 do GDD |
| **4** | Implementar "9 de julho" | — | Jogável de ponta a ponta, testes passando, 4º card em `/simulacoes` |
| **5** ✅ | Materiais + Linha do tempo da 1ª série (Idade Moderna/Absolutismo, mesmo padrão já usado para 1889–1930) | Reaproveita o que já existe (`TimelineShell` já é genérico), dá contexto de leitura antes de jogar "A Coroa e o Cofre" | Nova entrada em `/linha-do-tempo` cobrindo o arco de 1661–1685 (ou mais largo, Reforma/Contrarreforma até absolutismo) |
| **6** (sem prazo) | Colonização da América (1ª série) e período democrático 1945–64 (2ª série) | Exigem decisão de formato antes de qualquer código — ver 3.3 e 3.4 | Uma conversa própria, não uma tarefa de implementação direta |

**Estado em 2026-09-03**: fases 1, 2 e 5 concluídas e no ar — "A Coroa e o Cofre" é
jogável de ponta a ponta (66/66 testes estruturais passando), com o player redesenhado
em 6 fases (sorteio → cena → investigar → decidir → evento → consequência → fecho com
reflexões em etapas). O plano também ganhou conteúdo fora desta lista original: 3 novas
linhas do tempo (Absolutismo/Mercantilismo e Povos Originários na 1ª série; "Da Revolta
ao Desenvolvimento" na 2ª) e reorganização de `/materiais` por série → tipo → tema.
Fases 3–4 ("9 de julho") e 6 seguem em aberto.

---

## 5. Apêndice — sumário completo dos dois livros

Só a parte de História; Geografia e Língua Inglesa (presentes nos mesmos volumes) ficam fora
do escopo deste projeto.

**1ª série — 12 aulas:** (1) Entre a fé e o controle: os mecanismos da Contrarreforma · (2)
Poder divino e controle absoluto: a ascensão das monarquias europeias · (3) Modernidade em
movimento: entre permanências e rupturas · (4) Da metrópole à colônia: a lógica mercantilista
na expansão europeia · (5) Práticas e saberes ancestrais: a diversidade dos povos originários ·
(6) Ventos da mudança: navegações e conquistas nos séculos XV e XVI · (7) Dois mundos em
conflito: o encontro entre portugueses e povos originários · (8) Aula desafio: permanências de
um imaginário — o Brasil indígena pelos olhos do colonizador · (9) Os donos da terra: território,
poder e identidade nas civilizações inca, asteca e maia · (10) Materialidade e saberes incas:
arquitetura, engenharia e cultura têxtil nos Andes · (11) Conquista e resistência: os impactos
da colonização espanhola na América · (12) Colonização portuguesa na América: poder,
resistência e transformações sociais.

**2ª série — 12 aulas:** (1) "Bestializados ou bilontras": uma res publica para quem? · (2) A
República Oligárquica: "a terra do favor" · (3) Movimento operário: as greves e as lutas por
direitos na Primeira República · (4) Mulheres operárias: permanências e mudanças no mundo do
trabalho · (5) O fim da "república que não era velha": o Movimento de 1930 · (6) Restauração da
legalidade com espírito conservador: os paulistas e a Revolta de 1932 · (7) Da
(re)constitucionalização do país ao Estado Novo · (8) O que tinha de "novo" no Estado Novo? ·
(9) As leis trabalhistas no Brasil: Governo Vargas e a CLT · (10) Governo Dutra e a Guerra Fria
· (11) De volta ao Catete: "bota o retrato do velho outra vez" · (12) "O vendedor de
esperanças": os cinco anos de Juscelino Kubitschek.
