// Gera imagens (ícones de papel + cenas de rodada) via API de imagens do
// Gemini, para os 3 cenários. Uso:
//   node scripts/gerar-imagens.mjs [cenario-slug]
// Sem argumento, gera para todos os cenários com prompts definidos abaixo.
//
// Cenas de rodada evitam recriar o rosto/obra de uma pessoa ou charge real
// e específica (ex.: não "retrato do Leuenroth", não "a charge do Storni")
// — isso preservaria a distinção documental/recriada que o próprio jogo
// leva a sério. Em vez disso, ilustram o tipo de cena, de forma genérica.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import path from 'node:path'

const MODELO = 'gemini-3.1-flash-lite-image'
const ESTILO =
  'Editorial woodcut-style engraving illustration, black and white, high contrast, ' +
  'fine crosshatching linework, in the style of an early 20th century Brazilian ' +
  'newspaper illustration. No text, no watermark, no signature, no color.'

const ICONES_PAPEIS = {
  'a-terra-do-favor': {
    coronel:
      'Portrait of a wealthy 1920s Brazilian rural political boss (coronel): older man, wide hat, thick mustache, rustic suit, commanding stare.',
    'presidente-estado':
      'Portrait of a 1920s Brazilian state governor: formal urban suit, confident posture, calculating expression.',
    delegado:
      'Portrait of a 1920s Brazilian small-town police chief (delegado): period police uniform, stern expression.',
    professora:
      'Portrait of a 1920s Brazilian rural primary school teacher: simple modest dress, composed thoughtful expression.',
    'imprensa-oposicao':
      'Portrait of a 1920s Brazilian small opposition newspaper editor: plain suit, wire glasses, wary intelligent expression.',
    'trabalhador-rural':
      'Portrait of a 1920s Brazilian rural farm laborer: straw hat, simple worn work clothes, weathered resigned expression.',
  },
  'o-plano-que-nao-existia': {
    getulio:
      'Portrait of a 1930s Brazilian presidential palace aide: formal dark suit, composed calculating expression.',
    'oficial-aib':
      'Portrait of a 1930s Brazilian Integralist militia officer: green shirt uniform (AIB), stern ideological expression.',
    'oficial-general':
      'Portrait of a 1930s Brazilian army general: formal military uniform with insignia, severe authoritative expression.',
    'jornalista-grande-imprensa':
      'Portrait of a 1930s Brazilian mainstream newspaper journalist: suit and tie, pen in hand, alert expression.',
    'militante-anl':
      'Portrait of a 1930s Brazilian left-wing political organizer: plain shirt, determined earnest expression.',
    'funcionario-publico':
      'Portrait of a 1930s Brazilian career civil servant: modest suit, cautious nondescript expression.',
    'cidadao-comum':
      'Portrait of a 1930s Brazilian ordinary city resident reading a newspaper: everyday clothes, worried uncertain expression.',
  },
  'coroa-e-cofre': {
    // "conselho-coroa" é deliberadamente um conselheiro/ministro genérico,
    // NUNCA um retrato de Luís XIV — sem a peruca longa cacheada icônica
    // nem pose de "Rei Sol" associadas a ele. Ver comentário no topo de
    // cenarios/coroa-e-cofre.js.
    'conselho-coroa':
      'Portrait of a generic 17th century French royal court minister/advisor: dark formal coat, short wig, holding a sealed document, calculating composed expression. Not a king, not a specific historical figure — a generic court official.',
    'nobreza-espada':
      'Portrait of a 17th century French sword nobleman: formal court coat, ceremonial sword at hip, proud but slightly weary expression, no specific historical figure.',
    'alto-clero':
      'Portrait of a generic 17th century French Catholic high clergyman (bishop): formal ecclesiastical vestments, composed authoritative expression, no specific historical figure.',
    'burguesia-mercantil':
      'Portrait of a wealthy 17th century French merchant: fine but modest coat (no ceremonial sword, no nobility markers), calculating ambitious expression.',
    'mestres-artesaos':
      'Portrait of a 17th century French master craftsman: work apron over simple clothes, tools visible nearby, weathered skilled hands, steady confident expression.',
    'camponeses':
      'Portrait of a 17th century French peasant farmer: simple worn work clothes, weathered resigned expression, rural background.',
  },
  tawantinsuyu: {
    // Nenhum Sapa Inca nomeado — "conselho-imperial" é um cargo genérico,
    // igual "conselho-coroa" em coroa-e-cofre.js. Descrições focam em
    // vestimenta, objetos e função, não em traços étnicos — mesmo
    // cuidado já aplicado à Linha do tempo de povos originários.
    'conselho-imperial':
      'Portrait of a generic Inca noble administrator: fine geometric-patterned tunic, ceremonial headdress with feathers, holding a quipu, composed authoritative expression. Not a ruler, not a specific historical figure — a generic court official.',
    'curaca-local':
      'Portrait of a generic local Andean community leader (curaca): woven tunic of modest but distinct pattern, simple headband, watchful thoughtful expression.',
    'sacerdote-do-sol':
      'Portrait of a generic Inca sun-cult priest: ceremonial tunic with solar motifs, holding a ceremonial vessel, composed serene expression.',
    'artesao-textil':
      'Portrait of a generic Inca textile weaver: simple tunic, hands near a backstrap loom with visible geometric weaving, focused skilled expression.',
    'campones-do-ayllu':
      'Portrait of a generic Andean farmer from an ayllu community: plain woven work clothes, agricultural tool nearby, weathered steady expression.',
    'chasqui':
      'Portrait of a generic Inca relay messenger (chasqui): light tunic suited for running, a small carrying pouch, alert forward-looking expression, mountain path suggested behind.',
  },
  tenochtitlan: {
    // Nenhum Tlatoani nomeado. Descrições focam em vestimenta, objetos e
    // função. Sacrifício ritual é deliberadamente omitido em todo este
    // cenário (ver comentário no topo de cenarios/tenochtitlan.js).
    'conselho-tlatoani':
      'Portrait of a generic Aztec noble advisor: fine cotton cloak with geometric border pattern, feathered headpiece, composed authoritative expression. Not a ruler, not a specific historical figure — a generic court official.',
    pochteca:
      'Portrait of a generic Aztec long-distance merchant (pochteca): simple traveling cloak, a wooden staff, carrying a woven bag, alert watchful expression, jungle path suggested behind.',
    calpixque:
      'Portrait of a generic Aztec tribute collector (calpixque): fine tunic, holding a folded bark-paper record, composed measuring expression.',
    chinampera:
      'Portrait of a generic Aztec woman farmer working chinampas: simple woven clothing, holding agricultural tools, calm steady expression, water and reeds suggested behind.',
    'artesao-pena':
      'Portrait of a generic Aztec feather-work artisan: simple tunic, hands arranging colorful feathers into a pattern, focused skilled expression.',
    'povo-tributario':
      'Portrait of a generic tribute-paying provincial villager, distinct plain woven clothing (different pattern from Aztec nobility), watchful composed expression.',
  },
}

const IMAGENS_RODADAS = {
  'sao-paulo-1917': {
    'o-cortejo':
      'Aerial or distant view of an enormous crowd filling a São Paulo city street from sidewalk to sidewalk in 1917, no banners or uniforms visible, emphasis on the sheer scale of the crowd, funeral procession mood.',
    'comite-defesa-proletaria':
      'Generic scene: interior of a modest 1917 Brazilian anarchist worker-press print shop, typesetters working a manual press, papers scattered, intense atmosphere. No specific identifiable person.',
    'o-acordo':
      'Textile factory workers of both sexes walking back in through a factory gate after a strike settlement in 1917 São Paulo, neutral or tired expressions, no celebration atmosphere.',
  },
  'a-terra-do-favor': {
    'o-alistamento':
      'A line of rural Brazilian men in work clothes, some barefoot, waiting at an outdoor voter registration table in the 1920s, a hired overseer checking names off a list nearby.',
    'a-vespera':
      'A 1920s Brazilian rural village square at night, the eve of an election: a truck parked, a barbecue fire going, new shoes being handed out to rural workers, festive surface mood with a coercive undertone.',
    'dia-da-eleicao':
      'A 1920s Brazilian rural election polling table: seated officials, a voter standing and handing over an open (unsecret) ballot, men watching closely — voting happening in plain view of everyone.',
    'a-degola':
      'A handwritten 1920s Brazilian election tally document (ata) on a desk, with signatures and visible corrections/erasures — the paper that decided more than the ballot box.',
  },
  'o-plano-que-nao-existia': {
    'a-mvore-e-a-lembranca':
      'Generic 1932 Brazilian wartime recruitment poster scene on a city wall: bold graphic call for volunteers (nurses and soldiers), passersby looking at it. No specific identifiable real poster reproduced.',
    'o-documento':
      'A typewritten document with a fabricated generic letterhead being passed hand to hand across a 1930s military office desk, urgent atmosphere, nobody stopping to examine it closely.',
    'o-golpe':
      'Getúlio Vargas-like 1930s Brazilian president figure speaking gravely into an old radio microphone, a crowd in a plaza listening attentively nearby. Generic dramatized scene, not a reproduction of a specific real cartoon.',
  },
  'coroa-e-cofre': {
    'um-rei-uma-lei':
      'Three different antique measuring rods of visibly different lengths laid side by side across a sack of grain at a 17th century French rural market stall, no people, no readable text or markings.',
    'ouro-que-nao-se-deixa-sair':
      'Bundles of fine cloth being loaded onto a wooden ship at a 17th century French port, a royal official checking a manifest against a wax-sealed monopoly charter, no readable text, overcast harbor light.',
    'uma-fe-um-reino':
      'Modest interior of a 17th century French Protestant (Huguenot) meeting house, plain wooden benches, no religious imagery on the walls, soft light through a small window, empty of people, solemn quiet mood.',
    'guerra-gloria-conta':
      'A column of 17th century French infantry soldiers marching along a dirt road, supply carts trailing behind, generic countryside, no specific battle, no readable flags or banners.',
    'a-conta-chega':
      'A family cart loaded with modest belongings stopped on a rural road at dawn near a French border checkpoint, figures small and distant, looking back toward the direction they came from, quiet somber mood, no readable text.',
  },
  tawantinsuyu: {
    // Paisagem/arquitetura/objetos em vez de cenas com pessoas em
    // destaque — mesmo cuidado da Linha do tempo de povos originários:
    // sem rostos em close-up, sem qualquer cena de combate.
    'pachacuti-reforma':
      'Andean agricultural terraces on a mountainside, a distant group of small figures working with no faces visible, clear sky, no text.',
    'expansao-militar':
      'A stone road crossing an Andean valley, connecting two distant regions, no human figures in the foreground, no text.',
    'infraestrutura-e-mita':
      'A row of stone storage buildings (qullqa) on an Andean hillside, sacks of grain faintly visible through open doorways, no people in focus, no text.',
    'huayna-capac-auge':
      'A ceremonial stone plaza in an Andean city seen from a distance, small groups wearing textiles of different geometric patterns, no faces in focus, no text.',
    'a-sucessao':
      'The stone interior of an Andean temple, niches in the wall and a carved solar symbol, empty of people, soft light, no text.',
  },
  tenochtitlan: {
    'a-lista-de-tributo':
      'Bundles of cotton cloth, cacao beans and colorful feathers organized in separate piles on woven mats, no people in focus, no text.',
    'expedicao-de-longa-distancia':
      'A dirt trail through dense jungle, woven carrying baskets stacked beside the path, no human figures in the foreground, no text.',
    'limites-do-lago':
      'An aerial-angle view of rectangular artificial garden islands (chinampas) on a lake with narrow water channels between them, no people in focus, no text.',
    'o-atraso-da-provincia':
      'Partially empty woven baskets beside a counting scale in a storage courtyard, no people in focus, no text.',
    'a-grande-entrega':
      'A large ceremonial plaza seen from a distance, small groups in organized lines carrying bundles, no faces in focus, no text.',
  },
}

// Uma capa por cenário — usada nos cards de /simulacoes e na home. Cena
// panorâmica que resume o tema inteiro (não uma rodada específica), em
// formato paisagem (3:2) para caber bem num card retangular.
const IMAGENS_CAPA = {
  'sao-paulo-1917':
    'Wide panoramic view of an industrial São Paulo street in 1917 during a general strike: textile factory smokestacks in the background, a dense crowd of workers filling the street from sidewalk to sidewalk in the foreground, no banners or readable signs, tense collective atmosphere emphasizing the scale of an entire city stopping.',
  'a-terra-do-favor':
    'Wide panoramic view of a 1920s Brazilian rural landscape: a grand fazenda house on a hilltop in the distance, a dirt road lined with modest worker houses in the foreground, one rural worker standing on the road looking toward the fazenda, composition symbolizing everyday hierarchy and dependence.',
  'o-plano-que-nao-existia':
    'Wide panoramic view of a 1930s Brazilian city street corner at dusk, generic skyline with no recognizable real landmarks or monuments: a small newspaper stand with blank, unlabeled papers and completely blank signage (absolutely no text, letters, or writing anywhere in the image), a small worried crowd reading in silence, a radio antenna visible on a rooftop above, tense uncertain atmosphere of a rumor spreading through the city.',
  'coroa-e-cofre':
    'Wide panoramic view of a lavish 17th century French royal palace throne room seen from the back of the hall toward an ornate empty throne on a distant dais, courtiers in period dress standing in rows, tall windows, generic palace architecture not matching any specific real palace, nobody\'s face prominent or identifiable as a specific person.',
  tawantinsuyu:
    'Wide panoramic view of an Andean mountain landscape with an extensive stone road system winding through terraced hillsides toward a distant stone city, no readable text, no people prominent in the foreground, majestic scale emphasizing the reach of an empire built without wheels or draft animals.',
  tenochtitlan:
    'Wide panoramic view of an island city built on a lake, connected to the shore by causeways, surrounded by a grid of rectangular artificial garden islands (chinampas), distant mountains on the horizon, no readable text, no people prominent in the foreground, emphasizing the scale of a city built entirely on water.',
}

const IMAGENS_EVENTOS = {
  'a-terra-do-favor': {
    'visita-noturna':
      'Two menacing men on horseback stopped at the door of a modest 1920s Brazilian rural house at dusk, silhouetted, ominous but no visible weapons or violence, tense atmosphere.',
  },
  'sao-paulo-1917': {
    'notificacao-expulsao':
      'A worried immigrant factory worker reading an official notification letter inside a modest 1917 São Paulo boarding house room, oil lamp light, tense atmosphere.',
  },
  'o-plano-que-nao-existia': {
    'batida-policial':
      'Plainclothes political police agents at a door during a 1930s Brazilian pre-dawn raid, dim hallway light, tense atmosphere, no visible weapons or violence.',
  },
}

async function gerarImagem(prompt, apiKey, aspectRatio) {
  const config = aspectRatio ? { imageConfig: { aspectRatio } } : undefined
  const resposta = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODELO}:generateContent`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify({ contents: [{ parts: [{ text: `${prompt} ${ESTILO}` }] }], ...(config ? { generationConfig: config } : {}) }),
    }
  )
  const corpo = await resposta.json()
  if (!resposta.ok) throw new Error(`HTTP ${resposta.status}: ${JSON.stringify(corpo)}`)
  const partes = corpo.candidates?.[0]?.content?.parts ?? []
  const parteImagem = partes.find((p) => p.inlineData || p.inline_data)
  if (!parteImagem) throw new Error(`Sem imagem na resposta: ${JSON.stringify(corpo).slice(0, 500)}`)
  const inline = parteImagem.inlineData ?? parteImagem.inline_data
  return { base64: inline.data, mimeType: inline.mimeType ?? inline.mime_type }
}

async function gerarLote(pastaSaida, itens, apiKey, aspectRatio) {
  mkdirSync(pastaSaida, { recursive: true })
  for (const [nome, prompt] of Object.entries(itens)) {
    const jaExiste = ['png', 'jpg', 'jpeg'].some((ext) => existsSync(path.join(pastaSaida, `${nome}.${ext}`)))
    if (jaExiste) {
      console.log(`  já existe, pulando: ${nome}`)
      continue
    }
    process.stdout.write(`  gerando ${nome}... `)
    try {
      const { base64, mimeType } = await gerarImagem(prompt, apiKey, aspectRatio)
      const ext = mimeType?.includes('png') ? 'png' : 'jpg'
      const destino = path.join(pastaSaida, `${nome}.${ext}`)
      writeFileSync(destino, Buffer.from(base64, 'base64'))
      console.log(`ok -> ${destino}`)
    } catch (erro) {
      console.log(`FALHOU: ${erro.message}`)
    }
  }
}

async function main() {
  const filtroCenario = process.argv[2]
  const envLocal = readFileSync(new URL('../.env.local', import.meta.url), 'utf8')
  const apiKey = envLocal.match(/^GEMINI_API_KEY=(.+)$/m)?.[1]?.trim()
  if (!apiKey) {
    console.error('GEMINI_API_KEY não encontrada em .env.local')
    process.exit(1)
  }

  const cenarios = new Set([
    ...Object.keys(ICONES_PAPEIS),
    ...Object.keys(IMAGENS_RODADAS),
    ...Object.keys(IMAGENS_EVENTOS),
    ...Object.keys(IMAGENS_CAPA),
  ])
  for (const cenario of cenarios) {
    if (filtroCenario && cenario !== filtroCenario) continue

    if (IMAGENS_CAPA[cenario]) {
      console.log(`[${cenario}] capa`)
      await gerarLote(
        new URL(`../public/imagens/${cenario}/`, import.meta.url).pathname.slice(1),
        { capa: IMAGENS_CAPA[cenario] },
        apiKey,
        '3:2'
      )
    }
    if (ICONES_PAPEIS[cenario]) {
      console.log(`[${cenario}] ícones de papéis`)
      await gerarLote(
        new URL(`../public/imagens/${cenario}/papeis/`, import.meta.url).pathname.slice(1),
        ICONES_PAPEIS[cenario],
        apiKey
      )
    }
    if (IMAGENS_RODADAS[cenario]) {
      console.log(`[${cenario}] imagens de rodada`)
      await gerarLote(
        new URL(`../public/imagens/${cenario}/`, import.meta.url).pathname.slice(1),
        IMAGENS_RODADAS[cenario],
        apiKey
      )
    }
    if (IMAGENS_EVENTOS[cenario]) {
      console.log(`[${cenario}] imagens de evento`)
      await gerarLote(
        new URL(`../public/imagens/${cenario}/eventos/`, import.meta.url).pathname.slice(1),
        IMAGENS_EVENTOS[cenario],
        apiKey
      )
    }
  }
}

main()
