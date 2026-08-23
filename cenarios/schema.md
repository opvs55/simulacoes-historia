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

  desfecho: {
    fixo: 'A greve acontece e o acordo de 20% é firmado.', // nunca muda entre partidas — seção 5.4 do GDD
    variavel: ['cumprimento', 'repressao', 'quem-ficou-de-fora'],
    textoFecho: '...',
    perguntasDebate: ['...', '...', '...'],
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
