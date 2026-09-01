// Materiais alternativos — indicados pelo professor, não gerados pelo jogo.
// Pensado pra complementar (não substituir) o livro didático: vídeos,
// documentários, textos que ajudam a entender o pano de fundo de um ou
// mais cenários antes ou depois de jogar.
//
// tipo: 'video' | 'texto' | 'documentario' — usado só pra escolher o ícone
// cenariosRelacionados: slugs de cenarios/*.js que esse material ajuda a entender
export default [
  {
    slug: 'era-vargas-tempo-de-revolucao',
    titulo: 'Era Vargas — Tempo de Revolução',
    tipo: 'video',
    url: 'https://www.youtube.com/watch?v=b86dJnjDoDw',
    descricao:
      'Indicado pelo professor. Cobre o fim da Primeira República e a Revolução de 1930 — ' +
      'o pano de fundo direto de "A terra do favor" (o sistema eleitoral que a Revolução ' +
      'derruba) e o ponto de partida de "O plano que não existia" (a ascensão de Vargas que ' +
      'termina no Estado Novo, sete anos depois).',
    cenariosRelacionados: ['a-terra-do-favor', 'o-plano-que-nao-existia'],
  },
]
