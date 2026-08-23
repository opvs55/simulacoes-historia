// São Paulo, 1917 — cenário da 2ª série (GDD v2, seção 8)
//
// STATUS (2026-08-23): as 5 rodadas estão escritas, e todos os 5 campos
// `fonte` principais são documentais — o livro do 2º ano (Aula 2, 3 e 4)
// cobre a origem da greve e a pauta das mulheres; o artigo completo de
// TOLEDO, E. "Um ano extraordinário: greves, revoltas e circulação de
// ideias no Brasil em 1917" (Estudos Históricos, 2017), enviado pelo
// professor, cobre o resto — a morte de José Gimenez Martinez, o cortejo,
// a pauta completa do Comitê e os termos do acordo. Alguns fragmentos
// menores de ambientação (o que se fala no galpão, o murmúrio patronal, os
// dois boatos) continuam `natureza: 'recriada'` porque são flavor text, não
// fatos historiográficos — isso é o esperado, não uma lacuna.
//
// Isso NÃO é o protótipo completo descrito na seção 16 do GDD (esse
// protótipo não foi encontrado em lugar nenhum acessível; construímos do
// zero, ver docs/GDD-v2-modulo-simulacoes.md).
export default {
  slug: 'sao-paulo-1917',
  versao: 2,
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
    // Par revelado "só no fecho" (seção 8.2 do GDD): ambos começam em 0 e só
    // se mexem na R5. `direitos_papel` sobe por efeitoFixo (o acordo de 20%
    // é fato histórico, não escolha da turma); `direitos_cumprido` sobe ou
    // não conforme as decisões de quem tinha o poder de cumprir o combinado.
    { slug: 'direitos_papel', nome: 'Direitos no papel', inicial: 0, faixas: ['nenhum', 'parcial', 'pleno'] },
    { slug: 'direitos_cumprido', nome: 'Direitos cumpridos', inicial: 0, faixas: ['nenhum', 'parcial', 'pleno'] },
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
        natureza: 'documental',
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

    {
      slug: 'nove-de-julho',
      titulo: '9 de julho',
      amplitude: 25,
      cena:
        '9 de julho de 1917. A tensão que vinha crescendo desde a Mooca chega ao centro. Num ' +
        'confronto entre grevistas e a Força Pública, o sapateiro José Martinez é baleado e ' +
        'morre. A notícia corre mais rápido do que qualquer jornal consegue imprimir.',
      efeitosFixos: { repressao: 8, coesao: 5 },
      fonte: {
        texto:
          'Se os operários morrem à mingua e se lamentam, que vão queixar-se a virgem dos ' +
          'desamparados; se reclamam e protestam ahi está a polícia, o exercito, a armada e ' +
          'todo aparelho legalitario [...]. O operariado realiza, portanto, uma obra justiceira ' +
          'conquistando pela gréve ou outros meios de acção directa tudo quanto lhe é ' +
          'extorquido, roubado legal ou illegalmente. [...] O movimento deve generalizar-se a ' +
          'todas as classes, alastrar-se por todo o paiz. (Grafia original.)',
        autor: 'BIBLIOTECA DIGITAL UNESP. "O porquê das greves." A Plebe, São Paulo, ano 1, n. 5, 09 jul. 1917.',
        acervo: 'Livro do 2º ano, Aula 3',
        natureza: 'documental',
      },
      investigacao: {
        olhar:
          'Fumaça de algum lugar perto da linha do trem. Gente correndo em direções opostas — ' +
          'uns fugindo, outros indo ver o que houve. Um cordão de soldados da Força Pública se ' +
          'forma na esquina, calado.',
        fontes: [
          {
            slug: 'prisoes-operarios',
            tipo: 'ler',
            titulo: 'Prisões de operários',
            papeis: ['imprensa-operaria', 'operaria-textil', 'operario-imigrante'],
            trecho:
              'A constituição republicana é uma burla. Está em scena a heroica policia de S. ' +
              'Paulo. Numerosas prisões de operarios. Assalto à typographia onde se imprime A ' +
              'PLEBE e ás Ligas operarias [...]. A prisão do nosso director Edgard Leuenroth. O ' +
              'Centro Libertario è violentamente assaltado. (Grafia original.)',
            autor: 'A Plebe, São Paulo, 1917.',
            acervo: 'Livro do 2º ano, Aula 3',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'relato-confronto',
            tipo: 'ler',
            titulo: 'Quem era José Gimenez Martinez',
            papeis: ['operaria-textil', 'operario-imigrante', 'imprensa-operaria'],
            trecho:
              'José Gimenez Martinez foi apenas uma das vítimas dos protestos, que chegaram a ' +
              'cerca de 200, segundo a investigação realizada pelo jornal Fanfulla no cemitério ' +
              'do Araçá nas noites de 15 e 16 de julho, quando a polícia fechou o cemitério para ' +
              'transportar os cadáveres.',
            autor: 'TOLEDO, E. "Um ano extraordinário: greves, revoltas e circulação de ideias no Brasil em 1917." Estudos Históricos, Rio de Janeiro, v. 30, n. 61, p. 497-518, 2017.',
            acervo: 'Artigo acadêmico completo, enviado pelo professor em 2026-08-23.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'relatorio-forca-publica',
            tipo: 'ler',
            titulo: 'Relatório da Força Pública',
            papeis: ['autoridade-estadual', 'coronel-cafe', 'grande-imprensa'],
            trecho:
              'Comunicamos que a tropa agiu em legítima defesa diante de manifestantes que ' +
              'arremessavam pedras. Lamenta-se a perda de uma vida, mas a ordem pública precisa ' +
              'ser restabelecida sem demora.',
            acervo: 'Reconstituição de um documento oficial típico do período — não é a transcrição de ' +
              'um relatório real.',
            natureza: 'recriada',
            confiavel: true,
          },
          {
            slug: 'boato-incendio',
            tipo: 'ouvir',
            titulo: '"Vão incendiar a fábrica esta noite"',
            papeis: ['industrial-textil', 'coronel-cafe', 'autoridade-estadual'],
            trecho:
              'Chegou aos ouvidos do patrão que os grevistas mais exaltados planejam atear fogo ' +
              'no Cotonifício ainda esta noite, em resposta à morte de Martinez.',
            acervo: 'Boato — nenhum incêndio a fábricas ocorreu durante a Greve Geral de 1917.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho:
              'Boato. Nenhuma fábrica foi incendiada em 1917 — o medo de que isso acontecesse é que ' +
              'foi real, e moveu decisões de gente que nunca chegou a ser ameaçada de verdade.',
          },
        ],
      },
      opcoesPorPapel: {
        'operaria-textil': [
          { slug: 'parar-em-luto', texto: 'Parar o trabalho em luto e protesto', deltas: { coesao: 12, repressao: 3 } },
          { slug: 'trabalhar-com-medo', texto: 'Continuar trabalhando, com medo do que pode vir', deltas: { coesao: -4 } },
          { slug: 'cuidar-feridos', texto: 'Deixar o posto para ajudar quem ficou ferido', deltas: { coesao: 4, opiniao: 2 } },
        ],
        'operario-imigrante': [
          { slug: 'aderir-risco', texto: 'Aderir ao protesto, mesmo sabendo o que uma ficha na polícia pode significar', deltas: { coesao: 10, repressao: 3 } },
          { slug: 'manter-distancia', texto: 'Manter distância — muito a perder se for preso ou marcado', deltas: { coesao: -6 } },
          { slug: 'espalhar-noticia', texto: 'Espalhar a notícia entre outros imigrantes, sem se expor na rua', deltas: { coesao: 3 } },
        ],
        'industrial-textil': [
          { slug: 'fechar-temporariamente', texto: 'Fechar a fábrica temporariamente', deltas: { producao: -10, repressao: -2, opiniao: 2 } },
          { slug: 'pedir-protecao-reforcada', texto: 'Pedir reforço policial na porta da fábrica', deltas: { repressao: 6, coesao: 3 } },
          { slug: 'comissao-negociacao', texto: 'Aceitar receber uma comissão de operários para negociar', deltas: { coesao: 2, opiniao: 3 } },
        ],
        'coronel-cafe': [
          { slug: 'pressionar-fim-rapido', texto: 'Pressionar por um fim rápido — a paralisação já ameaça o escoamento do café', deltas: { repressao: -2, opiniao: 1 } },
          { slug: 'manter-distancia-cafe', texto: 'Manter distância — problema da cidade, não do campo', deltas: { opiniao: -1 } },
          { slug: 'apoiar-linha-dura', texto: 'Apoiar publicamente a linha dura do governo', deltas: { repressao: 5, opiniao: -4 } },
        ],
        'autoridade-estadual': [
          { slug: 'reconhecer-excesso', texto: 'Reconhecer publicamente o excesso e recuar', deltas: { repressao: -8, opiniao: 5 } },
          { slug: 'reforcar-tropa', texto: 'Reforçar a tropa nas ruas', deltas: { repressao: 10, coesao: 4 } },
          { slug: 'abrir-investigacao', texto: 'Abrir uma investigação, sem mudar nada na rua por enquanto', deltas: { opiniao: 1, repressao: 2 } },
        ],
        'grande-imprensa': [
          { slug: 'manchete-baderna', texto: 'Estampar manchete de "baderna" e desordem', deltas: { opiniao: -4, coesao: -2 } },
          { slug: 'manchete-assassinato', texto: 'Estampar manchete de "assassinato" e repressão policial', deltas: { opiniao: 5, coesao: 3, repressao: 2 } },
          { slug: 'cobertura-factual', texto: 'Cobrir os fatos sem adjetivos, deixando o leitor tirar conclusões', deltas: { opiniao: 1 } },
        ],
        'imprensa-operaria': [
          { slug: 'convocar-cortejo', texto: 'Convocar publicamente o cortejo fúnebre como ato político', deltas: { coesao: 14, repressao: 3 } },
          { slug: 'pedir-resposta-dura', texto: 'Pedir resposta à altura — inclusive fora da lei', deltas: { coesao: 8, repressao: 10, opiniao: -3 } },
          { slug: 'pedir-calma', texto: 'Pedir calma, para não dar pretexto a mais repressão', deltas: { coesao: 2, repressao: -2 } },
        ],
      },
    },

    {
      slug: 'o-cortejo',
      titulo: 'O cortejo',
      amplitude: 35,
      efeitosFixos: { coesao: 15 },
      cena:
        'O funeral de José Gimenez Martinez — sapateiro, anarquista espanhol de 21 anos, do ' +
        'grupo Jovens Incansáveis — vira o maior ato político que São Paulo já viu. Mais de 10 ' +
        'mil pessoas acompanham o cortejo por vários pontos da cidade até o cemitério do Araçá, ' +
        'parando várias vezes para comícios de rua. Nenhum papel consegue fingir que isso não ' +
        'está acontecendo.',
      fonte: {
        texto:
          'O ponto máximo da agitação foi atingido no enterro do sapateiro José Gimenez ' +
          'Martinez, um jovem militante anarquista espanhol, que tinha apenas 21 anos e fazia ' +
          'parte do grupo Jovens Incansáveis. Mais de 10 mil pessoas participaram do cortejo ' +
          'fúnebre, que seguiu por vários pontos da cidade até o cemitério do Araçá. O cortejo ' +
          'foi interrompido por vários comícios.',
        autor: 'TOLEDO, E. "Um ano extraordinário: greves, revoltas e circulação de ideias no Brasil em 1917." Estudos Históricos, Rio de Janeiro, v. 30, n. 61, p. 497-518, 2017.',
        acervo: 'Artigo acadêmico completo, enviado pelo professor em 2026-08-23.',
        natureza: 'documental',
      },
      investigacao: {
        olhar:
          'Não dá para ver o fim da fila de gente, em nenhuma das duas direções. Alguém começa a ' +
          'cantar; outros seguem calados. As lojas do trajeto fecham as portas — por respeito, ou ' +
          'por medo, ninguém sabe dizer.',
        fontes: [
          {
            slug: 'janela-do-gabinete',
            tipo: 'olhar',
            titulo: 'Visto da janela do gabinete',
            papeis: ['autoridade-estadual', 'grande-imprensa', 'coronel-cafe', 'industrial-textil'],
            trecho:
              'De cima, a rua parece um rio que não acaba. Alguém no gabinete comenta baixinho ' +
              'que nunca tinha visto tanta gente parada ao mesmo tempo na cidade.',
            acervo: 'Reconstituição — ambientação, não citação de um documento específico.',
            natureza: 'recriada',
            confiavel: true,
          },
          {
            slug: 'no-meio-do-cortejo',
            tipo: 'olhar',
            titulo: 'No meio do cortejo',
            papeis: ['operaria-textil', 'operario-imigrante', 'imprensa-operaria'],
            trecho:
              'Gente que você nunca viu na fábrica está ali do seu lado. Padeiro, sapateiro, ' +
              'costureira — o cortejo já não é só de quem trabalha no Crespi.',
            acervo: 'Reconstituição — ambientação, não citação de um documento específico.',
            natureza: 'recriada',
            confiavel: true,
          },
        ],
      },
      opcoesPorPapel: {
        'operaria-textil': [
          { slug: 'participar-cortejo', texto: 'Sair da fila e entrar no cortejo', deltas: { coesao: 15, repressao: 2 } },
          { slug: 'observar-distancia', texto: 'Observar da porta da fábrica, sem entrar no cortejo', deltas: { coesao: -3 } },
          { slug: 'ajudar-organizar-cortejo', texto: 'Ajudar a organizar a passagem do cortejo pelo seu bairro', deltas: { coesao: 10, repressao: 3 } },
        ],
        'operario-imigrante': [
          { slug: 'participar-cortejo-risco', texto: 'Entrar no cortejo, apesar do risco', deltas: { coesao: 15, repressao: 3 } },
          { slug: 'observar-de-longe', texto: 'Observar de longe — muito visível para quem pode ser deportado', deltas: { coesao: -4 } },
          { slug: 'apoio-logistico', texto: 'Ajudar sem se expor na linha de frente (água, recados, abrigo)', deltas: { coesao: 6 } },
        ],
        'industrial-textil': [
          { slug: 'fechar-por-respeito', texto: 'Fechar a fábrica — por respeito, ou por medo, tanto faz o motivo', deltas: { producao: -12, opiniao: 3 } },
          { slug: 'manter-seguranca-reforcada', texto: 'Manter a produção com segurança reforçada na porta', deltas: { repressao: 5, coesao: 4 } },
          { slug: 'buscar-mediacao', texto: 'Buscar mediação através do comércio e da igreja local', deltas: { opiniao: 3, repressao: -2 } },
        ],
        'coronel-cafe': [
          { slug: 'pressionar-acordo-rapido', texto: 'Usar sua influência para pressionar por um acordo rápido', deltas: { repressao: -3, opiniao: 2 } },
          { slug: 'manter-irrelevante', texto: 'Continuar tratando como problema alheio', deltas: { opiniao: -2 } },
          { slug: 'usar-influencia-politica', texto: 'Acionar contatos no governo estadual para "resolver isso"', deltas: { repressao: 3, opiniao: -1 } },
        ],
        'autoridade-estadual': [
          { slug: 'recuar-de-vez', texto: 'Recuar de vez, prometer investigação e reformas', deltas: { repressao: -10, opiniao: 6 } },
          { slug: 'reprimir-cortejo', texto: 'Tentar dispersar o cortejo', deltas: { repressao: 15, coesao: 6, opiniao: -8 } },
          { slug: 'pedir-mediacao-terceiros', texto: 'Pedir que a imprensa e o comércio ajudem a mediar', deltas: { opiniao: 3, repressao: -2 } },
        ],
        'grande-imprensa': [
          { slug: 'mudar-tom', texto: 'Mudar o tom — não dá mais para tratar isso como nota de pé de página', deltas: { opiniao: 5, coesao: 2 } },
          { slug: 'continuar-minimizando', texto: 'Continuar minimizando a dimensão do fato', deltas: { opiniao: -4 } },
          { slug: 'buscar-equilibrio', texto: 'Buscar entrevistar autoridades para "equilibrar" a cobertura', deltas: { opiniao: 1 } },
        ],
        'imprensa-operaria': [
          { slug: 'convocar-geral', texto: 'Transformar a cobertura em convocação para greve geral', deltas: { coesao: 18, repressao: 4 } },
          { slug: 'registrar-testemunhos', texto: 'Registrar testemunhos do cortejo para a posteridade', deltas: { coesao: 5, opiniao: 2 } },
          { slug: 'manter-tom-anterior', texto: 'Manter o mesmo tom de antes, sem inflamar mais', deltas: { coesao: 3 } },
        ],
      },
    },

    {
      slug: 'comite-defesa-proletaria',
      titulo: 'O Comitê de Defesa Proletária',
      amplitude: 25,
      cena:
        'Com a cidade parada, lideranças sindicais e anarquistas — entre elas Edgard Leuenroth, ' +
        'diretor de A Plebe, e o socialista italiano Teodoro Monicelli, diretor do Avanti! — ' +
        'formam o Comitê de Defesa Proletária para negociar em nome dos grevistas, após ' +
        'consultar as entidades operárias sobre o que incluir na pauta.',
      fonte: {
        texto:
          'Eram elas: a libertação dos grevistas presos, o respeito "do modo mais absoluto" ao ' +
          'direito de associação para os trabalhadores, nenhuma demissão por participação na ' +
          'greve, a abolição do trabalho de menores de 14 anos, a proibição do trabalho noturno ' +
          'para menores de 18 anos, a abolição do trabalho noturno das mulheres, o aumento de ' +
          '35% para os salários inferiores a 5$000 e de 25% para os superiores, o pagamento ' +
          'pontual a cada 15 dias, a garantia de trabalho permanente aos operários, a jornada ' +
          'de oito horas, a semana inglesa e o aumento de 50% em todo trabalho extraordinário, ' +
          'o imediato barateamento dos gêneros de primeira necessidade [...] e a redução do ' +
          'preço dos aluguéis.',
        autor: 'A Plebe, São Paulo, 21 jul. 1917, apud TOLEDO, E. "Um ano extraordinário..." Estudos Históricos, Rio de Janeiro, v. 30, n. 61, 2017.',
        acervo: 'Artigo acadêmico completo, enviado pelo professor em 2026-08-23 — a pauta real do Comitê de Defesa Proletária de São Paulo, não um modelo comparável.',
        natureza: 'documental',
      },
      investigacao: {
        olhar:
          'Numa mesa de bar improvisada em sede sindical, alguém escreve a lápis, risca, escreve ' +
          'de novo. Cada item que entra na lista é uma discussão.',
        fontes: [
          {
            slug: 'bases-acordo-1906',
            tipo: 'ler',
            titulo: 'Bases de Acordo da Confederação Operária Brasileira (1906)',
            papeis: ['operaria-textil', 'imprensa-operaria'],
            trecho:
              'Considerando que a causa principal da exploração exercida contra as mulheres [...] ' +
              'está no fato de lhes faltar coesão e solidariedade [...], o Congresso [...] ' +
              'convida e incita os sindicatos operários a envidar todos os esforços para ' +
              'organizar as mulheres e torná-las companheiras de luta, abolindo a concorrência ' +
              'que fazem, aliás ocasionada pela exploração burguesa, a qual paga pouco e exige ' +
              'muito.',
            autor: 'Confederação Operária Brasileira, aprovadas pelo Primeiro Congresso Operário Brasileiro (1906).',
            acervo: 'Livro do 2º ano, Aula 4',
            natureza: 'documental',
            confiavel: true,
            destrancaOpcao: 'propor-salario-igual',
          },
          {
            slug: 'terra-livre-mulheres',
            tipo: 'ler',
            titulo: 'Mulheres na luta de classes — "A Terra Livre"',
            papeis: ['operaria-textil', 'imprensa-operaria'],
            trecho:
              '"Devemos demonstrar, enfim, que somos capazes de exigir o que nos pertence; e se ' +
              'todas forem solidárias [...] nós começaremos por desmascarar a cupidez dos ' +
              'patrões." [...] "Não devemos [...] esperar que nos concedam o que nos pertence ' +
              'quando lhes agrade. Devemos tomá-lo por nossas mãos."',
            autor: 'A Terra Livre, 19 jul. e 15 ago. 1906, apud RAGO, M. Trabalho feminino e sexualidade. In: PRIORI, M.; BASSANEZI, C. (org.). História das mulheres no Brasil. São Paulo: Contexto, 2004.',
            acervo: 'Livro do 2º ano, Aula 4',
            natureza: 'documental',
            confiavel: true,
            destrancaOpcao: 'propor-salario-igual',
          },
          {
            slug: 'murmurio-patronal',
            tipo: 'ouvir',
            titulo: 'O que se murmura do outro lado',
            papeis: ['industrial-textil', 'coronel-cafe'],
            trecho:
              '"Se a gente começa a ceder item por item, esse Comitê vira sindicato permanente. ' +
              'Melhor negociar rápido e calado do que deixar isso virar rotina."',
            acervo: 'Reconstituição — fala típica atribuída à classe patronal, não uma citação de um indivíduo real.',
            natureza: 'recriada',
            confiavel: true,
          },
        ],
      },
      opcoesPorPapel: {
        'operaria-textil': [
          { slug: 'propor-salario-igual', texto: 'Propor que a pauta inclua salário igual para homens e mulheres', deltas: { coesao: 10, opiniao: 2 } },
          { slug: 'propor-jornada-8h', texto: 'Propor jornada de 8 horas', deltas: { coesao: 6 } },
          { slug: 'aceitar-pauta-pronta', texto: 'Aceitar a pauta que já está pronta, sem propor mudança', deltas: { coesao: -3 } },
        ],
        'operario-imigrante': [
          { slug: 'propor-fim-trabalho-infantil', texto: 'Propor o fim do trabalho de menores de 14 anos', deltas: { coesao: 8, opiniao: 3 } },
          { slug: 'propor-protecao-acidente', texto: 'Propor indenização integral em caso de acidente', deltas: { coesao: 6 } },
          { slug: 'nao-participar-redacao', texto: 'Não participar da redação — deixar para quem tem mais experiência', deltas: { coesao: -4 } },
        ],
        'industrial-textil': [
          { slug: 'aceitar-negociar-pauta', texto: 'Aceitar negociar item a item com o Comitê', deltas: { opiniao: 4, repressao: -2 } },
          { slug: 'recusar-legitimidade-comite', texto: 'Recusar reconhecer o Comitê como interlocutor legítimo', deltas: { coesao: 6, repressao: 3, opiniao: -4 } },
          { slug: 'contraproposta-reduzida', texto: 'Oferecer contraproposta reduzida antes de qualquer reunião', deltas: { opiniao: 1 } },
        ],
        'coronel-cafe': [
          { slug: 'pressionar-acordo-pauta', texto: 'Pressionar por um acordo rápido para acabar com o caos', deltas: { opiniao: 2, repressao: -1 } },
          { slug: 'manter-distancia-pauta', texto: 'Manter distância — pauta de fábrica não é problema do campo', deltas: { opiniao: -1 } },
          { slug: 'endurecer-pauta', texto: 'Endurecer — ceder à pauta abre precedente perigoso', deltas: { repressao: 4, opiniao: -3 } },
        ],
        'autoridade-estadual': [
          { slug: 'reconhecer-comite', texto: 'Reconhecer o Comitê como interlocutor e sentar à mesa', deltas: { repressao: -6, opiniao: 5 } },
          { slug: 'ignorar-comite', texto: 'Ignorar o Comitê, tratar apenas com os patrões', deltas: { coesao: 5, opiniao: -3 } },
          { slug: 'negociar-com-vigilancia', texto: 'Aceitar negociar, mas manter vigilância sobre as lideranças', deltas: { repressao: 4, opiniao: 1 } },
        ],
        'grande-imprensa': [
          { slug: 'publicar-pauta-integral', texto: 'Publicar a pauta na íntegra, item por item', deltas: { opiniao: 4, coesao: 2 } },
          { slug: 'publicar-itens-moderados', texto: 'Publicar só os itens "razoáveis", omitir os outros', deltas: { opiniao: 1 } },
          { slug: 'criticar-pauta', texto: 'Publicar editorial criticando a pauta como "inflamada"', deltas: { opiniao: -3, coesao: 2 } },
        ],
        'imprensa-operaria': [
          { slug: 'pauta-ampla', texto: 'Redigir uma pauta ampla, incluindo salário igual e fim do trabalho infantil', deltas: { coesao: 12, repressao: 3 } },
          { slug: 'pauta-minima', texto: 'Redigir uma pauta mínima, focada só no que tem mais chance de ser aceito', deltas: { coesao: 2, opiniao: 2 } },
          { slug: 'divulgar-bases-1906', texto: 'Reimprimir as Bases de Acordo de 1906 ao lado da nova pauta', deltas: { coesao: 8, opiniao: 2 } },
        ],
      },
    },

    {
      slug: 'o-acordo',
      titulo: 'O acordo',
      amplitude: 30,
      efeitosFixos: { direitos_papel: 65, carestia: -12 },
      cena:
        'Entre sábado e segunda-feira (14 a 16 de julho), com o secretário de Justiça Eloy ' +
        'Chaves reunido com os principais empresários da cidade e uma comissão de diretores de ' +
        'jornais mediando, os patrões vão assinando o acordo: direito de reunião reconhecido, ' +
        'aumento de 20% nos salários, libertação dos presos, proibição de demitir grevistas. Os ' +
        'operários voltam ao trabalho. Nas semanas seguintes, porém, o que foi prometido nem ' +
        'sempre é o que se cumpre.',
      fonte: {
        texto:
          'Entre o sábado 14 e a segunda-feira 16 de julho, vários empresários foram assinando ' +
          'um acordo que reconhecia o direito de reunião, concedia aumento de 20% nos salários, ' +
          'garantia a libertação dos presos e proibia a demissão dos operários grevistas.',
        autor: 'TOLEDO, E. "Um ano extraordinário: greves, revoltas e circulação de ideias no Brasil em 1917." Estudos Históricos, Rio de Janeiro, v. 30, n. 61, p. 497-518, 2017.',
        acervo: 'Artigo acadêmico completo, enviado pelo professor em 2026-08-23.',
        natureza: 'documental',
      },
      investigacao: {
        olhar:
          'A fábrica reabre. Algumas caras de sempre não aparecem no primeiro dia. Ninguém fala ' +
          'muito alto sobre isso.',
        fontes: [
          {
            slug: 'lista-demitidos',
            tipo: 'ler',
            titulo: 'Uma lista que corre por baixo',
            papeis: ['operaria-textil', 'imprensa-operaria'],
            trecho:
              'Uma lista, copiada à mão e passada de mão em mão, com o nome de quem não foi ' +
              'readmitido depois do acordo — a maioria, gente que apareceu na frente durante o ' +
              'cortejo ou o Comitê.',
            acervo: 'Reconstituição — representa o fenômeno real da demissão seletiva pós-acordo, sem forjar uma lista específica.',
            natureza: 'recriada',
            confiavel: true,
          },
          {
            slug: 'aviso-lei-adolfo-gordo',
            tipo: 'ler',
            titulo: 'A Lei que já existia, agora usada',
            papeis: ['operario-imigrante', 'autoridade-estadual', 'imprensa-operaria'],
            trecho:
              'Uma lei de 1907 permite expulsar do país estrangeiro considerado perigoso à ordem ' +
              'pública. Ela não foi criada por causa da greve — mas é sobre lideranças imigrantes ' +
              'do movimento operário que ela está sendo aplicada agora.',
            acervo: 'Reconstituição — a Lei Adolfo Gordo (Decreto nº 1.641, de 1907) é real; sua aplicação ' +
              'contra lideranças anarquistas imigrantes no pós-1917 é fato histórico bem documentado, ' +
              'mas este trecho não transcreve um documento específico.',
            natureza: 'recriada',
            confiavel: true,
          },
          {
            slug: 'boato-cancelamento',
            tipo: 'ouvir',
            titulo: '"O acordo vai ser cancelado"',
            papeis: ['operaria-textil', 'operario-imigrante', 'industrial-textil'],
            trecho:
              '"Dizem que se a produção não voltar ao normal em 48 horas, os patrões vão ' +
              'cancelar tudo que foi combinado."',
            acervo: 'Boato — não há registro de uma cláusula assim no acordo que encerrou a greve.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho:
              'Boato. Não existiu prazo nem cláusula de cancelamento — o medo de perder o que tinha ' +
              'sido conquistado é que empurrou gente de volta ao trabalho mais depressa do que precisava.',
          },
        ],
      },
      opcoesPorPapel: {
        'industrial-textil': [
          { slug: 'cumprir-integralmente', texto: 'Cumprir o acordo integralmente, sem retaliação', deltas: { direitos_cumprido: 15, opiniao: 4 } },
          { slug: 'demissao-seletiva', texto: 'Readmitir a maioria, mas demitir aos poucos quem liderou', deltas: { direitos_cumprido: -8, coesao: 4, opiniao: -3 } },
          { slug: 'usar-lei-adolfo-gordo-industrial', texto: 'Denunciar lideranças estrangeiras à polícia com base na Lei Adolfo Gordo', deltas: { direitos_cumprido: -14, repressao: 8, opiniao: -6 } },
        ],
        'coronel-cafe': [
          { slug: 'apoiar-normalizacao', texto: 'Apoiar a normalização rápida — o que importa é a produção voltando', deltas: { producao: 4, direitos_cumprido: 3 } },
          { slug: 'manter-distancia-final', texto: 'Manter distância do desfecho, como fez o resto do tempo', deltas: { opiniao: -1 } },
          { slug: 'pressionar-exemplo', texto: 'Pressionar para que "alguém pague o preço", evitando que isso se repita', deltas: { repressao: 6, direitos_cumprido: -6 } },
        ],
        'autoridade-estadual': [
          { slug: 'fiscalizar-cumprimento', texto: 'Fiscalizar o cumprimento do acordo nas fábricas', deltas: { direitos_cumprido: 10, opiniao: 4 } },
          { slug: 'aplicar-lei-adolfo-gordo', texto: 'Usar a Lei Adolfo Gordo para deportar lideranças imigrantes', deltas: { direitos_cumprido: -12, repressao: 10, opiniao: -5 } },
          { slug: 'declarar-caso-encerrado', texto: 'Declarar o caso encerrado, sem fiscalizar nada', deltas: { direitos_cumprido: -5 } },
        ],
        'grande-imprensa': [
          { slug: 'cobrar-cumprimento', texto: 'Cobrar publicamente o cumprimento do acordo', deltas: { direitos_cumprido: 8, opiniao: 3 } },
          { slug: 'declarar-paz-social', texto: 'Declarar "paz social restaurada" e seguir para a próxima pauta', deltas: { direitos_cumprido: -2 } },
          { slug: 'investigar-demissoes', texto: 'Investigar e publicar as demissões seletivas', deltas: { direitos_cumprido: 10, coesao: 3, opiniao: 2 } },
        ],
        'imprensa-operaria': [
          { slug: 'denunciar-retaliacoes', texto: 'Denunciar publicamente as retaliações e deportações', deltas: { direitos_cumprido: 6, coesao: 6, repressao: 3 } },
          { slug: 'comemorar-vitoria', texto: 'Comemorar a vitória, sem fiscalizar o que vem depois', deltas: { direitos_cumprido: -4 } },
          { slug: 'organizar-apoio', texto: 'Organizar apoio a quem for demitido ou ameaçado de deportação', deltas: { direitos_cumprido: 9, coesao: 8 } },
        ],
        'operaria-textil': [
          { slug: 'cobrar-prometido', texto: 'Cobrar, publicamente, exatamente o que foi prometido', deltas: { direitos_cumprido: 6, coesao: 3 } },
          { slug: 'aceitar-o-que-vier', texto: 'Aceitar o que vier, com medo de perder o posto de novo', deltas: { direitos_cumprido: -5 } },
          { slug: 'apoiar-colegas-demitidas', texto: 'Apoiar as colegas que forem demitidas mesmo assim', deltas: { direitos_cumprido: 5, coesao: 6 } },
        ],
        'operario-imigrante': [
          { slug: 'temer-e-recuar', texto: 'Recuar da vida pública — o risco de deportação agora é real', deltas: { direitos_cumprido: -6, coesao: -3 } },
          { slug: 'continuar-organizando', texto: 'Continuar organizando, apesar do risco', deltas: { direitos_cumprido: 7, coesao: 7, repressao: 3 } },
          { slug: 'buscar-apoio-conterraneos', texto: 'Buscar apoio e abrigo entre conterrâneos, por precaução', deltas: { direitos_cumprido: 2 } },
        ],
      },
    },
  ],

  desfecho: {
    fixo: 'A greve acontece e o acordo de 20% é firmado.',
    variavel: ['cumprimento', 'repressao', 'quem-ficou-de-fora'],
    textoFecho:
      'A greve de 1917 termina como começou: decidida por quem trabalha, não por quem manda. ' +
      'O acordo de 20% foi real — mas o que a turma acabou de viver, nas duas últimas rodadas, ' +
      'é que "no papel" e "na prática" raramente são a mesma coisa. O nome que os livros dão a ' +
      'isso vem por último: vocês passaram por dentro da Primeira República — o mesmo sistema ' +
      'que a Aula 2 chama de liberalismo oligárquico.',
    perguntasDebate: [
      'A barra de "direitos cumpridos" ficou bem abaixo da de "direitos no papel"? Por quê, na visão de vocês?',
      'Quem, na turma, propôs salário igual para as mulheres na pauta — e quem só decidiu depois de ler as Bases de 1906? O que isso mudou?',
      'Se vocês fossem sorteados de novo, para outro papel, decidiriam diferente? O que isso diz sobre o peso que cada papel carrega?',
    ],
  },
}
