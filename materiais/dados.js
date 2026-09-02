// Materiais alternativos — indicados pelo professor, não gerados pelo jogo.
// Pensado pra complementar (não substituir) o livro didático: vídeos,
// documentários, textos que ajudam a entender o pano de fundo de um ou
// mais cenários antes ou depois de jogar.
//
// tipo: 'video' | 'texto' | 'documentario' | 'linha-do-tempo' — usado só pra
// escolher o ícone e, no caso de linha-do-tempo, pra linkar dentro do
// próprio site em vez de abrir um vídeo externo.
// cenariosRelacionados: slugs de cenarios/*.js que esse material ajuda a entender
export default [
  {
    slug: 'republica-velha-1889-1930',
    titulo: 'A República que o povo assistiu',
    tipo: 'linha-do-tempo',
    url: '/linha-do-tempo/republica-velha',
    descricao:
      'Os quarenta anos da Primeira República em dezessete telas, em modo história — role como ' +
      'num feed, com glossário e checagens rápidas no caminho. Cobre o pano de fundo dos 3 ' +
      'cenários: o coronelismo de "A terra do favor", a greve de "São Paulo, 1917" e a ascensão ' +
      'de Vargas de "O plano que não existia".',
    cenariosRelacionados: ['sao-paulo-1917', 'a-terra-do-favor', 'o-plano-que-nao-existia'],
  },
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
