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
    resumo: 'Como a Europa deixou de ser um mosaico de feudos e virou um continente de reis absolutos: Reforma, Contrarreforma, formação das monarquias, os teóricos do absolutismo, navegações e mercantilismo — uma cadeia de causas, não fatos soltos.',
    capa: '/imagens/linha-do-tempo/absolutismo-e-mercantilismo/capa.jpg',
    telas: 14,
    duracaoMin: 13,
  },
  {
    slug: 'povos-originarios-e-colonizacao',
    titulo: 'Um continente que já tinha nome',
    periodo: 'Antes de 1500 — depois de hoje',
    serie: '1a',
    era: 'colonizacao',
    resumo: 'Maias, astecas e incas antes de qualquer navio chegar; o encontro, a conquista e a colonização depois — com atenção a quem escreveu cada fonte e à resistência que os livros às vezes esquecem.',
    capa: '/imagens/linha-do-tempo/povos-originarios-e-colonizacao/capa.jpg',
    telas: 13,
    duracaoMin: 12,
  },
  {
    slug: 'materialidade-e-saberes-incas',
    titulo: 'Pedra, Fio e Nó',
    periodo: 'Período inca',
    serie: '1a',
    era: 'colonizacao',
    resumo: 'Arquitetura sísmica sem argamassa, terraços que cultivam onde a montanha não deixaria, o quipu que administra um império em nós, o tecido que valia mais que ouro, e Machu Picchu alinhada às estrelas — fechando com a pergunta que a própria "descoberta" de 1911 esconde.',
    capa: '/imagens/linha-do-tempo/materialidade-e-saberes-incas/capa.jpg',
    telas: 11,
    duracaoMin: 10,
  },
  {
    slug: 'imaginario-do-colonizador',
    titulo: 'O Selvagem Que Inventaram',
    periodo: '1500 — hoje',
    serie: '1a',
    era: 'colonizacao',
    resumo: 'Como a imagem do indígena "selvagem" foi construída, carta por carta e gravura por gravura, por quem nunca foi indígena — de Caminha e Anchieta a Theodore de Bry — e como ela é respondida hoje por vozes indígenas como a de Gersem Baniwa. Onze telas, nenhuma decisão.',
    capa: '/imagens/linha-do-tempo/imaginario-do-colonizador/capa.jpg',
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
    telas: 18,
    duracaoMin: 16,
  },
  {
    slug: 'da-revolta-ao-desenvolvimento',
    titulo: 'Do quartel ao canteiro de obras',
    periodo: '1917 — 1961',
    serie: '2a',
    era: 'era-vargas',
    resumo: 'Mulheres operárias, o colapso da República Velha em 1930, a Revolta de 1932, a CLT como estratégia de controle, Dutra na Guerra Fria, o retorno e a queda de Vargas, e Juscelino prometendo 50 anos em 5.',
    capa: '/imagens/linha-do-tempo/da-revolta-ao-desenvolvimento/capa.jpg',
    telas: 15,
    duracaoMin: 14,
  },
]
