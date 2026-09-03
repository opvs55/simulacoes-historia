// Catálogo de linhas do tempo — extraído de app/linha-do-tempo/page.js
// para ser reaproveitado em /estudar/[era] (ver
// docs/plano-navegacao-por-periodo.md) sem duplicar os dados.
//
// era: mesmos slugs de cenarios/eras.js e do campo `era` em
// cenarios/*.js — definido manualmente aqui (não derivado de
// cenariosRelacionados como em materiais/dados.js) porque uma linha do
// tempo cobre um arco de tempo mais largo que às vezes atravessa duas
// eras; o que importa é o núcleo temático, por julgamento editorial.
export default [
  {
    slug: 'absolutismo-e-mercantilismo',
    titulo: 'O rei, a fé e o mercado',
    periodo: 'Séculos XV — XVII',
    serie: '1a',
    era: 'absolutismo',
    resumo: 'Como a Europa deixou de ser um mosaico de feudos e virou um continente de reis absolutos: Contrarreforma, formação das monarquias, os teóricos do absolutismo, navegações e mercantilismo.',
    capa: '/imagens/linha-do-tempo/absolutismo-e-mercantilismo/capa.jpg',
    telas: 11,
    duracaoMin: 10,
  },
  {
    slug: 'povos-originarios-e-colonizacao',
    titulo: 'Um continente que já tinha nome',
    periodo: 'Antes de 1500 — depois de hoje',
    serie: '1a',
    era: 'colonizacao',
    resumo: 'Maias, astecas e incas antes de qualquer navio chegar; o encontro, a conquista e a colonização depois — com atenção a quem escreveu cada fonte e à resistência que os livros às vezes esquecem.',
    capa: '/imagens/linha-do-tempo/povos-originarios-e-colonizacao/capa.jpg',
    telas: 12,
    duracaoMin: 11,
  },
  {
    slug: 'republica-velha',
    titulo: 'A República que o povo assistiu',
    periodo: '1889 — 1930',
    serie: '2a',
    era: 'republica',
    resumo: 'Da proclamação sem povo até Getúlio Vargas, em dezessete telas: coronelismo, a greve de 1917, a Semana de 22, a Coluna Prestes e a crise que derruba a Primeira República.',
    capa: '/imagens/linha-do-tempo/republica-velha/capa.jpg',
    telas: 17,
    duracaoMin: 15,
  },
  {
    slug: 'da-revolta-ao-desenvolvimento',
    titulo: 'Do quartel ao canteiro de obras',
    periodo: '1917 — 1961',
    serie: '2a',
    era: 'era-vargas',
    resumo: 'Mulheres operárias, a Revolta de 1932, a CLT como estratégia de controle, Dutra na Guerra Fria, o retorno e a queda de Vargas, e Juscelino prometendo 50 anos em 5.',
    capa: '/imagens/linha-do-tempo/da-revolta-ao-desenvolvimento/capa.jpg',
    telas: 11,
    duracaoMin: 10,
  },
]
