# Contrato de um cenário

Um cenário é **um arquivo `.js`** em `/cenarios`, exportando um objeto por default. Nenhuma
tela, tabela ou componente muda quando um cenário novo é adicionado — isso é a regra de ouro
da seção 11.2 do [GDD](../docs/GDD-v2-modulo-simulacoes.md).

Este arquivo descreve a forma que `lib/simulacao/motor.js` espera. Ainda não existe nenhum
cenário real no repositório — escrever "São Paulo, 1917" por extenso, com fontes reais
creditadas, é a Fase 1 do roadmap (seção 14 do GDD) e é trabalho de pesquisa histórica, não
de código.

## Forma esperada

```js
export default {
  slug: 'sao-paulo-1917',
  versao: 1,
  serie: '2a',
  titulo: 'São Paulo, 1917',
  pergunta: 'Quem foi que decidiu que o pão ia custar o dobro?',

  // opcional — 1 parágrafo de contexto histórico geral, mostrado na tela
  // "Entrar na partida" antes do aluno digitar o nome. Diferente de
  // `pergunta` (frase-gancho curta): aqui é a ambientação de verdade.
  introducao: 'A Primeira Guerra Mundial, do outro lado do Atlântico...',

  // opcional — vídeo de abertura na tela "Entrar na partida", antes do
  // formulário. `legenda` é OBRIGATÓRIA na prática quando o vídeo é
  // gerado por IA — aparece com aviso visual forte (não é uma legenda de
  // crédito discreta como a de `imagemSugerida.onde`), porque um vídeo
  // com gente "falando" é mais fácil de confundir com depoimento real do
  // que uma ilustração estática.
  videoAbertura: {
    arquivo: '/videos/sao-paulo-1917/abertura.mp4',
    legenda: 'Vídeo dramatizado, gerado por Inteligência Artificial — não é filmagem nem depoimento de época.',
  },

  indicadores: [
    // slug: chave usada em `deltas` e em `efeitosFixos`
    // inicial: valor 0-100 no começo da partida
    // faixas: 3 rótulos para as leituras baixa/média/alta da barra
    { slug: 'carestia', nome: 'Carestia', inicial: 70, faixas: ['suportável', 'pesada', 'fome'] },
  ],

  papeis: [
    // bloco: 'elite' | 'popular' | 'mediador' — só 'popular' recebe mult_coesão > 1.0
    // peso: peso_base usado no motor (seção 5.2 do GDD)
    // cota: proporção da turma que recebe este papel (usada por lib/simulacao/sorteio.js)
    {
      slug: 'operaria-textil',
      nome: 'Operária têxtil',
      bloco: 'popular',
      peso: 1,
      cota: 8,
      perguntaGuia: 'Por que meu salário é menor pela mesma máquina?',
      contexto: 'Você tem 19 anos, trabalha 13 horas...',

      // opcional — retrato do papel (ver scripts/gerar-icones-papeis.mjs).
      // Mostrado no "quadro" da tela de entrada e em destaque no sorteio.
      icone: '/imagens/sao-paulo-1917/papeis/operaria-textil.jpg',
    },
  ],

  rodadas: [
    {
      slug: 'preco-do-pao',
      titulo: 'O preço do pão',
      amplitude: 25, // teto (não multiplicador) do quanto esta rodada move cada indicador — ver motor.js
      cena: 'Junho de 1917...',

      // opcional — efeitos que acontecem independente do que a turma decidir
      // (marcos históricos fixos; ver seção 16.2 do GDD)
      efeitosFixos: { producao: -10 },

      // opcional — parágrafo "enquanto isso": o que acontecia mais amplamente
      // no mesmo momento histórico, fora da cena do papel do jogador. Só
      // entra se for genuinely sourced (citação real) — não é para inventar
      // um paralelo pra cada opção. Mostrado na tela de resultado.
      contexto: 'O Crespi não é a única fábrica sob essa tensão... (TOLEDO, 2017)',

      // opcional — imagem real para acompanhar o texto de `contexto` acima.
      // Mesmo formato de `imagemSugerida` abaixo. `porPapel` é opcional: se
      // o papel do jogador tiver uma entrada aqui, ela substitui a imagem
      // padrão (ex.: a força policial vê uma foto diferente da operária).
      imagemContexto: {
        arquivo: '/imagens/sao-paulo-1917/preco-do-pao-enquanto-isso.jpg', // caminho em /public
        onde: 'crédito/acervo da foto',
        porPapel: {
          'autoridade-estadual': { arquivo: '/imagens/sao-paulo-1917/preco-do-pao-policia.jpg', onde: '...' },
        },
      },

      investigacao: {
        olhar: 'Trezentos teares e três janelas...',
        fontes: [
          {
            slug: 'tabela-precos',
            tipo: 'ler', // 'olhar' | 'ler' | 'ouvir'
            titulo: 'O que custava o feijão em 1917',
            papeis: ['operaria-textil'], // quem tem acesso a esta fonte
            trecho: '...',
            acervo: 'crédito da fonte real',
            natureza: 'documental', // 'documental' | 'recriada' — nunca apresentar recriada como documento de época
            confiavel: true,
            destrancaOpcao: 'lista', // slug de opção que só aparece para quem leu esta fonte
          },
          {
            slug: 'boato-galpao',
            tipo: 'ouvir',
            titulo: '"Dizem que o Crespi vai fechar"',
            papeis: ['operaria-textil'],
            trecho: '...',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho: 'Boato. A fábrica não fechou — o medo é que...', // obrigatório quando confiavel: false
          },
        ],
      },

      // uma lista de opções POR papel — não são as mesmas para todos (seção 5.1 do GDD)
      opcoesPorPapel: {
        'operaria-textil': [
          {
            slug: 'lista',
            texto: 'Assinar a lista que corre no galpão',
            deltas: { coesao: 8, repressao: 2 }, // chave = slug de indicador, valor = delta em pontos
            consequencia: 'O que essa escolha causou, pessoalmente, pro papel que decidiu isso — mostrado na tela de resultado, antes do "enquanto isso".',

            // opcional — só em opções de risco real e historicamente
            // fundamentado (não é pra toda opção "ousada"; avaliar cenário
            // a cenário). Determinístico: acontece sempre que a opção é
            // escolhida, não por sorte — o motor não tem RNG em lugar
            // nenhum, e não deveria ganhar um aqui. Mostrado numa tela
            // própria entre a decisão e o resultado. As `deltas` das
            // reações são só narrativas — não voltam a passar pelo motor
            // (cada rodada já é uma decisão por papel; a reação ao evento
            // é uma segunda camada pessoal, não uma segunda rodada).
            evento: {
              imagem: '/imagens/sao-paulo-1917/eventos/nome.jpg', // opcional
              texto: 'O que aconteceu — fixo, historicamente plausível pro papel/cenário.',
              reacoes: [
                { slug: 'a', texto: 'Como reagir', resultado: 'O que esse jeito de reagir causa.' },
                { slug: 'b', texto: 'Outra forma de reagir', resultado: '...' },
              ],
            },
          },
        ],
      },

      // opcional — placeholder/imagem real pra cena principal da rodada.
      // `descricao` e `onde` sempre existem (pelo menos como pista de
      // pesquisa pro professor); `arquivo` só existe quando já há uma foto
      // real salva em /public — nesse caso a tela mostra a foto, não a caixa
      // tracejada de placeholder.
      imagemSugerida: {
        descricao: 'O que a imagem deveria mostrar, se existisse.',
        arquivo: '/imagens/sao-paulo-1917/preco-do-pao.jpg', // opcional — caminho em /public
        onde: 'onde buscar (acervo/livro) ou, se `arquivo` existe, o crédito da foto',
      },
    },
  ],

  // opcional — dados pra app/juri: atividade em GRUPO, presencial, fora do
  // fluxo de decisão individual. Uma pergunta sem resposta fechada e 2+
  // lados, cada um só com fontes já catalogadas acima (nunca reescreve
  // conteúdo). fontesSlugs aceita 'principal:<rodadaSlug>' (aponta pra
  // rodada.fonte) ou o slug de uma investigacao.fontes qualquer no
  // cenário. Nenhuma fonte referenciada pode ter confiavel: false — o
  // teste estrutural barra isso (um boato nunca deve virar "evidência").
  juri: {
    pergunta: 'Uma pergunta genuinamente em aberto sobre o cenário — não a mesma de `pergunta` acima.',
    lados: [
      { nome: 'Um lado', fontesSlugs: ['principal:preco-do-pao', 'algum-slug-de-investigacao'] },
      { nome: 'Outro lado', fontesSlugs: ['outro-slug'] },
    ],
  },

  desfecho: {
    fixo: 'A greve acontece e o acordo de 20% é firmado.', // nunca muda entre partidas — seção 5.4 do GDD
    variavel: ['cumprimento', 'repressao', 'quem-ficou-de-fora'],
    textoFecho: '...',
    perguntasDebate: ['...', '...', '...'], // roda de conversa em grupo, conduzida pelo professor

    // opcional — reflexão individual, respondida por escrito pelo próprio
    // aluno na tela de fecho (ainda não é salva — não há Supabase ligado
    // ao jogo, então isso é só o campo pronto pra quando existir). Sempre
    // 3 níveis, na mesma ordem — é o currículo em espiral (GDD seção 3):
    // não são 3 perguntas soltas, é o mesmo conceito revisitado em
    // camadas cada vez mais largas.
    perguntasReflexao: [
      { nivel: 'Sua experiência', pergunta: 'Ancorada na decisão que o aluno acabou de tomar, no papel que teve.' },
      { nivel: 'O conceito', pergunta: 'Usa o nome que só aparece no fecho para reinterpretar o que ele acabou de viver.' },
      { nivel: 'Além desta aula', pergunta: 'Puxa o padrão pra fora do episódio histórico — outro cenário já jogado, ou hoje.' },
    ],
  },
}
```

## Regras que o motor assume (não validadas em tempo de execução ainda)

- Toda fonte com `confiavel: false` deveria ter `revelacaoNoFecho`. O GDD (seção 16.2) descreve
  um teste automático para isso — ainda não escrito neste repositório.
- `cota` pode estar em qualquer unidade consistente entre papéis do mesmo cenário (contagem
  absoluta como na tabela do GDD, ou fração — `lib/simulacao/sorteio.js` normaliza pelo total).
- `amplitude` de uma rodada funciona como teto do efeito ponderado daquela rodada por
  indicador, não como multiplicador direto — ver o comentário no topo de
  [`lib/simulacao/motor.js`](../lib/simulacao/motor.js) para o porquê.
