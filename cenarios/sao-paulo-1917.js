// São Paulo, 1917 — cenário da 2ª série (GDD v2, seção 8)
//
// STATUS (2026-08-23): só a Rodada 1 está escrita. R2-R5 ainda não — ver o
// TODO no fim do array `rodadas`. Isso NÃO é o protótipo completo descrito
// na seção 16 do GDD (esse protótipo não foi encontrado em lugar nenhum
// acessível; construímos do zero, ver docs/GDD-v2-modulo-simulacoes.md).
//
// Fontes reais usadas nesta rodada vêm do livro do 2º ano (Aula 3 —
// "Movimento operário: as greves e as lutas por direitos na Primeira
// República"). Toda fonte abaixo tem `natureza` declarada: 'documental'
// (transcrição real do livro, creditada) ou 'recriada' (reconstituição
// escrita para preencher uma lacuna que o livro não cobre — sinalizada
// com selo na tela, nunca apresentada como documento de época). As opções
// de decisão em si (`opcoesPorPapel`) são desenho de jogo informado pela
// história, não citações — não carregam `natureza`.
export default {
  slug: 'sao-paulo-1917',
  versao: 1,
  serie: '2a',
  titulo: 'São Paulo, 1917',
  pergunta: 'Quem foi que decidiu que o pão ia custar o dobro?',
  era: 'republica',
  aulasRelacionadas: [2, 3, 4],

  indicadores: [
    { slug: 'carestia', nome: 'Carestia', inicial: 70, faixas: ['suportável', 'pesada', 'fome'] },
    { slug: 'producao', nome: 'Produção nas fábricas', inicial: 80, faixas: ['parada', 'reduzida', 'plena'] },
    { slug: 'coesao', nome: 'Coesão operária', inicial: 25, faixas: ['dispersa', 'articulada', 'greve geral'] },
    { slug: 'repressao', nome: 'Repressão', inicial: 40, faixas: ['contida', 'ostensiva', 'violenta'] },
    { slug: 'opiniao', nome: 'Opinião pública', inicial: 45, faixas: ['contra os grevistas', 'dividida', 'a favor'] },
    // "Direitos no papel × direitos cumpridos" (seção 8.2 do GDD) fica de
    // fora por enquanto — é um par revelado só no fecho, não uma barra
    // comum que rodadas empurram; precisa de tratamento especial em
    // lib/simulacao/saldo.js quando a R5 (o acordo) for escrita.
  ],

  papeis: [
    {
      slug: 'coronel-cafe', nome: 'Fazendeiro de café / coronel', bloco: 'elite', peso: 6, cota: 3,
      perguntaGuia: 'O que garante meu lucro: o preço ou o voto?',
      contexto: 'Sua renda vem do café que sai pelo porto de Santos. A guerra na Europa bagunçou o câmbio, e uma fábrica parada na cidade não é, a princípio, problema seu — até virar.',
    },
    {
      slug: 'industrial-textil', nome: 'Industrial têxtil', bloco: 'elite', peso: 6, cota: 3,
      perguntaGuia: 'Até onde a máquina aguenta parar?',
      contexto: 'O Cotonifício Crespi é uma das maiores fábricas da Mooca. Você tem contrato de fornecimento para cumprir e um turno noturno que criou para dar conta da demanda da guerra.',
    },
    {
      slug: 'autoridade-estadual', nome: 'Autoridade estadual / Força Pública', bloco: 'elite', peso: 8, cota: 2,
      perguntaGuia: 'Ordem para quem?',
      contexto: 'Sua função é impedir que uma parede de 400 operários vire uma cidade parada. Em junho de 1917, ainda dá para tratar isso como caso de polícia local.',
    },
    {
      slug: 'grande-imprensa', nome: 'Grande imprensa', bloco: 'mediador', peso: 4, cota: 2,
      perguntaGuia: 'Notícia ou mediação?',
      contexto: 'Seu jornal chega às casas da elite paulistana. Uma greve de fábrica é, por enquanto, nota de pé de página — a questão é se ela vai continuar sendo.',
    },
    {
      slug: 'imprensa-operaria', nome: 'Imprensa operária', bloco: 'mediador', peso: 2, cota: 2,
      perguntaGuia: 'Denunciar ou organizar?',
      contexto: 'Você escreve para A Plebe. Ninguém na Mooca depende de você para saber que o horário aumentou — mas todo mundo depende de você para saber que não está sozinho.',
    },
    {
      slug: 'operaria-textil', nome: 'Operária têxtil', bloco: 'popular', peso: 1, cota: 8,
      perguntaGuia: 'Por que meu salário é menor pela mesma máquina?',
      contexto: 'Você trabalha no Crespi. O turno da noite começou há pouco, o aluguel do cortiço subiu de novo, e a mesma máquina que você opera rende menos no seu contracheque do que no de um homem.',
    },
    {
      slug: 'operario-imigrante', nome: 'Operário imigrante', bloco: 'popular', peso: 1, cota: 10,
      perguntaGuia: 'Greve me dá direito ou passagem de volta?',
      contexto: 'Você veio de longe para trabalhar nessa fábrica. Ter seu nome numa lista de grevistas pode significar solidariedade — ou, se a coisa piorar, virar motivo de deportação.',
    },
  ],

  rodadas: [
    {
      slug: 'preco-do-pao',
      titulo: 'O preço do pão',
      amplitude: 25,
      cena:
        'Junho de 1917. No bairro da Mooca, zona leste de São Paulo, o Cotonifício Crespi ' +
        'aumentou o turno noturno para dar conta da produção — a guerra na Europa disparou a ' +
        'demanda e também o preço de tudo. No dia 8, cerca de 400 operários pararam, reunidos ' +
        'pela Liga Operária da Mooca, pedindo 15 a 20% de aumento e o fim do turno da noite. A ' +
        'fábrica ameaçou demitir todo mundo. Ninguém, ainda, sabe se isso vai passar de um caso ' +
        'isolado.',
      fonte: {
        texto:
          'Em julho de 1917, uma greve de enormes proporções, envolvendo cerca de 100 mil ' +
          'trabalhadores, homens, mulheres e crianças, paralisou São Paulo [...]. A greve teve ' +
          'início no bairro da Mooca [...] no Cotonifício Crespi, no dia 8 de junho de 1917. Na ' +
          'fábrica Crespi, cerca de 400 operários iniciaram o movimento reivindicando um ' +
          'aumento salarial de 15 a 20% e protestando contra a extensão do horário de trabalho ' +
          'noturno [...]. A paralisação foi decidida pelos operários da fábrica, reunidos na ' +
          'Liga Operária da Mooca.',
        autor: 'TOLEDO, E. "Um ano extraordinário: greves, revoltas e circulação de ideias no Brasil em 1917." Estudos Históricos, Rio de Janeiro, v. 30, n. 61, p. 497-518, 2017.',
        acervo: 'Livro do 2º ano, Aula 3',
      },
      investigacao: {
        olhar:
          'O bonde que leva os operários até a fábrica é conhecido como "caradura" — lotado, ' +
          'barulhento, o mesmo trajeto todo santo dia. Da janela dá para ver as chaminés da ' +
          'Mooca, uma atrás da outra, e o movimento de quem troca o turno.',
        fontes: [
          {
            slug: 'bonde-carreira',
            tipo: 'olhar',
            titulo: 'O bonde "caradura"',
            papeis: ['operaria-textil', 'operario-imigrante', 'imprensa-operaria'],
            trecho:
              'Fotografia do bonde operário da Mooca, conhecido como "caradura" por levar os ' +
              'trabalhadores lotados até as fábricas. Datada de 1916, um ano antes da greve.',
            autor: 'Guilherme Gaensly (fotógrafo), 1916 — acervo do Instituto Moreira Salles.',
            acervo: 'Livro do 2º ano, Aula 3',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'autoritarismo-clientelismo',
            tipo: 'ler',
            titulo: 'Sobre o autoritarismo brasileiro',
            papeis: ['coronel-cafe', 'autoridade-estadual', 'grande-imprensa'],
            trecho:
              'Persistirá no Brasil um sério déficit republicano enquanto práticas patrimoniais ' +
              'e clientelistas continuarem a imperar no interior do nosso sistema político [...]. ' +
              'Sobretudo para os setores vulneráveis da sociedade, a regra democrática permanece ' +
              'muitas vezes suspensa no país.',
            autor: 'SCHWARCZ, L. M. Sobre o autoritarismo brasileiro. São Paulo: Companhia das Letras, 2019.',
            acervo: 'Livro do 2º ano, Aula 2',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'galpao-conversa',
            tipo: 'ouvir',
            titulo: 'O que se fala no galpão',
            papeis: ['operaria-textil', 'operario-imigrante'],
            trecho:
              '"Dizem que se a gente parar todo mundo junto, não tem jeito de mandar embora ' +
              'quatrocentos de uma vez. Mas se for só a nossa sala, é a nossa vaga que vai pra ' +
              'rua amanhã."',
            acervo: 'Reconstituição — não é um documento de época, é a fala típica de galpão que os ' +
              'relatos de sindicalistas e a imprensa operária do período registram sobre o cálculo ' +
              'que cada operário fazia antes de aderir.',
            natureza: 'recriada',
            confiavel: true,
          },
          {
            slug: 'cambio-guerra',
            tipo: 'ler',
            titulo: 'O câmbio em tempo de guerra',
            papeis: ['coronel-cafe', 'industrial-textil'],
            trecho:
              'Telegrama resumido: com a guerra na Europa, o frete marítimo triplicou e o câmbio ' +
              'oscila semana a semana. O café ainda sai pelo porto, mas cada vez mais caro para ' +
              'embarcar — e o custo de importar máquina e insumo têxtil sobe junto.',
            acervo: 'Reconstituição — dramatiza um fato real e creditado do livro (a Primeira Guerra ' +
              'Mundial como causa da alta inflação e da carestia no período), sem forjar um ' +
              'documento específico.',
            natureza: 'recriada',
            confiavel: true,
          },
        ],
      },
      opcoesPorPapel: {
        'operaria-textil': [
          { slug: 'reclamar-contramestra', texto: 'Reclamar formalmente à contramestra', deltas: { coesao: 2 } },
          { slug: 'lista-assinaturas', texto: 'Assinar a lista que corre no galpão pedindo aumento e fim do turno da noite', deltas: { coesao: 10, repressao: 3 } },
          { slug: 'aceitar-hora-extra', texto: 'Aceitar a hora extra oferecida em vez de aderir', deltas: { carestia: -3, coesao: -5, producao: 5 } },
        ],
        'operario-imigrante': [
          { slug: 'juntar-lista', texto: 'Juntar-se à lista de assinaturas', deltas: { coesao: 8, repressao: 2 } },
          { slug: 'cabeca-baixa', texto: 'Manter a cabeça baixa — o risco de ser mandado embora, ou pior, é maior para quem não nasceu aqui', deltas: { coesao: -5 } },
          { slug: 'carta-familia', texto: 'Escrever para a família contando o que está acontecendo, sem se comprometer publicamente ainda', deltas: { coesao: 1 } },
        ],
        'industrial-textil': [
          { slug: 'reduzir-turno', texto: 'Reduzir o turno noturno', deltas: { producao: -8, coesao: -6, opiniao: 3 } },
          { slug: 'demitir-agitadores', texto: 'Demitir quem está organizando a lista', deltas: { coesao: 12, repressao: 5, opiniao: -5 } },
          { slug: 'aumentar-5-proibir', texto: 'Conceder 5% de aumento e proibir reuniões dentro da fábrica', deltas: { carestia: -2, coesao: 4, repressao: 3 } },
        ],
        'coronel-cafe': [
          { slug: 'segurar-preco-saca', texto: 'Segurar o preço da saca de café à espera de melhor câmbio', deltas: { carestia: 2, opiniao: -2 } },
          { slug: 'pressionar-cambio', texto: 'Pressionar o governo estadual por câmbio favorável às exportações', deltas: { carestia: -3, producao: 2 } },
          { slug: 'apoiar-industriais', texto: 'Declarar apoio público aos industriais contra "a desordem"', deltas: { repressao: 3, opiniao: -3 } },
        ],
        'autoridade-estadual': [
          { slug: 'monitorar', texto: 'Monitorar discretamente, sem intervir ainda', deltas: { repressao: 1 } },
          { slug: 'avisar-fabrica', texto: 'Avisar a fábrica para resolver internamente antes que vire caso de polícia', deltas: { repressao: 2, opiniao: 1 } },
          { slug: 'mobilizar-forca-publica', texto: 'Mobilizar a Força Pública preventivamente na Mooca', deltas: { repressao: 8, coesao: 3 } },
        ],
        'grande-imprensa': [
          { slug: 'nota-local', texto: 'Publicar como incidente local, sem destaque', deltas: { opiniao: 1, coesao: -1 } },
          { slug: 'ignorar', texto: 'Não publicar nada por enquanto', deltas: { coesao: -2 } },
          { slug: 'reportar-parada', texto: 'Reportar a paralisação como fato, sem tomar partido declarado', deltas: { opiniao: 2, coesao: 2 } },
        ],
        'imprensa-operaria': [
          { slug: 'noticiar-a-plebe', texto: 'Noticiar o movimento nas páginas de A Plebe', deltas: { coesao: 10, repressao: 4 } },
          { slug: 'convocar-solidariedade', texto: 'Convocar outras categorias a se solidarizarem', deltas: { coesao: 14, repressao: 5 } },
          { slug: 'aguardar', texto: 'Aguardar mais informações antes de publicar', deltas: { coesao: 2 } },
        ],
      },
    },
    // TODO (próximos passos, seguindo a cronologia real do GDD seção 8.3):
    // - R2 "9 de julho": as fontes reais já levantadas (Fonte I "Prisões de
    //   operários" e Fonte II "O porquê das greves", ambas de A Plebe,
    //   datadas de julho de 1917) encaixam melhor aqui do que na R1 —
    //   guardadas para esta rodada.
    // - R3 "O cortejo" e R5 "O acordo": o livro do 2º ano (Aula 3) não
    //   narra a morte do sapateiro José Martinez, o funeral, o acordo de
    //   20% nem a Lei Adolfo Gordo — são fatos históricos reais (é sobre
    //   eles que o próprio GDD seção 8 se apoia), mas não vieram creditados
    //   nos PDFs enviados. Escrever essas rodadas exige ou (a) achar fonte
    //   melhor — o artigo de TOLEDO (2017) já citado acima provavelmente
    //   cobre isso — ou (b) escrever com `natureza: 'recriada'` e sinalizar
    //   ao professor para revisar antes de usar em sala.
    // - R4 "O Comitê de Defesa Proletária": a Aula 4 do livro tem a fonte
    //   exata que o GDD já previa para destrancar "salário igual para as
    //   mulheres" — as Bases de Acordo da Confederação Operária Brasileira
    //   (1906) — e mais um documento comparável (pauta de operários da
    //   construção civil do Rio, 1917, com jornada de 8h e fim do trabalho
    //   infantil). Boa fonte já em mãos, falta escrever a rodada.
  ],

  desfecho: {
    // Fixo desde já — não muda com o que a turma decidir (seção 5.4 e 8.4 do GDD).
    fixo: 'A greve acontece e o acordo de 20% é firmado.',
    variavel: ['cumprimento', 'repressao', 'quem-ficou-de-fora'],
    textoFecho: null, // escrever junto com a R5
    perguntasDebate: [], // gerado junto com o fecho completo
  },
}
