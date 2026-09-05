// "9 de Julho" — Revolução Constitucionalista, São Paulo, 1932 (GDD-style,
// 2ª série). Nenhuma pessoa real e nomeada é papel jogável nem retrato: nem
// Pedro de Toledo (interventor que aderiu à revolta), nem o general Isidoro
// Dias Lopes, nem os quatro/cinco jovens do MMDC — eles aparecem só como
// fatos históricos (`documental`, em `contexto`/`investigacao`), do mesmo
// jeito que José Gimenez Martinez aparece em sao-paulo-1917.js: um nome
// real, tratado com cuidado, não um papel para "interpretar".
//
// Fontes: datas e eventos (mortos de 23 de maio de 1932 na Praça da
// República — Mário Martins de Almeida, Euclides Bueno Miragaia, Dráusio
// Marcondes de Souza, Antônio Camargo de Andrade, e Orlando de Oliveira
// Alvarenga, ferido no mesmo dia e morto semanas depois — formação da
// sigla MMDC, Frente Única Paulista em fevereiro de 1932, eclosão da
// revolta em 9 de julho, aclamação de Pedro de Toledo como governador em
// 10 de julho, Campanha do Ouro para o Bem de São Paulo, rendição em 1º de
// outubro de 1932 após 87 dias de combate, saldo oficial de 934 mortos com
// estimativas não oficiais bem mais altas, e a sequência política de
// 1933-34 — Assembleia Constituinte, Armando de Sales Oliveira governador
// civil, Constituição de 1934) são fatos históricos bem estabelecidos,
// marcados como `documental` (fontes: FGV CPDOC, Wikipédia PT, Assembleia
// Legislativa de SP — não há citação literal de um único documento de
// época em nenhuma fonte deste cenário). "Vozes de época" — o que um
// soldado, uma organizadora da Campanha do Ouro ou um operário teriam
// dito — não são citações reais verificadas, então são sempre `recriada`.
export default {
  slug: 'nove-de-julho-1932',
  versao: 1,
  serie: '2a',
  era: 'era-vargas',
  titulo: '9 de Julho',
  pergunta: 'Foi uma luta pela Constituição, ou a elite paulista querendo de volta o poder que perdeu em 1930?',

  introducao:
    'São Paulo, 1932. Depois da Revolução de 1930, que tirou a Primeira República do poder e pôs ' +
    'Getúlio Vargas à frente de um governo provisório, São Paulo perdeu a posição de protagonista ' +
    'que tinha na política nacional havia décadas — sem eleições, sem Constituição em vigor, e com ' +
    'interventores escolhidos por Vargas, não pelos paulistas. Em 23 de maio, quatro estudantes ' +
    'morrem num confronto na Praça da República; seus nomes — Martins, Miragaia, Dráusio, Camargo ' +
    '— viram a sigla MMDC, e o luto vira mobilização. Em 9 de julho, São Paulo pega em armas contra ' +
    'o governo federal, sozinho, por quase noventa dias. A pergunta que esta simulação não responde ' +
    'por vocês: foi mesmo por Constituição, ou também — ou principalmente — pelo poder que São ' +
    'Paulo tinha perdido dois anos antes?',

  indicadores: [
    { slug: 'recursos-de-guerra', nome: 'Recursos de guerra', inicial: 45, faixas: ['escassos', 'sustentáveis', 'fartos'] },
    { slug: 'moral-de-combate', nome: 'Moral de combate', inicial: 65, faixas: ['abalada', 'firme', 'eufórica'] },
    { slug: 'unidade-paulista', nome: 'Unidade paulista', inicial: 60, faixas: ['rachada', 'tensa', 'inabalável'] },
    { slug: 'avanco-legalista', nome: 'Avanço das tropas legalistas', inicial: 15, faixas: ['contido', 'preocupante', 'incontornável'] },
    { slug: 'memoria-oficial', nome: 'Memória oficial (herói cívico)', inicial: 0, faixas: ['inexistente', 'em construção', 'consagrada'] },
    { slug: 'memoria-critica', nome: 'Memória crítica (o que quase ficou de fora)', inicial: 0, faixas: ['apagada', 'parcial', 'preservada'] },
  ],

  papeis: [
    {
      slug: 'governo-constitucionalista',
      nome: 'Governo constitucionalista',
      bloco: 'elite',
      peso: 8,
      cota: 1,
      perguntaGuia: 'Um governo em guerra pode dizer que fala por todo mundo?',
      contexto:
        'Você fala em nome do governo do Estado — nomeado por Vargas para pacificar São Paulo, e ' +
        'agora à frente da revolta contra ele. Cada decisão sua precisa parecer que representa "todo ' +
        'o povo paulista", mesmo quando representa, antes de mais nada, quem financia a guerra.',
      icone: '/imagens/nove-de-julho-1932/papeis/governo-constitucionalista.jpg',
    },
    {
      slug: 'fazendeiro-industrial-financiador',
      nome: 'Fazendeiro e industrial financiador',
      bloco: 'elite',
      peso: 5,
      cota: 3,
      perguntaGuia: 'Defendo a Constituição, ou defendo o Brasil de antes de 1930, quando eu mandava mais?',
      contexto:
        'O café perdeu valor com a crise internacional, e São Paulo perdeu poder político em 1930 — ' +
        'as duas coisas, para você, estão mais ligadas do que qualquer discurso admite em praça ' +
        'pública. Financiar a revolta é caro. Perder de novo, para o mesmo governo, seria mais caro ainda.',
      icone: '/imagens/nove-de-julho-1932/papeis/fazendeiro-industrial-financiador.jpg',
    },
    {
      slug: 'jornalista-da-memoria',
      nome: 'Jornalista da memória',
      bloco: 'mediador',
      peso: 3,
      cota: 2,
      perguntaGuia: 'Estou registrando a guerra, ou já estou escrevendo o monumento?',
      contexto:
        'Cada linha que você escreve hoje corre o risco de virar "a história oficial" de amanhã, ' +
        'antes mesmo de a guerra acabar. Entre contar o que vê e construir o que São Paulo vai ' +
        'querer lembrar, a distância às vezes é menor do que você gostaria.',
      icone: '/imagens/nove-de-julho-1932/papeis/jornalista-da-memoria.jpg',
    },
    {
      slug: 'mulher-da-campanha-do-ouro',
      nome: 'Mulher da Campanha do Ouro',
      bloco: 'mediador',
      peso: 2,
      cota: 3,
      perguntaGuia: 'Doar joia de família é patriotismo, ou é a única arma que me deixam pegar?',
      contexto:
        'Você organiza um posto de arrecadação da Campanha do Ouro, recebendo aliança por aliança ' +
        'de quem tem pouco e joia por joia de quem tem muito. Não pode votar, não pode comandar ' +
        'tropa — mas a guerra também é sustentada pelo que passa pelas suas mãos.',
      icone: '/imagens/nove-de-julho-1932/papeis/mulher-da-campanha-do-ouro.jpg',
    },
    {
      slug: 'estudante-voluntario-mmdc',
      nome: 'Estudante voluntário do MMDC',
      bloco: 'popular',
      peso: 1,
      cota: 6,
      perguntaGuia: 'Morrer pela Constituição é a mesma coisa que morrer pela elite que está usando essa bandeira?',
      contexto:
        'Um colega seu está entre os nomes que viraram sigla. Você se alistou como voluntário assim ' +
        'que pôde — mas quase ninguém no comando parece ter a sua idade, nem o seu motivo.',
      icone: '/imagens/nove-de-julho-1932/papeis/estudante-voluntario-mmdc.jpg',
    },
    {
      slug: 'soldado-forca-publica',
      nome: 'Soldado da Força Pública',
      bloco: 'popular',
      peso: 1,
      cota: 8,
      perguntaGuia: 'Estou defendendo a Constituição, ou só fazendo, de farda, o que sempre fiz?',
      contexto:
        'Antes da guerra, sua farda era rotina. Agora é linha de frente contra um exército maior e ' +
        'mais bem armado que o seu — e ninguém, nem no seu próprio comando, garante quanto tempo isso vai durar.',
      icone: '/imagens/nove-de-julho-1932/papeis/soldado-forca-publica.jpg',
    },
    {
      slug: 'operario-paulista',
      nome: 'Operário paulista',
      bloco: 'popular',
      peso: 1,
      cota: 5,
      perguntaGuia: 'É a minha guerra, ou a guerra de quem sempre teve pouco a dizer sobre a minha vida?',
      contexto:
        'Sua fábrica agora produz para o esforço de guerra, e todo mundo ao redor fala em "São Paulo ' +
        'unido". Mas você lembra que, antes de julho, os mesmos patrões que hoje pedem sacrifício ' +
        'nunca perguntaram sua opinião sobre nada.',
      icone: '/imagens/nove-de-julho-1932/papeis/operario-paulista.jpg',
    },
  ],

  rodadas: [
    {
      slug: 'os-quatro-nomes',
      titulo: 'Os quatro nomes',
      amplitude: 22,
      cena:
        'Praça da República, 23 de maio de 1932. Um confronto entre manifestantes e forças legais ' +
        'termina com quatro jovens mortos: Mário Martins de Almeida, Euclides Bueno Miragaia, ' +
        'Dráusio Marcondes de Souza e Antônio Camargo de Andrade — um quinto, Orlando de Oliveira ' +
        'Alvarenga, ferido no mesmo dia, morreria semanas depois. As iniciais dos quatro primeiros ' +
        'nomes vão dar nome a uma sigla que São Paulo inteiro vai aprender de cor: MMDC. Em semanas, ' +
        'o luto vira organização — e a organização vira plano de guerra.',
      efeitosFixos: { 'moral-de-combate': 8 },
      contexto:
        'A Frente Única Paulista — união do Partido Democrático com o Partido Republicano Paulista, ' +
        'formada em fevereiro daquele ano depois que o PD rompeu com Vargas — já vinha articulando a ' +
        'oposição ao governo provisório antes de qualquer morte na praça. O luto acelera um plano que ' +
        'já estava em marcha.',
      imagemSugerida: {
        descricao: 'Uma praça urbana de 1932 ao entardecer, vista de longe, com um pequeno grupo reunido em silêncio ao redor de um ponto marcado com flores, sem rostos em close-up.',
        arquivo: '/imagens/nove-de-julho-1932/os-quatro-nomes.jpg',
        onde: 'Ilustração gerada — cena genérica, não reprodução de fotografia específica do confronto.',
      },
      investigacao: {
        olhar: 'Um mural de papel colado às pressas num muro do centro, com os nomes dos quatro escritos à mão, letra por letra, por gente diferente.',
        fontes: [
          {
            slug: 'os-quatro-nomes-mmdc',
            tipo: 'ler',
            titulo: 'Os nomes que viraram sigla',
            papeis: ['governo-constitucionalista', 'estudante-voluntario-mmdc', 'jornalista-da-memoria'],
            trecho:
              'Em 23 de maio de 1932, um confronto na Praça da República deixa mortos Mário Martins de ' +
              'Almeida, Euclides Bueno Miragaia, Dráusio Marcondes de Souza e Antônio Camargo de Andrade ' +
              '— as iniciais dos quatro nomes dão origem à sigla MMDC, símbolo da mobilização que leva à ' +
              'revolta de julho.',
            autor: 'Historiografia consolidada sobre a Revolução Constitucionalista de 1932 (FGV CPDOC; Assembleia Legislativa de SP) — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
            destrancaOpcao: 'lutar-para-vingar',
          },
          {
            slug: 'frente-unica-paulista',
            tipo: 'ler',
            titulo: 'A Frente Única Paulista',
            papeis: ['governo-constitucionalista', 'fazendeiro-industrial-financiador'],
            trecho:
              'Formada em fevereiro de 1932 pela união do Partido Democrático com o Partido Republicano ' +
              'Paulista, a Frente Única Paulista articula a oposição paulista ao governo provisório de ' +
              'Vargas meses antes de qualquer confronto de rua — a revolta de julho não nasce só do luto ' +
              'de maio, nasce também de uma aliança política já em marcha.',
            autor: 'Historiografia consolidada sobre a Revolução Constitucionalista de 1932 (FGV CPDOC) — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'boato-apoio-nacional',
            tipo: 'ouvir',
            titulo: '"Minas e o Rio Grande do Sul vão se juntar a nós"',
            papeis: ['estudante-voluntario-mmdc', 'soldado-forca-publica', 'operario-paulista'],
            trecho: 'Corre entre os voluntários que, assim que a revolta começar, Minas Gerais e o Rio Grande do Sul vão se somar a São Paulo contra Vargas.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho:
              'Boato otimista. Nem Minas Gerais nem o Rio Grande do Sul aderem à revolta como se esperava ' +
              '— São Paulo enfrenta sozinho quase noventa dias de combate contra o governo federal.',
          },
        ],
      },
      opcoesPorPapel: {
        'governo-constitucionalista': [
          {
            slug: 'declarar-guerra-legalidade',
            texto: 'Declarar a revolta em nome da legalidade e da Constituição',
            deltas: { 'moral-de-combate': 10, 'unidade-paulista': 6 },
            consequencia: 'O discurso oficial fala só em Constituição — nenhuma palavra sobre os outros interesses que também estão em jogo. A turma inteira ouve a mesma versão.',
          },
          {
            slug: 'negociar-mais-tempo',
            texto: 'Tentar mais uma rodada de negociação com Vargas antes de pegar em armas',
            deltas: { 'moral-de-combate': -6, 'recursos-de-guerra': 4 },
            consequencia: 'Ganhar tempo custa moral entre quem já está pronto para lutar — e o tempo ganho não muda o que Vargas está disposto a oferecer.',
          },
        ],
        'fazendeiro-industrial-financiador': [
          {
            slug: 'financiar-guerra-imediato',
            texto: 'Comprometer recursos próprios imediatamente com o esforço de guerra',
            deltas: { 'recursos-de-guerra': 12, 'unidade-paulista': 4 },
            consequencia: 'Seu dinheiro entra rápido no esforço de guerra — e rápido também entra o cálculo de quanto disso você vai cobrar depois, se São Paulo vencer.',
          },
          {
            slug: 'esperar-ver-rumo',
            texto: 'Esperar para ver que rumo a revolta toma antes de comprometer capital',
            deltas: { 'recursos-de-guerra': -4 },
            consequencia: 'Você não arrisca nada ainda — e adia uma decisão que, mais cedo ou mais tarde, todo mundo vai saber que você adiou.',
          },
        ],
        'jornalista-da-memoria': [
          {
            slug: 'noticiar-mmdc-heroi',
            texto: 'Noticiar os quatro estudantes como mártires da causa constitucionalista',
            deltas: { 'moral-de-combate': 8, 'memoria-oficial': 4 },
            consequencia: 'A palavra "mártir" aparece impressa antes mesmo do primeiro tiro da guerra que está por vir. A história começa a ser escrita antes de o primeiro capítulo terminar.',
          },
          {
            slug: 'investigar-confronto',
            texto: 'Investigar com cuidado as circunstâncias exatas do confronto na praça',
            deltas: { 'memoria-critica': 6 },
            consequencia: 'Sua reportagem detalha o que aconteceu, sem atalho para o mito — material que vai valer mais para quem quiser entender 1932 daqui a cem anos do que para quem quer mobilizar gente amanhã de manhã.',
          },
        ],
        'mulher-da-campanha-do-ouro': [
          {
            slug: 'organizar-velorio-publico',
            texto: 'Ajudar a organizar o velório público dos quatro estudantes',
            deltas: { 'unidade-paulista': 8, 'moral-de-combate': 6 },
            consequencia: 'Milhares acompanham o cortejo. É o primeiro momento em que "São Paulo" parece, de fato, uma coisa só — mesmo que só por um dia.',
          },
          {
            slug: 'manter-rotina',
            texto: 'Manter a rotina, esperando para ver no que isso vai dar',
            deltas: { 'unidade-paulista': -2 },
            consequencia: 'Você não participa do luto público. Quando a guerra chegar, poucos dias depois, vai parecer que chegou de repente — para você, chegou.',
          },
        ],
        'estudante-voluntario-mmdc': [
          {
            slug: 'alistar-mmdc',
            texto: 'Alistar-se no MMDC assim que a sigla é criada',
            deltas: { 'moral-de-combate': 6 },
            consequencia: 'Você assina a ficha de voluntário antes mesmo de saber, de verdade, o que vai ser pedido de você.',
          },
          {
            slug: 'lutar-para-vingar',
            texto: 'Jurar publicamente vingar os quatro nomes em combate',
            deltas: { 'moral-de-combate': 12, 'unidade-paulista': -2 },
            consequencia: 'Sua promessa pública vira frase repetida por outros voluntários — um motivo pessoal virando bandeira coletiva, com tudo que isso simplifica.',
          },
          {
            slug: 'esperar-convocacao-formal',
            texto: 'Esperar uma convocação formal antes de se apresentar',
            deltas: { 'moral-de-combate': -4 },
            consequencia: 'Você não é o primeiro a chegar. Quando finalmente se apresenta, o MMDC já tem fila.',
          },
        ],
        'soldado-forca-publica': [
          {
            slug: 'preparar-tropa',
            texto: 'Preparar a tropa e o armamento disponível para o que vier',
            deltas: { 'recursos-de-guerra': -2, 'moral-de-combate': 6 },
            consequencia: 'Você confere o que tem — nem de longe o suficiente para uma guerra longa, mas é o que existe.',
          },
          {
            slug: 'questionar-prontidao',
            texto: 'Questionar abertamente se a Força Pública está pronta para uma guerra de verdade',
            deltas: { 'moral-de-combate': -6 },
            consequencia: 'Sua dúvida, dita em voz alta, não muda a ordem que vai vir de qualquer jeito — só muda quem, ao seu redor, começa a duvidar também.',
          },
        ],
        'operario-paulista': [
          {
            slug: 'aderir-luto-coletivo',
            texto: 'Aderir ao luto coletivo, mesmo sem saber ainda o que vem depois',
            deltas: { 'unidade-paulista': 6 },
            consequencia: 'Você participa do luto por gente que talvez nunca tivesse cruzado com você numa fábrica. É a primeira vez que "todo mundo" parece incluir você também.',
          },
          {
            slug: 'desconfiar-motivos',
            texto: 'Desconfiar em voz baixa dos motivos de quem está organizando tudo isso',
            deltas: { 'unidade-paulista': -6, 'memoria-critica': 4 },
            consequencia: 'Sua desconfiança não muda o rumo dos acontecimentos — mas é o tipo de coisa que, anos depois, alguém vai perguntar por que ninguém registrou.',
          },
        ],
      },
    },

    {
      slug: 'nove-de-julho',
      titulo: '9 de julho',
      amplitude: 24,
      cena:
        '9 de julho de 1932. São Paulo pega em armas contra o Governo Provisório de Getúlio Vargas. ' +
        'No dia seguinte, no Pátio do Colégio, o povo e as tropas aclamam o interventor Pedro de ' +
        'Toledo — nomeado por Vargas menos de um ano antes — como governador do Estado em guerra ' +
        'contra quem o nomeou.',
      efeitosFixos: { 'recursos-de-guerra': -6 },
      contexto:
        'A ironia não passa despercebida em nenhuma faixa da sociedade paulista: o mesmo homem que ' +
        'Vargas escolheu para pacificar São Paulo é aclamado, em menos de um ano, para liderar São ' +
        'Paulo contra Vargas.',
      imagemSugerida: {
        descricao: 'Uma multidão numa praça histórica do centro de São Paulo, vista de longe, bandeiras genéricas tremulando, sem rostos em destaque.',
        arquivo: '/imagens/nove-de-julho-1932/nove-de-julho.jpg',
        onde: 'Ilustração gerada — cena genérica, não reprodução de fotografia específica do Pátio do Colégio.',
      },
      investigacao: {
        olhar: 'Uma coluna de caminhões e carros particulares requisitados, pintados às pressas com as cores do Estado, enfileirados numa avenida.',
        fontes: [
          {
            slug: 'toledo-aclamado-governador',
            tipo: 'ler',
            titulo: 'O interventor que virou governador em guerra',
            papeis: ['governo-constitucionalista', 'jornalista-da-memoria'],
            trecho:
              'Em 10 de julho de 1932, no Pátio do Colégio, o povo e as tropas aclamam o interventor ' +
              'Pedro de Toledo como governador do Estado — o mesmo interventor que o governo de Vargas ' +
              'havia nomeado para São Paulo menos de um ano antes.',
            autor: 'Historiografia consolidada sobre a Revolução Constitucionalista de 1932 (FGV CPDOC) — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'boato-vargas-recuar',
            tipo: 'ouvir',
            titulo: '"Vargas vai recuar assim que ver São Paulo armado"',
            papeis: ['fazendeiro-industrial-financiador', 'mulher-da-campanha-do-ouro'],
            trecho: 'Circula entre a elite paulistana que Vargas, temendo uma guerra prolongada, vai negociar e ceder assim que perceber a determinação de São Paulo.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho: 'Boato equivocado. Vargas não recua diante da mobilização paulista — o conflito se estende por quase três meses de combate real.',
          },
        ],
      },
      opcoesPorPapel: {
        'governo-constitucionalista': [
          {
            slug: 'assumir-governo-guerra',
            texto: 'Assumir publicamente o comando do Estado em guerra',
            deltas: { 'unidade-paulista': 10, 'moral-de-combate': 6 },
            consequencia: 'Você aceita o papel que a multidão te oferece — e com ele, a responsabilidade por cada vida que essa guerra ainda vai custar.',
          },
          {
            slug: 'buscar-apoio-outros-estados',
            texto: 'Enviar emissários pedindo apoio a Minas Gerais e ao Rio Grande do Sul',
            deltas: { 'recursos-de-guerra': -4 },
            consequencia: 'Os emissários partem com um pedido que, você não sabe ainda, não vai ser atendido como todo mundo espera.',
          },
        ],
        'fazendeiro-industrial-financiador': [
          {
            slug: 'converter-fabricas-guerra',
            texto: 'Converter parte da produção industrial para o esforço de guerra',
            deltas: { 'recursos-de-guerra': 10, 'moral-de-combate': 4 },
            consequencia: 'Máquinas que faziam tecido ou ferramenta agora fazem parte do que uma guerra precisa — uma reconversão rápida, paga por quem tem fábrica para reconverter.',
          },
          {
            slug: 'proteger-patrimonio',
            texto: 'Priorizar proteger o próprio patrimônio antes de comprometer mais recursos',
            deltas: { 'recursos-de-guerra': -6, 'unidade-paulista': -4 },
            consequencia: 'Você recua um passo bem na hora em que todo mundo ao redor está dando um passo à frente. Poucos comentam em voz alta — mas notam.',
          },
        ],
        'jornalista-da-memoria': [
          {
            slug: 'cobrir-aclamacao-epica',
            texto: 'Cobrir a aclamação de Pedro de Toledo em tom épico, "o povo em armas"',
            deltas: { 'moral-de-combate': 8, 'memoria-oficial': 6 },
            consequencia: 'Sua manchete de amanhã vai ser citada em livros escolares décadas depois — nem sempre pelos motivos que você imaginava ao escrevê-la.',
          },
          {
            slug: 'registrar-contradicao-toledo',
            texto: 'Registrar a contradição de Vargas ver seu próprio nomeado virar líder rebelde',
            deltas: { 'memoria-critica': 8 },
            consequencia: 'Sua reportagem aponta uma ironia que a versão heroica prefere não destacar — um governo em guerra contra o homem que ele mesmo escolheu.',
          },
        ],
        'mulher-da-campanha-do-ouro': [
          {
            slug: 'converter-posto-apoio',
            texto: 'Converter o posto de arrecadação num centro de apoio às famílias de voluntários',
            deltas: { 'unidade-paulista': 8 },
            consequencia: 'Seu posto vira, do dia para a noite, um lugar onde famílias assustadas encontram informação e companhia — não estava nos seus planos originais, mas passa a ser sua rotina.',
          },
          {
            slug: 'aguardar-orientacao',
            texto: 'Aguardar orientação oficial antes de mudar qualquer coisa',
            deltas: {},
            consequencia: 'Você segue fazendo exatamente o que fazia ontem, enquanto a cidade ao redor muda de figura em poucas horas.',
          },
        ],
        'estudante-voluntario-mmdc': [
          {
            slug: 'apresentar-front',
            texto: 'Apresentar-se para ser enviado ao front assim que a guerra é declarada',
            deltas: { 'moral-de-combate': 8 },
            consequencia: 'Você entra na fila de recrutamento no primeiro dia — ao lado de gente que, como você, nunca disparou uma arma antes.',
          },
          {
            slug: 'organizar-retaguarda',
            texto: 'Optar por organizar a retaguarda — transporte, suprimento, comunicação',
            deltas: { 'recursos-de-guerra': 4 },
            consequencia: 'Você não vai para a linha de frente — mas sem gente cuidando da retaguarda, não existe linha de frente que aguente uma semana.',
          },
        ],
        'soldado-forca-publica': [
          {
            slug: 'aceitar-comando-imediato',
            texto: 'Aceitar seguir para o front sob o novo comando estadual',
            deltas: { 'moral-de-combate': 6, 'avanco-legalista': -2 },
            consequencia: 'Você troca farda de rotina por farda de guerra na mesma semana — sem tempo de treino extra para a diferença entre as duas coisas.',
          },
          {
            slug: 'exigir-mais-armamento',
            texto: 'Exigir mais armamento antes de aceitar seguir para o front',
            deltas: { 'recursos-de-guerra': -4, 'moral-de-combate': -2 },
            consequencia: 'Seu pedido é ouvido, mas não resolvido — a Força Pública vai para o combate com o que tem, não com o que precisaria ter.',
          },
        ],
        'operario-paulista': [
          {
            slug: 'aceitar-conversao-fabrica',
            texto: 'Aceitar trabalhar turnos extras na fábrica convertida para o esforço de guerra',
            deltas: { 'recursos-de-guerra': 6, 'unidade-paulista': 4 },
            consequencia: 'Você passa a fazer, sem escolha real, parte do que a guerra vai precisar — o mesmo patrão que nunca perguntou sua opinião agora pede sua hora extra.',
          },
          {
            slug: 'questionar-quem-decide',
            texto: 'Perguntar em voz alta quem decidiu que essa era a guerra de todo mundo',
            deltas: { 'unidade-paulista': -6, 'memoria-critica': 6 },
            consequencia: 'Sua pergunta incomoda mais gente do que responde — mas fica registrada por quem estava perto o suficiente para ouvir.',
          },
        ],
      },
    },

    {
      slug: 'ouro-para-sao-paulo',
      titulo: 'Ouro para São Paulo',
      amplitude: 22,
      cena:
        'Com a guerra em curso, a Associação Comercial de São Paulo lança a Campanha do Ouro: ' +
        'alianças de casamento de quem tem pouco, joias com pedras preciosas de quem tem muito, ' +
        'tudo vira munição, uniforme e comida para o front. Fábricas inteiras trocam parte da ' +
        'produção normal pelo esforço de guerra.',
      contexto:
        'Quem doa recebe um certificado — ou um anel de metal comum, gravado com a frase "Doei ouro ' +
        'para o bem de São Paulo" — o mesmo metal comum no lugar do ouro entregue, um símbolo que ' +
        'muita gente vai guardar pelo resto da vida, ganhe ou perca a guerra.',
      imagemSugerida: {
        descricao: 'Um pequeno balcão de arrecadação de 1932, com alianças, correntes e broches sobre um pano, uma balança de precisão ao lado, sem rostos em destaque.',
        arquivo: '/imagens/nove-de-julho-1932/ouro-para-sao-paulo.jpg',
        onde: 'Ilustração gerada — cena genérica representando a Campanha do Ouro, não reprodução de fotografia específica.',
      },
      investigacao: {
        olhar: 'Uma caixa de madeira já pesada, cheia de anéis, correntes e broches de tamanhos e valores muito diferentes, todos misturados.',
        fontes: [
          {
            slug: 'campanha-do-ouro-fonte',
            tipo: 'ler',
            titulo: 'A Campanha do Ouro para o Bem de São Paulo',
            papeis: ['mulher-da-campanha-do-ouro', 'fazendeiro-industrial-financiador'],
            trecho:
              'Organizada pela Associação Comercial de São Paulo para financiar a guerra, a campanha ' +
              'recebe desde alianças de casamento de famílias modestas até joias valiosas de famílias ' +
              'ricas — quem doa recebe um certificado ou um anel de metal comum gravado com a frase ' +
              '"Doei ouro para o bem de São Paulo".',
            autor: 'Historiografia consolidada sobre a Campanha do Ouro de 1932 — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'fabricas-producao-guerra',
            tipo: 'ler',
            titulo: 'São Paulo em esforço de guerra',
            papeis: ['operario-paulista', 'soldado-forca-publica'],
            trecho:
              'Indústrias paulistas reorganizam parte da produção para atender às necessidades da ' +
              'guerra — de uniformes a equipamentos —, num esforço de mobilização industrial sem ' +
              'precedentes recentes no Estado.',
            autor: 'Historiografia consolidada sobre a Revolução Constitucionalista de 1932 (FGV CPDOC) — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'boato-anel-vale-fortuna',
            tipo: 'ouvir',
            titulo: '"Quem doar vai ser recompensado em dobro depois da vitória"',
            papeis: ['operario-paulista', 'estudante-voluntario-mmdc'],
            trecho: 'Corre a notícia de que o governo do Estado vai devolver, em dinheiro e em dobro, o valor de tudo que for doado à Campanha do Ouro, assim que a guerra terminar.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho: 'Boato falso. Não existiu promessa oficial de devolução em dobro — o que sobra do dinheiro arrecadado, ao fim da guerra, é doado à Santa Casa de Misericórdia, não devolvido a quem doou.',
          },
        ],
      },
      opcoesPorPapel: {
        'mulher-da-campanha-do-ouro': [
          {
            slug: 'expandir-postos-arrecadacao',
            texto: 'Expandir o número de postos de arrecadação pelos bairros da cidade',
            deltas: { 'recursos-de-guerra': 10, 'unidade-paulista': 4 },
            consequencia: 'Mais bairros passam a ter onde doar — e mais gente humilde, sem ser convidada por ninguém importante, aparece de aliança na mão.',
          },
          {
            slug: 'priorizar-doacoes-grandes',
            texto: 'Concentrar esforços em conseguir doações grandes de famílias ricas',
            deltas: { 'recursos-de-guerra': 8, 'unidade-paulista': -2 },
            consequencia: 'O valor arrecadado sobe rápido — e a campanha começa a parecer, cada vez mais, coisa de gente que já tinha muito para dar.',
          },
        ],
        'fazendeiro-industrial-financiador': [
          {
            slug: 'doar-publicamente-grande-soma',
            texto: 'Doar publicamente uma soma grande, com direito a nota no jornal',
            deltas: { 'recursos-de-guerra': 10, 'memoria-oficial': 4 },
            consequencia: 'Seu nome sai ao lado do valor doado. O gesto financia a guerra — e também financia a lembrança de que foi você quem financiou.',
          },
          {
            slug: 'doar-discretamente',
            texto: 'Doar sem alarde, sem nota no jornal',
            deltas: { 'recursos-de-guerra': 6 },
            consequencia: 'O dinheiro chega do mesmo jeito. Só que, dessa vez, ninguém vai lembrar de agradecer a você por nome.',
          },
        ],
        'governo-constitucionalista': [
          {
            slug: 'oficializar-campanha-estado',
            texto: 'Dar apoio oficial do Estado à Campanha do Ouro',
            deltas: { 'recursos-de-guerra': 8, 'unidade-paulista': 6 },
            consequencia: 'O selo oficial do governo na campanha atrai mais doadores — e também deixa mais claro que essa "doação voluntária" tem, por trás, uma pressão de Estado em guerra.',
          },
          {
            slug: 'priorizar-requisicao-industrial',
            texto: 'Priorizar requisitar diretamente a produção industrial, em vez de depender de doação',
            deltas: { 'recursos-de-guerra': 6, 'unidade-paulista': -4 },
            consequencia: 'Requisitar é mais rápido que esperar doação — e mais fácil de sentir como imposição por quem tem a fábrica requisitada.',
          },
        ],
        'jornalista-da-memoria': [
          {
            slug: 'noticiar-unidade-todas-classes',
            texto: 'Noticiar a campanha como prova de que "todas as classes" se uniram pela causa',
            deltas: { 'unidade-paulista': 6, 'memoria-oficial': 4 },
            consequencia: 'Sua reportagem mostra lado a lado a aliança simples e a joia valiosa — uma imagem poderosa de unidade, que não conta quanto cada doação pesou no bolso de quem doou.',
          },
          {
            slug: 'comparar-peso-doacoes',
            texto: 'Comparar o peso real de cada doação para quem a fez, rico ou pobre',
            deltas: { 'memoria-critica': 8 },
            consequencia: 'Sua reportagem calcula que uma aliança de casamento pesa, para quem só tinha aquilo, muito mais do que um colar de brilhante pesa para quem tinha uma dúzia deles.',
          },
        ],
        'estudante-voluntario-mmdc': [
          {
            slug: 'doar-proprio-anel',
            texto: 'Doar o próprio anel de formatura à campanha',
            deltas: { 'moral-de-combate': 4, 'unidade-paulista': 4 },
            consequencia: 'Seu anel de formatura vira parte de um uniforme ou de uma bala em algum lugar do front. Você nunca vai saber onde exatamente.',
          },
          {
            slug: 'ajudar-organizar-campanha',
            texto: 'Ajudar a organizar a divulgação da campanha entre outros estudantes',
            deltas: { 'recursos-de-guerra': 4 },
            consequencia: 'Você convence outros colegas a doar o que podem. É um trabalho sem glória de linha de frente — e sem ele, a campanha arrecadaria bem menos.',
          },
        ],
        'soldado-forca-publica': [
          {
            slug: 'agradecer-publicamente-doadores',
            texto: 'Participar de um ato público agradecendo aos doadores da campanha',
            deltas: { 'moral-de-combate': 4, 'unidade-paulista': 4 },
            consequencia: 'Ver de perto quem doou o próprio anel de casamento pesa mais, para você, do que qualquer discurso oficial sobre patriotismo.',
          },
          {
            slug: 'focar-apenas-combate',
            texto: 'Manter o foco só no treino e no combate, sem tempo para atos públicos',
            deltas: { 'moral-de-combate': 2 },
            consequencia: 'Você não participa dos atos de agradecimento — para você, cada hora fora do treino é uma hora a menos de preparo para o que vem.',
          },
        ],
        'operario-paulista': [
          {
            slug: 'doar-mesmo-com-pouco',
            texto: 'Doar a própria aliança, mesmo tendo pouco além dela',
            deltas: { 'unidade-paulista': 6, 'moral-de-combate': 2 },
            consequencia: 'Você entrega a única joia que tem. Ao seu lado, na mesma fila, alguém entrega uma joia que nunca vai fazer falta de verdade.',
          },
          {
            slug: 'recusar-doar',
            texto: 'Recusar doar, sem esconder que discorda de quem está pedindo sacrifício igual de gente desigual',
            deltas: { 'unidade-paulista': -8, 'memoria-critica': 6 },
            consequencia: 'Sua recusa não muda o resultado da campanha — mas deixa claro, para quem estiver prestando atenção, que "sacrifício de todos" nem sempre significa a mesma coisa para todos.',
          },
        ],
      },
    },

    {
      slug: 'o-cerco-se-fecha',
      titulo: 'O cerco se fecha',
      amplitude: 26,
      cena:
        'Semanas de combate no Vale do Paraíba e no sul de Minas mostram o que os números já diziam ' +
        'desde o início: o Governo Provisório tem mais soldados, mais armas e mais tempo do que São ' +
        'Paulo consegue sustentar sozinho. O saldo de mortos sobe — oficialmente 934, segundo ' +
        'estimativas não oficiais talvez o dobro disso.',
      efeitosFixos: { 'avanco-legalista': 20 },
      contexto:
        'Nenhuma decisão de nenhum papel nesta rodada muda a disparidade de forças no campo de ' +
        'batalha — ela já existia antes da primeira tropa se mover, e vai continuar existindo até o ' +
        'último dia de combate.',
      imagemSugerida: {
        descricao: 'Uma paisagem rural do interior paulista ou mineiro vista de longe, trincheiras improvisadas na terra, sem figuras humanas em close-up, luz de fim de tarde.',
        arquivo: '/imagens/nove-de-julho-1932/o-cerco-se-fecha.jpg',
        onde: 'Ilustração gerada — cena genérica de frente de combate, não reprodução de fotografia específica.',
      },
      investigacao: {
        olhar: 'Uma lista de baixas afixada num quartel improvisado, mais comprida a cada semana, com espaço em branco deixado de propósito para os próximos nomes.',
        fontes: [
          {
            slug: 'saldo-de-mortos-1932',
            tipo: 'ler',
            titulo: 'O saldo da guerra',
            papeis: ['governo-constitucionalista', 'soldado-forca-publica', 'jornalista-da-memoria'],
            trecho:
              'O saldo oficial da Revolução Constitucionalista é de 934 mortos; estimativas não ' +
              'oficiais chegam a mais que o dobro disso. A disparidade militar entre as forças ' +
              'paulistas e as tropas do governo provisório é evidente desde as primeiras semanas de combate.',
            autor: 'Historiografia consolidada sobre a Revolução Constitucionalista de 1932 — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado (estimativas variam entre historiadores).',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'evento-avanco-federal',
            tipo: 'ouvir',
            titulo: '"Dizem que o comando já sabe que vai perder"',
            papeis: ['estudante-voluntario-mmdc', 'operario-paulista'],
            trecho: 'Rumores de que o alto comando paulista já teria decidido, em segredo, aceitar a derrota — e que os combates seguem só para "salvar as aparências".',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho: 'Não há evidência de uma decisão secreta de desistir tomada nessa altura — o comando paulista resiste até outubro, mesmo com a disparidade militar já evidente.',
          },
        ],
      },
      opcoesPorPapel: {
        'governo-constitucionalista': [
          {
            slug: 'manter-resistencia',
            texto: 'Manter a resistência, mesmo com a disparidade militar evidente',
            deltas: { 'moral-de-combate': 4, 'avanco-legalista': -4 },
            consequencia: 'Você decide continuar — e cada semana a mais de guerra é, também, uma semana a mais de mortos que nenhum discurso vai trazer de volta.',
          },
          {
            slug: 'sondar-termos-rendicao',
            texto: 'Sondar discretamente possíveis termos de rendição',
            deltas: { 'moral-de-combate': -8, 'unidade-paulista': -4 },
            consequencia: 'A sondagem é discreta — mas notícia dessas raramente fica só entre quatro paredes por muito tempo.',
          },
        ],
        'fazendeiro-industrial-financiador': [
          {
            slug: 'sustentar-financiamento',
            texto: 'Sustentar o financiamento, mesmo vendo o cerco se fechar',
            deltas: { 'recursos-de-guerra': 6, 'moral-de-combate': 2 },
            consequencia: 'Você segue bancando uma guerra que cada vez mais parece perdida — um investimento que só vai valer alguma coisa se o resultado político compensar a derrota militar.',
          },
          {
            slug: 'reduzir-financiamento',
            texto: 'Começar a reduzir o financiamento, prevendo a derrota',
            deltas: { 'recursos-de-guerra': -8, 'unidade-paulista': -4 },
            consequencia: 'Menos dinheiro chega à linha de frente exatamente quando ela mais precisa — uma decisão fria, calculada bem longe de qualquer trincheira.',
          },
        ],
        'jornalista-da-memoria': [
          {
            slug: 'omitir-disparidade',
            texto: 'Manter o tom de confiança na vitória, omitindo a disparidade militar real',
            deltas: { 'moral-de-combate': 6, 'memoria-oficial': 4 },
            consequencia: 'O jornal de amanhã ainda fala em vitória próxima. Quem está no front sabe que a distância entre o que se escreve e o que se vive nunca foi tão grande.',
          },
          {
            slug: 'noticiar-numeros-reais',
            texto: 'Noticiar os números reais da disparidade militar e do saldo de mortos',
            deltas: { 'moral-de-combate': -6, 'memoria-critica': 8 },
            consequencia: 'Sua reportagem é a primeira a admitir, em letra de forma, que os números não favorecem São Paulo — um golpe na moral que também é, para a história, um registro mais honesto.',
          },
        ],
        'mulher-da-campanha-do-ouro': [
          {
            slug: 'organizar-apoio-feridos',
            texto: 'Reorganizar o posto de arrecadação para apoiar hospitais de feridos de guerra',
            deltas: { 'unidade-paulista': 6, 'recursos-de-guerra': -2 },
            consequencia: 'O ouro dá lugar a ataduras e leitos. A guerra que parecia distante, semanas atrás, agora chega em forma de gente ferida todo santo dia.',
          },
          {
            slug: 'manter-arrecadacao',
            texto: 'Manter o foco só na arrecadação, deixando o apoio a feridos para outra estrutura',
            deltas: { 'recursos-de-guerra': 4 },
            consequencia: 'A arrecadação continua rendendo — enquanto outra estrutura, menos preparada, tenta dar conta sozinha do número crescente de feridos.',
          },
        ],
        'estudante-voluntario-mmdc': [
          {
            slug: 'avancar-linha-frente',
            texto: 'Aceitar ser transferido para um trecho mais exposto da linha de frente',
            deltas: { 'moral-de-combate': 6, 'avanco-legalista': -2 },
            consequencia: 'Você aceita um posto que, semanas atrás, pareceria loucura demais até para quem jurou vingar os quatro nomes.',
            evento: {
              imagem: '/imagens/nove-de-julho-1932/eventos/ferido-em-combate.jpg',
              texto:
                'Num confronto no Vale do Paraíba, uma esquírola de granada te atinge de raspão. Não é ' +
                'grave o bastante para te tirar da guerra — mas é grave o bastante para te fazer olhar, ' +
                'pela primeira vez, para o que "linha de frente" realmente significa.',
              reacoes: [
                { slug: 'voltar-combate', texto: 'Voltar ao combate assim que possível', resultado: 'Você volta mais cedo do que deveria — o medo que sentiu vira, para você, motivo a mais para não sair da luta agora.' },
                { slug: 'aceitar-recuo', texto: 'Aceitar um posto de recuo enquanto se recupera', resultado: 'Você aceita um posto mais seguro por um tempo — uma decisão sensata, que ninguém no comando questiona em voz alta.' },
              ],
            },
          },
          {
            slug: 'manter-posto-retaguarda',
            texto: 'Manter-se no posto de retaguarda, sem se voluntariar para mais risco',
            deltas: { 'recursos-de-guerra': 2 },
            consequencia: 'Você continua fazendo um trabalho essencial e menos visível — nem todo mundo que serve numa guerra aparece na foto do combate.',
          },
        ],
        'soldado-forca-publica': [
          {
            slug: 'resistir-posicao',
            texto: 'Resistir na posição, mesmo sob pressão crescente do avanço legalista',
            deltas: { 'avanco-legalista': -6, 'moral-de-combate': -2 },
            consequencia: 'Sua unidade segura a posição um pouco mais — a um custo que o boletim oficial de amanhã vai resumir numa única linha.',
          },
          {
            slug: 'recuar-posicao-organizada',
            texto: 'Recuar de forma organizada para uma posição mais defensável',
            deltas: { 'avanco-legalista': 4, 'moral-de-combate': -4 },
            consequencia: 'O recuo salva vidas na sua unidade — e cede terreno que ninguém, depois, vai conseguir retomar.',
          },
        ],
        'operario-paulista': [
          {
            slug: 'manter-producao-guerra',
            texto: 'Manter o ritmo de produção para a guerra, mesmo vendo os números piorarem',
            deltas: { 'recursos-de-guerra': 6, 'unidade-paulista': 2 },
            consequencia: 'Você continua trabalhando dobrado para uma causa cujo desfecho já parece cada vez menos favorável.',
          },
          {
            slug: 'questionar-continuidade-guerra',
            texto: 'Questionar abertamente se vale a pena continuar a guerra',
            deltas: { 'unidade-paulista': -8, 'memoria-critica': 6 },
            consequencia: 'Sua pergunta é vista por uns como bom senso e por outros como falta de patriotismo — os dois lados, curiosamente, nunca perguntam o que você ganha ou perde com qualquer desfecho.',
          },
        ],
      },
    },

    {
      slug: 'a-rendicao',
      titulo: 'A rendição',
      amplitude: 24,
      cena:
        '1º de outubro de 1932, depois de 87 dias de combate, o governo de Pedro de Toledo assina a ' +
        'rendição. São Paulo perdeu a guerra. Mas o 9 de julho, a partir de hoje, nunca mais vai ser ' +
        'só uma data — vai virar feriado estadual, e vai seguir sendo, até hoje.',
      efeitosFixos: { 'memoria-oficial': 60 },
      contexto:
        'O feriado nasce quase junto com a rendição — sinal de que a construção da memória do 9 de ' +
        'julho como vitória cívica começa antes mesmo de a poeira da derrota militar assentar.',
      imagemSugerida: {
        descricao: 'Uma bandeira sendo dobrada ao entardecer, num pátio de quartel vazio, sem figuras humanas em destaque, tom sóbrio.',
        arquivo: '/imagens/nove-de-julho-1932/a-rendicao.jpg',
        onde: 'Ilustração gerada — cena genérica representando o fim do conflito, não reprodução de fotografia específica.',
      },
      investigacao: {
        olhar: 'Um calendário de parede de 1933, com 9 de julho já marcado a lápis vermelho, um ano antes de virar lei.',
        fontes: [
          {
            slug: 'rendicao-outubro-1932',
            tipo: 'ler',
            titulo: 'A rendição de 1º de outubro',
            papeis: ['governo-constitucionalista', 'soldado-forca-publica', 'jornalista-da-memoria'],
            trecho:
              'Depois de 87 dias de combate, o governo constitucionalista, chefiado por Pedro de ' +
              'Toledo, assina a rendição em 1º de outubro de 1932. O 9 de julho passa a ser celebrado ' +
              'como feriado estadual em São Paulo, tradição que segue até os dias de hoje.',
            autor: 'Historiografia consolidada sobre a Revolução Constitucionalista de 1932 (FGV CPDOC; Assembleia Legislativa de SP) — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'consequencias-politicas-1933-34',
            tipo: 'ler',
            titulo: 'O que a derrota militar não impediu',
            papeis: ['governo-constitucionalista', 'fazendeiro-industrial-financiador', 'jornalista-da-memoria'],
            trecho:
              'Menos de um ano depois da rendição, Vargas reativa a comissão de elaboração ' +
              'constitucional; em maio de 1933, São Paulo elege em bloco a Chapa Única por São Paulo ' +
              'Unido para a Assembleia Constituinte; em agosto, o civil paulista Armando de Sales ' +
              'Oliveira assume o governo do Estado; em 1934, o Brasil promulga nova Constituição.',
            autor: 'Historiografia consolidada sobre a Revolução Constitucionalista de 1932 e seus desdobramentos (FGV CPDOC) — não é citação de um documento específico.',
            acervo: 'Fato histórico bem documentado.',
            natureza: 'documental',
            confiavel: true,
          },
          {
            slug: 'boato-anistia-total',
            tipo: 'ouvir',
            titulo: '"Ninguém vai pagar por nada depois da rendição"',
            papeis: ['estudante-voluntario-mmdc', 'operario-paulista'],
            trecho: 'Corre que a rendição vai incluir perdão total e imediato para todos os que pegaram em armas, sem qualquer consequência posterior.',
            natureza: 'recriada',
            confiavel: false,
            revelacaoNoFecho: 'Simplificação otimista. Os termos e as consequências pessoais da rendição variam caso a caso nos meses seguintes — não existe uma garantia única e automática de perdão total para todos.',
          },
        ],
      },
      opcoesPorPapel: {
        'governo-constitucionalista': [
          {
            slug: 'assinar-rendicao-honra',
            texto: 'Assinar a rendição publicamente, defendendo que a luta valeu a pena',
            deltas: { 'memoria-oficial': 6, 'unidade-paulista': 4 },
            consequencia: 'Seu discurso de rendição já começa a construir a versão que a data vai carregar dali para a frente: derrota militar, mas causa justa.',
          },
          {
            slug: 'reconhecer-fracasso-estrategico',
            texto: 'Reconhecer publicamente falhas estratégicas da condução da guerra',
            deltas: { 'memoria-critica': 8, 'unidade-paulista': -4 },
            consequencia: 'Reconhecer erro não é comum em discurso de fim de guerra — o gesto rende respeito de alguns e desconforto de outros, especialmente entre quem financiou a causa.',
          },
        ],
        'fazendeiro-industrial-financiador': [
          {
            slug: 'reposicionar-politicamente',
            texto: 'Já começar a se reposicionar politicamente para o cenário pós-guerra',
            deltas: { 'memoria-oficial': 4 },
            consequencia: 'Antes mesmo de a tinta da rendição secar, você já está calculando quem, no novo arranjo político, vai valer a pena procurar.',
          },
          {
            slug: 'lamentar-publicamente-perdas',
            texto: 'Lamentar publicamente as perdas humanas, sem falar em cálculo político',
            deltas: { 'unidade-paulista': 4 },
            consequencia: 'Seu discurso fala só em luto — o cálculo político, você guarda para depois, quando menos gente estiver prestando atenção.',
          },
        ],
        'jornalista-da-memoria': [
          {
            slug: 'consagrar-feriado-heroico',
            texto: 'Defender editorialmente que 9 de julho vire data cívica permanente',
            deltas: { 'memoria-oficial': 10 },
            consequencia: 'Seu editorial ajuda a construir o que, um ano depois, vira lei — uma data que vai sobreviver a gerações que nunca vão ter ouvido falar do seu nome.',
          },
          {
            slug: 'registrar-versoes-divergentes',
            texto: 'Registrar, lado a lado, as versões divergentes sobre os motivos reais da guerra',
            deltas: { 'memoria-critica': 10 },
            consequencia: 'Sua reportagem final não escolhe um lado só — o que, num momento em que todo mundo quer um herói ou um culpado, é uma escolha editorial rara.',
          },
        ],
        'mulher-da-campanha-do-ouro': [
          {
            slug: 'documentar-doadoras-anonimas',
            texto: 'Documentar os nomes de doadoras anônimas antes que se percam',
            deltas: { 'memoria-critica': 6 },
            consequencia: 'Você anota nomes que, sem esse gesto, desapareceriam de qualquer registro — mulheres que deram o que tinham e não iam aparecer em nenhuma estátua.',
          },
          {
            slug: 'celebrar-campanha-vitoriosa',
            texto: 'Celebrar publicamente o sucesso da arrecadação, independente do resultado da guerra',
            deltas: { 'memoria-oficial': 4 },
            consequencia: 'Você celebra o que a campanha conseguiu juntar — um sucesso real, mesmo que a causa para a qual foi juntado tenha perdido no campo de batalha.',
          },
        ],
        'estudante-voluntario-mmdc': [
          {
            slug: 'aceitar-desmobilizacao',
            texto: 'Aceitar a desmobilização, voltando à vida civil',
            deltas: { 'moral-de-combate': -2 },
            consequencia: 'Você tira a farda pela última vez sem saber ainda como vai ser voltar para uma sala de aula depois disso.',
          },
          {
            slug: 'cobrar-reconhecimento-mmdc',
            texto: 'Cobrar publicamente reconhecimento para os voluntários do MMDC',
            deltas: { 'memoria-oficial': 6, 'unidade-paulista': 2 },
            consequencia: 'Sua cobrança ajuda a garantir que os voluntários — não só os quatro nomes que começaram tudo — também tenham lugar na memória que está sendo construída agora.',
          },
        ],
        'soldado-forca-publica': [
          {
            slug: 'cumprir-ordem-rendicao',
            texto: 'Cumprir a ordem de rendição, mesmo discordando',
            deltas: { 'moral-de-combate': -4, 'unidade-paulista': 4 },
            consequencia: 'Você baixa as armas porque a farda manda — não porque concorda. A distinção fica só com você.',
          },
          {
            slug: 'questionar-decisao-render',
            texto: 'Questionar abertamente, entre companheiros, se valia a pena render-se ainda',
            deltas: { 'unidade-paulista': -6, 'memoria-critica': 4 },
            consequencia: 'Sua dúvida não muda a ordem — mas fica entre os companheiros de farda como um desconforto que a versão oficial da data não costuma mencionar.',
          },
        ],
        'operario-paulista': [
          {
            slug: 'retomar-rotina-fabrica',
            texto: 'Retomar a rotina normal da fábrica, sem esperar reconhecimento especial',
            deltas: { 'moral-de-combate': -2 },
            consequencia: 'A fábrica volta ao normal mais rápido para você do que para quem vai ganhar estátua ou nome de rua por causa dessa guerra.',
          },
          {
            slug: 'reivindicar-lugar-na-memoria',
            texto: 'Reivindicar que operários como você também sejam lembrados nessa história',
            deltas: { 'memoria-critica': 8, 'unidade-paulista': -2 },
            consequencia: 'Sua reivindicação não tem o mesmo alcance que um discurso de governo ou um editorial de jornal — mas é exatamente esse desequilíbrio que ela aponta.',
          },
        ],
      },
    },
  ],

  juri: {
    pergunta: 'A "unidade paulista" de 1932 foi real, ou uma narrativa construída depois, por quem tinha mais a ganhar contando a história desse jeito?',
    lados: [
      {
        nome: 'Foi real',
        fontesSlugs: ['os-quatro-nomes-mmdc', 'campanha-do-ouro-fonte', 'toledo-aclamado-governador'],
      },
      {
        nome: 'Foi construída depois',
        fontesSlugs: ['frente-unica-paulista', 'saldo-de-mortos-1932', 'consequencias-politicas-1933-34'],
      },
    ],
  },

  desfecho: {
    fixo:
      'São Paulo perde a guerra depois de 87 dias de combate, com um saldo oficial de 934 mortos — ' +
      'estimativas não oficiais chegam a mais que o dobro disso. Pedro de Toledo assina a rendição em ' +
      '1º de outubro de 1932. O 9 de julho vira, a partir daquele ano, feriado estadual em São Paulo ' +
      '— e segue sendo, até hoje.',
    variavel: ['unidade-final', 'memoria-predominante', 'quem-foi-lembrado'],
    textoFecho:
      'Militarmente, São Paulo perdeu tudo. Politicamente, conseguiu quase tudo que pedia: menos de ' +
      'um ano depois da rendição, Vargas reativa a comissão constitucional; em maio de 1933, São ' +
      'Paulo elege em bloco a Chapa Única por São Paulo Unido para a Assembleia Constituinte; em ' +
      'agosto, um civil paulista — Armando de Sales Oliveira — assume o governo do Estado; em 1934, o ' +
      'Brasil tem Constituição de novo. Nenhuma bala paulista garantiu isso — foi a derrota militar, ' +
      'processada por outra via, que abriu espaço para a vitória política vir depois. E ficou a ' +
      'memória: a de "São Paulo unido" que este jogo pediu para vocês questionarem, rodada a rodada, ' +
      'sem nunca entregar uma resposta pronta.',
    perguntasDebate: [
      'A barra de Unidade paulista da turma terminou alta ou baixa? O que isso diz sobre quem, de fato, "São Paulo" representava em 1932?',
      'A Memória oficial nasceu de um fato histórico que ninguém escolheu (a rendição, o feriado) — a Memória crítica, não. Por que uma virou lei e feriado, e a outra dependeu de escolha, rodada a rodada, para não desaparecer?',
      'São Paulo perdeu a guerra e, menos de dois anos depois, teve praticamente tudo que pedia. Isso muda a resposta de vocês para a pergunta do início desta simulação?',
    ],
    perguntasReflexao: [
      { nivel: 'Sua experiência', pergunta: 'No papel que você jogou, em algum momento sentiu que estava lutando por algo que não era exatamente a sua causa? Descreva a rodada em que isso ficou mais claro.' },
      { nivel: 'O conceito', pergunta: 'Uma "memória oficial" pode nascer de um fato real e ainda simplificar ou esconder outras verdades. Que outro exemplo disso você conhece, na história ou fora dela?' },
      { nivel: 'Além desta aula', pergunta: 'São Paulo perdeu no campo de batalha e venceu na política, anos depois. Você conhece algum outro caso — histórico ou atual — em que perder de um jeito abriu caminho para vencer de outro?' },
    ],
  },
}
