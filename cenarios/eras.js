// Índice de eras — a unidade de navegação de /estudar (ver
// docs/plano-navegacao-por-periodo.md). Só metadados aqui: nome, período,
// resumo, capa, série. NÃO lista manualmente quais cenários/linhas do
// tempo pertencem a cada era — isso já existe nas próprias fontes e
// duplicar criaria mais um lugar pra divergir:
//   - cenarios/*.js já tem `era` (mesmos slugs daqui)
//   - app/linha-do-tempo/page.js's LINHAS_DO_TEMPO também ganhou `era`
//   - um item de materiais/dados.js pertence à era do PRIMEIRO slug em
//     `cenariosRelacionados` (mesma regra usada para agrupar em
//     /materiais) — sem cenariosRelacionados, o item não aparece em
//     /estudar/[era], só na lista plana de /materiais
//
// slug: usado na URL (/estudar/<slug>) e é o valor de `.era` alhures.
export default [
  {
    slug: 'colonizacao',
    nome: 'Colonização da América',
    periodo: 'Antes de 1500 — Século XVI',
    serie: '1a',
    resumo:
      'Maias, astecas e incas antes de qualquer navio chegar; o encontro, a conquista e a ' +
      'colonização depois. Ainda sem simulação — só a linha do tempo, por enquanto.',
    capa: '/imagens/linha-do-tempo/povos-originarios-e-colonizacao/capa.jpg',
  },
  {
    slug: 'absolutismo',
    nome: 'Absolutismo',
    periodo: 'Séculos XV — XVII',
    serie: '1a',
    resumo:
      'Como a Europa deixou de ser um mosaico de feudos e virou um continente de reis ' +
      'absolutos — Contrarreforma, monarquias, mercantilismo, e o Conselho da Coroa decidindo ' +
      'entre a fé e o controle.',
    capa: '/imagens/coroa-e-cofre/capa.jpg',
  },
  {
    slug: 'republica',
    nome: 'República Velha',
    periodo: '1889 — 1930',
    serie: '2a',
    resumo:
      'Quarenta anos entre uma república proclamada sem povo e a Revolução de 1930 — o ' +
      'coronelismo do interior e a greve geral que parou São Paulo.',
    capa: '/imagens/sao-paulo-1917/capa.jpg',
  },
  {
    slug: 'era-vargas',
    nome: 'Era Vargas',
    periodo: '1930 — 1945',
    serie: '2a',
    resumo:
      'Getúlio chega pela Revolução, governa por decreto no Estado Novo, e usa as CLT para ' +
      'moldar — não só reprimir — o movimento operário que a República Velha não conseguiu conter.',
    capa: '/imagens/o-plano-que-nao-existia/capa.jpg',
  },
]
