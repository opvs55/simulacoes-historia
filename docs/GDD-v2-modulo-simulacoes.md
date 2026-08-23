# GDD v2 — Módulo Simulações
### Plataforma de História · Ensino Médio · Currículo em Ação, Vol. 3

**Status:** documento de design. Nada foi programado ainda.

**Relação com o GDD v1:** este documento **não substitui** o `GDD-aulas-de-historia.md`.
O v1 continua válido para o hub, as páginas de tema e os jogos narrativos de personagem
único. Este arquivo descreve um **módulo novo**: a simulação social de turma.

---

## 0. O que muda em relação ao v1

| Item | GDD v1 | GDD v2 (este módulo) |
|---|---|---|
| Público | 8º/9º ano (Fundamental) | **1ª e 2ª séries do EM** — os dois livros enviados |
| Unidade de jogo | 1 aluno, 1 personagem, 1 trilha | 1 turma inteira dentro do mesmo mundo |
| Papel do aluno | escolhido por ele | **sorteado**, com cotas por turma |
| Resultado | epílogo pessoal | **saldo coletivo da turma** |
| Banco de dados | não existia (deliberado) | **necessário agora** — Supabase |
| O que se conserva | currículo invertido, escavar em camadas, história não se dobra, sem ranking, sem imagem de IA para figuras históricas | tudo |

O único ponto do v1 que este módulo revoga é a seção 6.4 ("sem banco na v1"). O motivo
previsto lá — "banco só entra quando houver necessidade real de dado de uso" — é
exatamente o caso: sem persistência não existe turma, não existe agregado, não existe saldo.

---

## 1. A ideia em uma frase

O aluno entra com um código de turma, **é sorteado** para uma posição social que ele não
escolheu, atravessa 5 rodadas de decisões dentro de uma crise histórica real — e descobre,
no fim, que o resultado não foi dele: foi da turma, e que o peso da sua voz nele dependia
do lugar em que ele caiu.

---

## 2. Decisões travadas nesta versão

| Decisão | Escolha | Consequência de projeto |
|---|---|---|
| Ritmo | **Assíncrono** | Cada aluno joga sozinho, no celular, dentro de uma janela (ex.: uma semana). Sem sala ao vivo, sem cronômetro, sem todo mundo online junto. |
| Escopo | **Um cenário por série** | "A Coroa e o Cofre" (1ª série) e "São Paulo, 1917" (2ª série). |
| Saldo | **Indicadores coletivos, sem ranking** | Ninguém ganha. O placar é da turma e é comparado com o que a história registrou. |
| Entrega desta conversa | **Só o documento** | Nenhum código foi escrito. |

### 2.1 A tensão que isso cria — e como ela se resolve

Assíncrono e coletivo parecem incompatíveis: se ninguém está online junto, como há
dinâmica entre eles? A resposta é o eixo do módulo inteiro:

> **A turma joga junto sem estar junto.** Cada decisão individual é somada a um estado
> coletivo persistente. O aluno vê as barras da turma se moverem com as escolhas de quem
> jogou antes dele — inclusive as de quem tem mais peso que ele. A negociação não é por
> chat: é o efeito silencioso de estar no mesmo mundo.

Isso é, na verdade, **mais fiel ao conteúdo** do que uma sala ao vivo. O operário de 1917
não negociava com o industrial numa mesa. Ele acordava e descobria o preço do pão.

---

## 3. Princípios pedagógicos

Os três do v1 permanecem (currículo invertido · escavar, não receber · a história não se
dobra ao aluno). Este módulo acrescenta três.

### 3.4 O papel não se escolhe

O sorteio é o primeiro conteúdo da simulação. Ninguém escolhe nascer camponês ou
tecelã. Se o aluno pudesse escolher, o jogo viraria preferência estética e perderia
exatamente a coisa que se quer ensinar.

### 3.5 Peso desigual é o conteúdo, não um defeito

A escolha do Rei move as barras muito mais que a de um camponês. Isso é exibido
abertamente na tela ("sua decisão vale 1 · a decisão do Conselho vale 8"). Não é
injustiça de design: é a estrutura social sendo tornada visível e mensurável.

### 3.6 A única alavanca dos muitos é a coesão

Papéis populares ganham multiplicador quando decidem a mesma coisa. Divididos, valem
a soma; unidos, valem muito mais. As elites não precisam disso — são poucas e coordenam
sozinhas. Essa assimetria é a tese histórica da Aula 3 da 2ª série transformada em regra.

---

## 4. Anatomia de uma simulação

```
[Professor abre a partida]         → gera código de turma, define a janela (datas)
        ↓
[Aluno entra: código + apelido]    → sem e-mail, sem dado pessoal
        ↓
[Sorteio do papel]                 → carta virada, com cotas; sem repetir para o mesmo aluno
        ↓
[Rodada 1 … Rodada 5]              → cena curta
        ↓                             ├─ INVESTIGAR (livre): olhar · ler · ouvir  →  seção 6
        ↓                             └─ DECIDIR: 2 a 3 opções + justificativa curta
        ↓                             (a cada rodada o aluno vê o estado atual da turma)
[Fecho pelo professor]             → congela a partida
        ↓
[SALDO GERAL projetado em aula]    → barras + comparação com a história + jornal da turma
        ↓
[Roda de conversa]                 → roteiro pronto no painel do professor
```

Tempo estimado por aluno: **12 a 18 minutos** decidindo, mais o tempo que ele quiser
investigando. Distribuído ou de uma vez.

---

## 5. O motor

Um único motor serve todos os cenários. Cenário é **dado**, não código.

### 5.1 Objetos

| Objeto | O que é |
|---|---|
| **Cenário** | O tema. Declara indicadores, papéis, rodadas, desfecho histórico e roteiro de debate. |
| **Papel** | Posição social. Tem `peso_base`, `bloco` (elite/popular/mediador) e uma pergunta-guia própria. |
| **Rodada** | Uma cena com fonte histórica, mais 2–3 opções **por papel** (não são as mesmas para todos). |
| **Opção** | Um texto de escolha + um vetor de deltas nos indicadores. |
| **Indicador** | Barra 0–100, com valor inicial e rótulos de faixa ("Fome: contida / crescente / motim"). |
| **Partida** | Cenário + turma + janela de tempo. |
| **Decisão** | Aluno, rodada, opção, justificativa. **É a única fonte de verdade.** |

### 5.2 Como uma rodada é calculada

Para cada indicador `i`, na rodada `r`:

```
efeito(i) = Σ [ delta_opção(i) × peso_base(papel) × mult_coesão(bloco) ]
            ────────────────────────────────────────────────────────────  × amplitude(r)
                          Σ [ peso_base(papel) de todos que jogaram ]

valor(i) = clamp( valor_anterior(i) + efeito(i), 0, 100 )
```

- `amplitude(r)` limita quanto uma única rodada pode mexer (sugestão: 25 pontos). Impede
  que a rodada 1 decida tudo.
- A divisão pelo peso total de **quem efetivamente jogou** faz o resultado independer de
  quantos alunos entregaram. Turma de 22 e turma de 35 produzem barras comparáveis.

### 5.3 Regra da coesão

```
mult_coesão = 1.0   se a opção majoritária do bloco popular tem < 60% de adesão
            = 1.5   se tem 60% a 79%
            = 2.0   se tem 80% ou mais
```

Aplica-se **somente a blocos populares**. Elites têm `mult_coesão` fixo em 1.0 — já entram
com peso alto justamente porque não precisam se organizar para agir.

O aluno de bloco popular vê, antes de decidir, quantos do seu bloco já decidiram o quê.
Ele não conversa com ninguém, mas sabe onde os seus estão. É a imprensa operária da Aula 3
virando mecânica.

### 5.4 O que o motor nunca faz

- **Não muda o desfecho histórico.** A greve de 1917 acaba em acordo parcial em todas as
  partidas. O absolutismo se consolida em todas. O que muda é o **custo**, o **caminho** e
  **quem pagou a conta** — e é sobre isso que o saldo fala.
- **Não pontua o aluno.** Não existe placar individual, acerto, ranking ou XP.
- **Não trava.** Não há game over, nem rodada bloqueada por decisão anterior.
- **Não elimina.** Ninguém "morre" e sai do jogo.

---

## 6. Ações de investigação — o eixo RPG

Ideia trazida pelo professor depois da v2 inicial: além de decidir, o aluno pode **olhar
o ambiente** e **analisar o contexto**, recebendo fragmentos de fontes para interpretar.
Isto não é um acessório do módulo — é a coluna que faltava. É o princípio "escavar, não
receber" (v1, seção 3.2) transformado em verbo de jogo.

### 6.1 Três verbos

| Verbo | O que entrega | Natureza |
|---|---|---|
| **Olhar** o ambiente | Descrição do lugar: o galpão com três janelas para trezentos teares, a antecâmara onde se espera o rei, o cortejo virando a esquina. | Ambientação. Traz um detalhe que só quem olha percebe. |
| **Ler** as fontes | Fragmento documental real e creditado: jornal, charge, lei, tabela de preços, carta, ata. | O núcleo. É a fonte histórica do livro entrando no jogo. |
| **Ouvir** o que se diz | Boato de galpão, sermão, propaganda oficial, conversa de antecâmara. | **Pode ser falso.** É o vetor de desinformação. |

### 6.2 Cada papel enxerga um acervo diferente

Este é o ponto que faz a mecânica valer o trabalho: **ninguém enxerga tudo, e o que cada um
alcança depende de onde ele caiu.**

*São Paulo, 1917*

| Papel | Alcança | Não alcança |
|---|---|---|
| Coronel do café | grande imprensa, telegrama do câmbio, ofício do governo | o que se fala no galpão |
| Industrial | livro-caixa, contrato de fornecimento, a grande imprensa | a pauta do Comitê |
| Autoridade estadual | relatórios da Força Pública, correspondência oficial | a imprensa operária |
| Operária têxtil | o preço na venda, o que se fala no galpão, o panfleto | qualquer papel oficial |
| Operário imigrante | o panfleto, a carta da família, a Lei Adolfo Gordo (tarde demais) | o câmbio, o telegrama |
| Imprensa operária | tudo que circula na rua | tudo que circula no gabinete |

*A Coroa e o Cofre*

O Conselho lê relatórios de intendentes (possivelmente maquiados). O clero tem o púlpito e a
confissão — sabe da fome antes de todo mundo. O burguês tem o livro de contas e a cotação. O
camponês tem o preço do pão e o que o pároco disse no domingo.

Essa assimetria é conteúdo puro. A Aula 1 da 2ª série descreve uma cidadania de fachada em que
o voto era de homens alfabetizados: **quem não lê, não sabe; quem não sabe, não escolhe.** O
jogo não precisa explicar isso — basta distribuir os acervos.

### 6.3 Regras

- **Investigar é livre e ilimitado.** Ler nunca custa nada e nunca é punido.
- **Não mexe nos indicadores.** Consultar não é jogar; é o que se faz antes de jogar.
- **Destranca opções.** Algumas decisões só aparecem para quem consultou a fonte relevante.
  A opção "propor que a pauta inclua salário igual para as mulheres" aparece para quem leu as
  *Bases de Acordo da Confederação Operária Brasileira* (1906) — que está, na íntegra, na
  Aula 4 do livro da 2ª série. "Segurar a saca" só aparece ao coronel que leu o telegrama do
  câmbio.
- **Nenhuma fonte é obrigatória.** Quem não investiga joga a partida inteira, só com menos
  opções na mão. E é exatamente isso que o saldo mostra depois.
- **Máximo de 3 a 4 fontes por papel por rodada**, cada uma um fragmento de 3 a 6 linhas.
  Se a rodada virar dever de leitura, o aluno abandona no meio.

### 6.4 As fontes que mentem

Parte do acervo é falsa, forjada ou interessada — e não vem marcada como tal.

Durante a partida, nada acontece: sem penalidade, sem alerta, sem "você errou". **No fecho**,
a fonte é revelada e o aluno vê quais das suas decisões repousavam nela. O enquadramento é
inegociável: nunca *"você caiu no boato"*, sempre *"o país caiu — e por isso o boato foi
fabricado"*.

Material com lastro direto nos seus livros:

- **Plano Cohen** (Aula 7, 2ª série) — documento forjado que serviu de pretexto ao Estado Novo.
  É o exemplo perfeito: uma fonte falsa que produziu um golpe real.
- **DIP e o "pai dos pobres"** (Aulas 8 e 9) — propaganda de Estado como fonte disponível.
- **O bandeirante de 1932** (Aula 6) — memória construída com finalidade política, apresentada
  como tradição.
- **As cartas de Anchieta e dos cronistas** (Aulas 7, 8 e 12 da 1ª série) — o imaginário do
  colonizador. A Aula 8 já é, literalmente, uma aula sobre desmontar essa fonte.
- **O relatório do intendente** e o **panfleto do direito divino**, em *A Coroa e o Cofre*.

Aqui a simulação faz algo que a aula expositiva quase não alcança: o aluno não aprende *que*
o Plano Cohen era falso — ele decide com base nele e depois descobre.

### 6.5 Caderno de campo

Tudo que o aluno examinou é recolhido num caderno pessoal, com título, trecho e acervo
creditado. Ao fim da partida é o **resumo de estudo dele**, montado pelas próprias escolhas —
o "álbum de recortes" do v1, agora feito de fontes reais. Imprimível, e serve de revisão para
a avaliação.

### 6.6 O que isso entrega ao professor

Duas informações novas, e as duas valem mais que qualquer placar: **quantas fontes cada aluno
abriu** e **quais**. Não é nota, é diagnóstico — quem investiga e quem vai direto ao botão.
E uma linha coletiva no Saldo Geral, que provavelmente é a frase mais produtiva de toda a roda
de conversa: *"A turma abriu o boato do galpão 24 vezes e a tabela de preços 3 vezes."*

### 6.7 Custo de produção — a boa notícia

Diferente das opções de decisão, **as fontes não precisam ser escritas: elas já estão nos seus
dois livros.** Careta, Diário Nacional, as Bases de Acordo da COB, *Coronelismo, enxada e voto*,
as cartas de Anchieta, os mapas de al-Idrisi e de Domingos Teixeira, os textos historiográficos
do Caderno de Exercícios. O trabalho é selecionar, recortar e creditar.

Este é o eixo **mais barato** do módulo inteiro e provavelmente o de maior retorno pedagógico.

### 6.8 Contrato do componente

```
<Investigar
  olhar="texto do ambiente"
  fontes={[{ slug, tipo, titulo, trecho, acervo, destrancaOpcao?, confiavel }]}
  onConsultar={fn}   // registra a consulta; nunca bloqueia
/>
```

Reaproveita a convenção de camadas do `<Camadas>` do v1: superfície → o que se vê → o que
isso quer dizer. O aluno abre uma por vez.

---

## 7. Cenário A — 1ª série · **"A Coroa e o Cofre"**

**Base curricular:** Aula 2 (monarquias nacionais e absolutismo), Aula 4 (mercantilismo),
com ganchos na Aula 1 (Contrarreforma) e na Aula 6 (navegações).

**Ambientação:** França, 1661–1685 — do início do governo pessoal de Luís XIV à revogação
do Édito de Nantes. Os alunos são personagens **fictícios comuns**; o rei da partida é o
Conselho da Coroa, não o retrato de Luís XIV.

**Pergunta-provocação (currículo invertido):** *"Se o rei podia tudo, por que precisava
pedir dinheiro emprestado?"*

### 7.1 Papéis e cotas (referência: turma de 30)

| Papel | Bloco | Cota | Peso | Pergunta-guia |
|---|---|---|---|---|
| Conselho da Coroa (o "rei") | elite | 1 | 8 | Como mandar sem quebrar? |
| Nobreza de espada | elite | 3 | 4 | Como manter privilégio sem poder? |
| Alto clero | elite | 3 | 4 | A fé serve à Coroa ou a Coroa à fé? |
| Burguesia mercantil | mediador | 5 | 3 | Vale comprar um lugar na ordem que me despreza? |
| Mestres de ofício e artesãos | popular | 6 | 1 | O monopólio do rei me protege ou me estrangula? |
| Camponeses | popular | 12 | 1 | Onde termina o imposto e começa a fome? |

Soma dos pesos: elites 8+12+12 = 32 · mediadores 15 · populares 18. **Um aluno vale 8; doze
valem 12.** O número aparece na tela.

### 7.2 Indicadores

| Indicador | Início | Faixas |
|---|---|---|
| Tesouro Real | 40 | vazio · apertado · folgado |
| Legitimidade (direito divino) | 70 | contestada · aceita · inquestionável |
| Ordem interna | 60 | motim · tensa · obedecida |
| Comércio e manufaturas | 35 | estagnado · crescendo · próspero |
| Fome no campo | 45 | contida · crescente · revolta |
| **Dívida com a burguesia** | 20 | — |

**A Dívida é o indicador especial: nenhuma opção a diminui.** Só cresce, mais rápido ou mais
devagar. Isso não é bug — é a tese da aula. O rei concentra o poder e, ao concentrá-lo, fica
dependente de quem tem dinheiro. A burguesia financia o absolutismo que a despreza, e é por
isso que ela um dia o derruba. O aluno descobre isso lendo uma barra que nunca desce.

### 7.3 As cinco rodadas

**R1 · "Um rei, uma lei, um peso, uma medida" (1661)**
Unificar moeda, impostos, exército e leis. A cena mostra três varas de medir diferentes de
três feudos vizinhos.
Coroa: *cargo vendido a quem paga* (Tesouro ↑↑, Legitimidade ↓, Dívida ↑) · *imposto sobre a
terra* (Tesouro ↑, Fome ↑↑) · *empréstimo com banqueiros* (Tesouro ↑↑, Dívida ↑↑).
Nobreza: aceitar a corte e o pensionato (Ordem ↑, Legitimidade ↑) ou resistir na província
(Ordem ↓↓).
Camponês: pagar · esconder a colheita (Fome ↓ para si, Tesouro ↓) · fugir para a cidade
(Comércio ↑, Fome ↑ na aldeia).

**R2 · "O ouro que não se deixa sair" (1664–1667)**
Mercantilismo: monopólios, tarifas, manufaturas reais, Companhia das Índias.
Coroa: carta de monopólio à companhia (Comércio ↑↑, artesãos ↓) · tarifa protecionista
(Comércio ↑, risco de guerra) · manufatura real subsidiada (Tesouro ↓, Comércio ↑).
Burguesia: financiar a companhia (Dívida ↑, poder próprio ↑) · comprar título de nobreza
(Tesouro ↑, Legitimidade ↑, o burguês sai do seu bloco) · contrabandear (Comércio ↑, Ordem ↓).
Artesãos: entrar na corporação regulada · produzir fora do monopólio · migrar de ofício.

**R3 · "Uma fé, um reino" (1670s)**
Gancho com a Contrarreforma (Aula 1). Uniformidade religiosa como instrumento político.
Clero: pregar obediência (Legitimidade ↑↑, Ordem ↑) · denunciar o luxo da corte
(Legitimidade ↓, Fome — pressão de socorro aos pobres) · calar-se.
Coroa: tolerância pragmática (Comércio ↑ — os mercadores protestantes ficam) · perseguição
(Legitimidade ↑, Comércio ↓↓ — eles vão embora com o capital).

**R4 · "Guerra, glória e conta" (1672–1678)**
Financiar a expansão. Toda opção aqui custa Tesouro; a diferença é de onde ele sai.
A rodada existe para forçar a escolha entre **espremer o campo** e **dever à burguesia**.

**R5 · "A conta chega" (1685)**
Revogação do Édito de Nantes e o balanço do reinado. Camponeses e artesãos decidem entre
súplica, motim ou êxodo — e a **Regra da Coesão** aparece aqui em toda a força: divididos,
não movem nada; a 80%, viram o único fato político da rodada.

### 7.4 Desfecho fixo

A monarquia sai desta simulação **mais centralizada em todas as partidas** — e mais endividada
em todas. O texto de fecho nomeia o que o aluno acabou de viver: *absolutismo*, *mercantilismo*,
*sociedade estamental*. O nome vem por último. É o currículo invertido do v1 aplicado a um jogo.

---

## 8. Cenário B — 2ª série · **"São Paulo, 1917"**

**Base curricular:** Aula 3 (movimento operário e a Greve Geral de 1917), Aula 2 (república
oligárquica e o poder do café), Aula 4 (mulheres operárias), com gancho na Aula 5 (o que
essa pressão social produz depois, em 1930).

**Ambientação:** São Paulo, junho e julho de 1917. Fatos reais: a carestia da Primeira Guerra,
a paralisação no Cotonifício Crespi, a morte do sapateiro José Martinez em 9 de julho, o
funeral com dezenas de milhares de pessoas, o Comitê de Defesa Proletária, a mediação da
imprensa e o acordo de aumento de 20%.

**Pergunta-provocação:** *"Quem foi que decidiu que o pão ia custar o dobro?"*

### 8.1 Papéis e cotas (turma de 30)

| Papel | Bloco | Cota | Peso | Pergunta-guia |
|---|---|---|---|---|
| Fazendeiro de café / coronel | elite | 3 | 6 | O que garante meu lucro: o preço ou o voto? |
| Industrial têxtil | elite | 3 | 6 | Até onde a máquina aguenta parar? |
| Autoridade estadual / Força Pública | elite | 2 | 8 | Ordem para quem? |
| Grande imprensa | mediador | 2 | 4 | Notícia ou mediação? |
| Imprensa operária | mediador | 2 | 2 | Denunciar ou organizar? |
| Operária têxtil | popular | 8 | 1 | Por que meu salário é menor pela mesma máquina? |
| Operário imigrante | popular | 10 | 1 | Greve me dá direito ou passagem de volta? |

Elites: 18+18+16 = **52** de peso, em 8 alunos. Populares: **18**, em 18 alunos.
Com coesão a 80%, os populares saltam para 36 — ainda menos que as elites, mas o suficiente
para mudar rodada. A conta é exposta ao aluno. É a aula inteira em um número.

### 8.2 Indicadores

| Indicador | Início | Faixas |
|---|---|---|
| Carestia (preço do pão e do aluguel) | 70 | suportável · pesada · fome |
| Produção nas fábricas | 80 | parada · reduzida · plena |
| Coesão operária | 25 | dispersa · articulada · greve geral |
| Repressão | 40 | contida · ostensiva · violenta |
| Opinião pública | 45 | contra os grevistas · dividida · a favor |
| **Direitos no papel × direitos cumpridos** | 0 / 0 | par de barras, revelado só no fecho |

### 8.3 As cinco rodadas

**R1 · "O preço do pão" (junho)** — 13 horas de turno no Crespi, aluguel em alta.
Operárias: reclamar à contramestra · organizar lista de assinaturas · aceitar hora extra.
Industrial: reduzir turno · demitir os agitadores · aumentar 5% e proibir reunião.
Coronel: segurar o preço da saca · pressionar o governo por câmbio favorável.

**R2 · "9 de julho"** — a morte de José Martinez em confronto com a Força Pública.
A rodada em que a Repressão e a Coesão se determinam mutuamente. Autoridade: recuar ·
manter a tropa · proibir o velório. Imprensa: manchete de "baderna" · de "assassinato" ·
silêncio.

**R3 · "O cortejo"** — o funeral vira ato político. Nenhum papel pode ignorar a rua.
Aqui a Regra da Coesão pesa mais: `amplitude` maior nesta rodada.

**R4 · "O Comitê de Defesa Proletária"** — a pauta é escrita. Que reivindicações entram?
Aumento? Fim do trabalho de menores? Jornada? **Salário igual para as mulheres?**
Esta última opção é o ponto pedagógico da Aula 4: se a turma não a incluir, o fecho aponta
— sem julgar — que ela também não entrou na pauta histórica de 1917.

**R5 · "O acordo"** — aumento de 20% e promessa de readmissão. E o que veio depois:
demissões seletivas, Lei Adolfo Gordo, deportação de lideranças imigrantes.

### 8.4 Desfecho fixo

**A greve acontece e o acordo de 20% é firmado em toda partida.** O que a turma altera é:
quanto do acordo foi cumprido, quanto de repressão custou, e quem ficou de fora dele. O fecho
mostra as duas barras finais lado a lado — *conquistado no papel* × *cumprido* — e essa
distância é a aula.

---

## 9. O Saldo Geral

Tela única, feita para ser projetada. Cinco blocos, nesta ordem:

1. **As barras da turma**, animadas do início ao fim, rodada a rodada.
2. **A linha da história**, sobreposta em tracejado: onde o registro histórico ficou.
   A pergunta na tela não é "vocês acertaram?", é **"por que vocês foram parar aqui?"**
3. **O jornal da turma** — as justificativas escritas pelos alunos, diagramadas como página
   de jornal de época (a estética já definida na seção 5 do v1), anônimas por apelido.
4. **As três decisões mais divididas** — onde a turma rachou. É daqui que sai o debate.
5. **O que a turma leu** — as fontes mais e menos consultadas, e quais fontes falsas
   circularam mais que os documentos. Ver seção 6.6.

E, embaixo, uma linha por aluno visível **só para ele**: qual papel teve, o que decidiu, e
quanto a sua voz pesou no total. Nunca em comparação com colegas.

### 9.1 Roteiro de debate (gerado junto com o saldo)

Três perguntas fixas por cenário, mais duas geradas a partir do que a turma fez.
Exemplo de gerada: *"Vinte e dois de vocês eram operários e a barra de Coesão nunca passou
de 30. O que aconteceu?"*

---

## 10. Painel do professor

- Abrir partida: cenário, turma, janela de datas, número esperado de alunos (calcula as cotas).
- Acompanhar: quem entregou, sem exibir nota nem ranking.
- Ver, por aluno, **quantas fontes ele abriu e quais** (seção 6.6) — diagnóstico de
  investigação, nunca nota.
- Ler justificativas por aluno e por rodada — **é aqui que a simulação vira avaliação**.
  Campo livre para o professor registrar a habilidade do Currículo Paulista que está avaliando.
- Fechar a partida e projetar o saldo.
- Reabrir/reprocessar: como as decisões são a fonte de verdade, o estado é sempre recalculável.
- Exportar CSV com decisões e justificativas.

---

## 11. Arquitetura técnica

### 11.1 Stack

Next.js 14 (App Router) + React 18 · CSS Modules com os tokens de época do v1 ·
**Supabase** (Postgres + Auth anônima + Realtime opcional) · deploy Vercel.

### 11.2 Estrutura de pastas

```
/lib/simulacao            ← MOTOR PURO. Sem React, sem Supabase, 100% testável.
  motor.js                   aplicarRodada(estado, decisoes, cenario) → estado
  coesao.js                  cálculo do multiplicador por bloco
  sorteio.js                 distribuição de papéis por cota
  saldo.js                   monta o objeto do Saldo Geral
  __tests__/                 testes de unidade do motor
/cenarios                 ← CONTEÚDO. O professor edita aqui, sem tocar em código.
  coroa-e-cofre.js
  sao-paulo-1917.js
  schema.md                  o contrato de um cenário
/app/simulacao/[codigo]   ← telas do aluno (entrar, sorteio, rodada, espera, saldo)
/app/professor            ← painel
/components/simulacao     ← Barra, CartaDePapel, CenaRodada, PainelSaldo, JornalDaTurma…
/lib/supabase             ← client, queries, tipos. Nenhum componente fala com o banco direto.
```

**Regra de ouro (herdada da seção 6.3 do v1):** conteúdo, motor e interface são três camadas
que não se misturam. O motor não sabe que existe React. A tela não sabe calcular nada. O
cenário é texto e números, e nada mais.

### 11.3 Modelo de dados (Supabase)

```
turmas          id, professor_id, nome, codigo (6 letras), criada_em
partidas        id, turma_id, cenario_slug, cenario_versao, abre_em, fecha_em, status
participacoes   id, partida_id, apelido, papel_slug, entrou_em    -- UNIQUE(partida_id, apelido)
decisoes        id, participacao_id, rodada, opcao_slug, justificativa, criada_em
                                                        -- UNIQUE(participacao_id, rodada)
consultas       id, participacao_id, rodada, fonte_slug, aberta_em
estado_cache    partida_id, rodada, indicadores jsonb, calculado_em  -- derivado, descartável
```

**A tabela `decisoes` é a única fonte de verdade.** `estado_cache` é conveniência: pode ser
apagada e reconstruída a qualquer momento rodando o motor sobre as decisões. Isso elimina a
classe inteira de bugs de "estado corrompido" e permite ajustar o balanceamento de um cenário
**depois** da partida, reprocessando.

**Sem dado pessoal de aluno.** Sem e-mail, sem nome completo, sem idade. Código de turma +
apelido. RLS: o aluno lê o agregado da própria partida e só as próprias decisões; o professor
lê tudo das próprias turmas. (Decisão já tomada no v1, seção 12 — mantida.)

### 11.4 Por que assíncrono simplifica muito

Sem sala ao vivo, não há sincronização de relógio, nem reconexão, nem "o aluno saiu no meio da
rodada". Realtime vira opcional (um `subscribe` para animar as barras enquanto o aluno lê é
enfeite, não requisito). A carga do servidor é um punhado de inserts por aluno.

---

## 12. Formato de um cenário

```js
export default {
  slug: 'sao-paulo-1917',
  versao: 3,
  serie: '2a',
  titulo: 'São Paulo, 1917',
  pergunta: 'Quem foi que decidiu que o pão ia custar o dobro?',
  era: 'republica',
  aulasRelacionadas: [2, 3, 4],
  indicadores: [
    { slug: 'carestia', nome: 'Carestia', inicial: 70,
      faixas: ['suportável', 'pesada', 'fome'] },
    // …
  ],
  papeis: [
    { slug: 'operaria-textil', nome: 'Operária têxtil', bloco: 'popular',
      peso: 1, cota: 0.27, perguntaGuia: 'Por que meu salário é menor pela mesma máquina?',
      contexto: 'Você tem 19 anos, trabalha 13 horas…' },
    // …
  ],
  rodadas: [
    {
      slug: 'preco-do-pao', titulo: 'O preço do pão', amplitude: 25,
      cena: 'Junho de 1917. …',
      fonte: { texto: '…', autor: '…', acervo: '…' },   // fonte real, creditada
      investigacao: {
        olhar: 'Trezentos teares e três janelas. O ar tem fiapo de algodão…',
        fontes: [
          { slug: 'tabela-precos', tipo: 'ler', titulo: 'O que custava o feijão em 1917',
            papeis: ['operaria-textil', 'operario-imigrante'],
            trecho: '…', acervo: '…', confiavel: true, destrancaOpcao: 'lista' },
          { slug: 'boato-galpao', tipo: 'ouvir', titulo: '"Dizem que o Crespi vai fechar"',
            papeis: ['operaria-textil'], trecho: '…', confiavel: false,
            revelacaoNoFecho: 'Boato. A fábrica não fechou — o medo de fechar é que…' },
        ],
      },
      opcoesPorPapel: {
        'operaria-textil': [
          { slug: 'lista', texto: 'Assinar a lista que corre no galpão',
            deltas: { coesao: +8, repressao: +2 } },
          // …
        ],
      },
    },
  ],
  desfecho: {
    fixo: 'A greve acontece e o acordo de 20% é firmado.',
    variavel: ['cumprimento', 'repressao', 'quem-ficou-de-fora'],
    textoFecho: '…',
    perguntasDebate: ['…', '…', '…'],
  },
}
```

Um cenário novo é **um arquivo**. Nenhuma tela, nenhuma tabela, nenhum componente muda.

---

## 13. Cuidados éticos

Escrito antes de programar, de propósito.

- **Nenhum papel pode ser humilhante.** Camponês, operária e servo têm agência real:
  esconder colheita, organizar lista, migrar, se recusar. Quem é sorteado para baixo na
  hierarquia não passa cinco rodadas apenas apanhando.
- **Escravidão não vira papel sorteado.** Para cenários coloniais futuros (Aulas 11 e 12 da
  1ª série), pessoas escravizadas entram por **fonte documental e narrativa**, nunca como
  personagem lúdico distribuído por sorteio. Simular a posição de quem foi escravizado como
  "papel de jogo" banaliza — e alguns dos seus alunos são descendentes de quem esteve nela.
- **Povos originários não são obstáculo de cenário.** Se a Aula 9/11 virar simulação, os
  papéis indígenas precisam de projeto próprio, com objetivos próprios, e não de casa
  "resistência" contra um protagonista europeu.
- **Sem pontuar o cinismo.** Como não há placar individual, não existe estratégia ótima nem
  incentivo a "jogar de vilão para ganhar".
- **Troca de papel entre partidas.** O sistema evita repetir o mesmo bloco para o mesmo
  apelido — ao longo do bimestre, o aluno cai em lados diferentes. Esse é o gancho de
  replay comparativo do v1 aplicado à turma.
- **Aluno que não entrega não prejudica a turma.** O cálculo normaliza por quem jogou.

---

## 14. Roadmap

**Fase 1 — texto (sem código).** Escrever as 5 rodadas de "São Paulo, 1917" por extenso:
cenas, fontes reais creditadas, opções por papel e deltas. Revisar historicamente. Testar
em papel com uma turma — literalmente, com fichas de papel sorteadas. Se não funciona em
papel, não funciona na tela.

**Fase 2 — motor.** `/lib/simulacao` com testes, rodando sobre decisões simuladas. Nenhuma
tela ainda. Aqui se ajusta o balanceamento: os pesos e amplitudes acima são estimativa e
vão mudar.

**Fase 3 — o mínimo jogável.** Entrar, sortear, 5 rodadas, saldo. Um cenário só. Uma turma.

**Fase 4 — painel do professor** e exportação.

**Fase 5 — "A Coroa e o Cofre"** aproveitando tudo. Se esta fase exigir mexer no motor, o
motor estava errado.

**Fase 6 — integração ao hub do v1:** a simulação vira um card do hub, com um eixo de
navegação novo — **o eixo do papel**: a mesma cena relida pelos olhos de outra posição
social. Acrescentar essa linha à tabela da seção 4 do GDD v1.

---

## 15. Em aberto (precisa da sua decisão)

1. **Justificativa escrita: obrigatória ou opcional?** Obrigatória vira avaliação de verdade
   e alimenta o jornal da turma; opcional reduz o atrito e a taxa de abandono.
2. **Quantos alunos por turma, de fato?** As cotas acima assumem 30. Com 40 muda pouco; com
   15 é preciso fundir papéis.
3. **Celular de todo mundo funciona?** Isso define se a interface precisa rodar bem em
   Android antigo e conexão ruim — o que, se for o caso, elimina animação pesada e imagem
   grande, e não é uma decisão que dê para adiar.
4. **A simulação vale nota?** Se valer, a justificativa passa a ser obrigatória e o painel
   precisa de um campo de registro por aluno.
5. **A fonte falsa é revelada no fecho ou na hora?** No fecho tem muito mais força, mas exige
   confiança: o aluno precisa entender que não foi pegadinha. Talvez dependa da turma.
6. **1917 ou 1932?** Escolhi 1917 pela clareza do conflito, mas a Revolta de 1932 (Aula 6)
   tem uma camada de disputa de memória — bandeirante, herói, feriado — que talvez renda
   mais debate com os seus alunos. Você conhece a turma.

---

## 16. Estado da implementação — protótipo de agosto/2026

Existe um protótipo funcional em Next.js 14 + Supabase, com o cenário **São Paulo, 1917**
completo: 5 rodadas, 7 papéis, 109 opções de decisão e 16 fontes de investigação.

### 16.1 O que foi construído

| Camada | Estado |
|---|---|
| Motor puro (`lib/simulacao`) | Pronto, 16 testes passando. Sorteio por cota, Regra da Coesão, agregação ponderada, saldo, turma simulada com semente. |
| Cenário (`cenarios/sao-paulo-1917.js`) | Pronto. Um arquivo, editável pelo professor, sem tocar em código. |
| Banco (`supabase/schema.sql`) | Pronto. 5 tabelas, RLS ligada sem políticas, sem dado pessoal de aluno. |
| Telas do aluno | Prontas: entrar, sorteio, rodada com investigar/decidir, saldo. |
| Painel do professor | Pronto: abrir partida, acompanhar, povoar turma simulada, fechar, exportar CSV. |
| Cenário "A Coroa e o Cofre" | **Não implementado.** Só desenhado, seção 7. |

### 16.2 Três decisões que apareceram só na construção

**Marcos históricos viraram mecânica (`efeitosFixos`).** Uma rodada pode declarar efeitos que
acontecem decida a turma o que decidir: a cidade para em julho, o acordo devolve as máquinas ao
trabalho. Sem isso, uma turma inteira de elites impediria a greve geral de existir — e a
história se dobraria ao aluno, contra o princípio 3.3.

**Toda fonte declara `natureza`.** `documental` (transcrição real, com acervo creditado) ou
`recriada` (reconstituição escrita para a simulação, exibida com selo na tela). Nenhuma
reconstituição é apresentada como documento de época. Um teste automático recusa fonte sem
crédito e fonte não confiável sem texto de revelação no fecho.

**Modo demonstração.** Sem as chaves do Supabase, a aplicação usa um repositório em memória e
funciona inteira. Serve para jogar antes de configurar qualquer coisa — e para o teste em papel
da Fase 1 virar teste na tela sem burocracia.

### 16.3 O que o protótipo ainda não resolve

- Os pesos, amplitudes e deltas são **estimativa**. `npm run partida-seca` existe para
  rebalanceá-los, mas o número certo só sai do teste com turma real.
- Não há como apagar a turma simulada pela interface.
- Sem geração de QR code: o código de 6 letras vai escrito no quadro.
- A justificativa continua opcional (pergunta 1 da seção 15, ainda em aberto).

---

*Documento vivo. Atualizar depois do primeiro teste em papel — não antes.*

---

## Nota desta cópia no repositório (2026-08-23)

Este arquivo é a cópia do GDD colada pelo usuário ao criar o repositório. A seção 16 descreve
um protótipo que **não foi localizado** em nenhum diretório acessível nesta máquina — o
repositório foi criado do zero (ver [README.md](../README.md) para o que existe de fato hoje).
Trate a seção 16 como a especificação-alvo da Fase 3 em diante, não como código já existente.
