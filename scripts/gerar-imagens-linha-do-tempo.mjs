// Gera as imagens de fundo de uma linha do tempo (formato paisagem, estilo
// B&W woodcut consistente com o resto do site). Uso:
//   node scripts/gerar-imagens-linha-do-tempo.mjs <slug-da-linha-do-tempo>
//
// Mesma regra ética do resto do projeto: nenhuma cena tenta reproduzir o
// rosto de uma pessoa real e específica (nem Luís XIV, nem os teóricos do
// absolutismo, nem Vargas/Dutra/JK) — são sempre cenas genéricas do tipo de
// lugar/situação, nunca um retrato nomeado.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import path from 'node:path'

const MODELO = 'gemini-3.1-flash-lite-image'
const ESTILO =
  'Editorial woodcut-style engraving illustration, black and white, high contrast, ' +
  'fine crosshatching linework, in the style of an early 20th century Brazilian ' +
  'newspaper illustration. No text, no watermark, no signature, no color, no legible ' +
  'writing anywhere in the image.'

const LINHAS_DO_TEMPO = {
  'absolutismo-e-mercantilismo': {
    capa:
      'Wide panoramic view of a lavish 17th century European royal court throne room, seen ' +
      'from the back of the hall toward an empty ornate throne on a dais, courtiers in period ' +
      'dress standing in rows facing it, tall windows, generic palace architecture not matching ' +
      'any specific real palace, nobody\'s face prominent or identifiable as a specific person.',
    modernidade:
      'Generic 16th century European scholar\'s study or artist\'s workshop, shelves of books ' +
      'and scrolls, a globe, drafting and painting tools on a table, warm light through a window, ' +
      'no visible faces close-up, no readable text on any book spine or page.',
    reforma:
      'Generic scene of a wooden church door with papers pinned to it, a small crowd of townspeople ' +
      'reading and discussing at a distance in an early 16th century German town square, no ' +
      'specific identifiable individual, no readable text on the papers, overcast morning light.',
    contrarreforma:
      'Generic interior of a 16th century Catholic church council chamber, rows of bishops and ' +
      'clergy seated in assembly facing an altar, tall gothic windows, solemn atmosphere, no ' +
      'specific identifiable individual, no readable text or banners.',
    monarquias:
      'Generic 17th century European royal court audience scene, a monarch seen only from ' +
      'behind or at a distance on a throne, courtiers bowing, marble columns and tapestries, ' +
      'grand but no specific real palace or identifiable face.',
    absolutismo:
      'Generic 17th century European philosopher\'s study, an open book of political theory on ' +
      'a writing desk, quill and inkwell, a bust sculpture and a globe nearby, candlelight, no ' +
      'visible face, no readable text.',
    navegacoes:
      'A 15th century Portuguese or Spanish caravel under full sail on the open Atlantic ocean, ' +
      'seen from a low angle against a dramatic sky, sailors small figures on deck, no flags with ' +
      'readable text or identifiable coat of arms.',
    mercantilismo:
      'Generic busy 16th century European harbor scene, ships docked, dockworkers loading ' +
      'wooden crates and sacks of goods, warehouses in the background, overcast sky, no ' +
      'readable text on any crate or building.',
  },
  'povos-originarios-e-colonizacao': {
    // Cuidado redobrado aqui: nenhuma imagem foca em rosto humano em
    // close-up (risco de estereótipo impreciso sobre povos originários),
    // nenhuma cena de combate/violência explícita, nenhuma pessoa nomeada
    // real. Preferência por arquitetura, paisagem e objetos/padrões.
    capa:
      'Wide panoramic distant view of a large pre-colonial indigenous village in Brazil, seen ' +
      'from a hilltop or across a river at dusk, communal houses (ocas) among dense forest, ' +
      'no human face visible close-up, respectful and dignified, not exoticized, no readable text.',
    diversidade:
      'Close-up still life of indigenous Brazilian material culture: woven baskets, feather ' +
      'ornaments, painted ceramic vessels with geometric patterns, laid out on a woven mat, no ' +
      'human figures, no readable text, respectful documentary framing.',
    civilizacoes:
      'Wide view of a Mesoamerican stepped stone pyramid temple complex at a Maya or Aztec ' +
      'ceremonial city, generic and not a specific named real site, plaza in foreground, jungle ' +
      'or lake in the background, no human figures prominent, no readable text or glyphs.',
    saberes:
      'Wide view of Andean agricultural stone terraces built into a steep mountainside, generic ' +
      'Inca-style stonework and irrigation channels, misty mountains in the background, no human ' +
      'figures prominent, no readable text.',
    encontro:
      'A single 16th century Portuguese sailing ship anchored off a lush green tropical coastline ' +
      'seen from a distance, small boats near the shore, forest and beach, no close-up human ' +
      'faces on either side, calm overcast tone, no readable text or flags.',
    fonte:
      'Close-up still life of a 16th century handwritten letter on aged paper with a quill pen ' +
      'and inkwell resting beside it, on a wooden desk, warm candlelight, the handwriting rendered ' +
      'as generic illegible period cursive marks, not actual readable text.',
    conquista:
      'Generic 16th century Spanish colonial settlement under construction in the Americas, ' +
      'wooden scaffolding and stone walls of a new town, workers in the distance, mountains ' +
      'behind, no battle or weapons depicted, no readable text.',
    colonizacaoportuguesa:
      'Generic 16th century Brazilian sugar mill (engenho) complex seen from a distance, ' +
      'thatched and tiled buildings near a river, cane fields around it, overcast sky, no human ' +
      'figures prominent, no readable text.',
  },
  'materialidade-e-saberes-incas': {
    // Nenhuma pessoa retratada em nenhuma cena — foco em arquitetura,
    // paisagem e objetos, mesmo cuidado da timeline de povos originários.
    capa:
      'Wide panoramic view of Andean mountain terraced hillsides at dawn, ancient stone ' +
      'architecture ruins visible on a distant ridge, misty valleys below, no readable text, ' +
      'no people prominent.',
    pedrasobrepedra:
      'Close-up of a precisely fitted Inca-style dry stone wall, large polygonal stone blocks ' +
      'interlocking without any visible mortar, weathered texture, soft raking light ' +
      'emphasizing the joints, no people, no readable text.',
    terracosagua:
      'Andean agricultural terraces (andenes) curving along a steep mountainside, a small stone ' +
      'irrigation channel visible, distant snow-capped peaks, no people prominent, no readable text.',
    quipu:
      'Close-up still life of a quipu, a device of knotted colored cords hanging from a ' +
      'horizontal cord, resting on a plain woven cloth, warm indoor light, no people, no ' +
      'readable text or symbols.',
    textil:
      'Close-up of a finely woven Andean textile with geometric patterns in naturally dyed ' +
      'colors, folded fabric texture visible, soft light, no people, no readable text.',
    machupicchu:
      'Wide view of a misty Andean mountaintop stone citadel at dawn, terraced stone structures ' +
      'and a central plaza, dramatic peaks in the background, no readable text, no people prominent.',
  },
  'imaginario-do-colonizador': {
    // Cuidado ético reforçado: NENHUMA imagem ilustra a cena estereotipada
    // em si (nem a gravura de Theodore de Bry, nem qualquer figura humana
    // genérica "estilizada como selvagem") — sempre o objeto ou o meio
    // (carta, prensa, mapa), nunca a cena descrita. Ver comentário no topo
    // de app/linha-do-tempo/_conteudo/ImaginarioDoColonizador.js.
    capa:
      'Close-up still life of an aged 16th century archive: yellowed handwritten letters fanned ' +
      'out on a wooden desk, a quill pen, a wax seal, warm candlelight, moody shadows, no ' +
      'readable text, no people.',
    carta:
      'Close-up of a single aged handwritten parchment letter with a broken wax seal beside it ' +
      'and a quill pen resting on the desk, warm candlelight, the handwriting rendered as ' +
      'generic illegible period cursive marks, not actual readable text, no people.',
    gravura:
      'Generic 16th century European print workshop interior: a wooden printing press, stacks ' +
      'of blank engraved plates and printed pages on a table, dim workshop light, no readable ' +
      'text or imagery on any visible page, no people, emphasizing mass reproduction rather ' +
      'than any specific printed scene.',
    catequese:
      'Close-up still life of a small stack of aged handwritten missionary letters tied with ' +
      'string, a simple wooden crucifix resting beside them, candlelight, no readable text, no people.',
    raca:
      'An old weathered blank world map outline on parchment, seen at an angle in dim light, ' +
      'continent shapes drawn only as plain outlines with cross-hatching shading, absolutely no ' +
      'place names, no country names, no continent labels, no words, no letters, no numbers, no ' +
      'compass rose text, no grid labels anywhere on the map, no people — an abstract sense of ' +
      'the world being divided into blank territories waiting to be categorized.',
    resposta:
      'A contemporary wooden desk with an open book, reading glasses, and a cup of coffee, soft ' +
      'daylight from a window, no people, no readable text on the book pages, warm modern ' +
      'academic atmosphere.',
    territoriovivo:
      'Wide distant view of a lush Brazilian Amazon rainforest river bend at golden hour, dense ' +
      'canopy and calm water, no people, no readable text, serene and vital mood.',
  },
  'da-revolta-ao-desenvolvimento': {
    // 1930-1961: Revolta de 1932, mulheres operarias, CLT/trabalhismo,
    // Dutra/Guerra Fria, 2o governo Vargas, JK. Nenhuma pessoa real
    // nomeada retratada (nem Vargas, nem Dutra, nem JK).
    capa:
      'Wide panoramic view of a 1940s Brazilian industrial skyline at dusk, factory smokestacks ' +
      'and a radio broadcast tower silhouetted against the sky, generic and not a specific real ' +
      'city landmark, no readable text, no human figures prominent.',
    mulheresoperarias:
      'Generic interior of a 1910s-1920s Brazilian textile factory, several women working at ' +
      'looms and spinning machines in a row, natural light from tall windows, documentary tone, ' +
      'no close-up identifiable faces, no readable text.',
    movimento1930:
      'Wide distant exterior view of a generic early 20th century Brazilian government palace at ' +
      'dusk, a small crowd of civilians and a few soldiers gathered near the entrance, tense but ' +
      'non-violent transitional mood, no specific identifiable building or person, no readable ' +
      'text or flag emblems, overcast dramatic light.',
    revolta1932:
      'Generic 1932 São Paulo street scene with a makeshift barricade of furniture and sandbags, ' +
      'a few volunteer civilians in improvised armbands nearby, no weapons fired, no visible ' +
      'flags with readable text, daytime, tense but not violent.',
    constituicaoanl:
      'Generic 1930s Brazilian public square with a large gathered crowd listening to an unseen ' +
      'speaker on a distant podium, banners with no readable text, daytime, an atmosphere of ' +
      'mass political mobilization, no violence, no specific identifiable person.',
    trabalhismo:
      'Generic 1940s Brazilian radio broadcast studio interior, a large tabletop microphone on ' +
      'a stand at an empty podium, on-air light glowing, technical equipment around, warm ' +
      'lighting, no person present, no readable text on any panel or sign.',
    guerrafria:
      'Generic 1940s Brazilian polling station interior, empty wooden ballot booths and a ' +
      'sealed ballot box on a table, national flag draped generically without readable text, ' +
      'soft daylight, no people, documentary tone.',
    segundovargas:
      'Wide distant exterior view of a generic early 20th century Brazilian presidential palace ' +
      'building at dusk, neoclassical facade, a single lit window among many dark ones, quiet ' +
      'and somber mood, no people visible, no readable text or signage.',
    jkbrasilia:
      'Generic 1958 Brazilian construction site of a modernist government building, concrete ' +
      'structural frame and cranes against an open sky, red dirt plain around it, a few small ' +
      'distant construction workers, no readable text, optimistic dawn light.',
  },
}

async function gerarImagem(prompt, apiKey, aspectRatio) {
  const config = aspectRatio ? { imageConfig: { aspectRatio } } : undefined
  const resposta = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODELO}:generateContent`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${prompt} ${ESTILO}` }] }],
        ...(config ? { generationConfig: config } : {}),
      }),
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

async function main() {
  const slug = process.argv[2]
  if (!slug || !LINHAS_DO_TEMPO[slug]) {
    console.error('Uso: node scripts/gerar-imagens-linha-do-tempo.mjs <slug>')
    console.error('Slugs disponíveis:', Object.keys(LINHAS_DO_TEMPO).join(', '))
    process.exit(1)
  }

  const envLocal = readFileSync(new URL('../.env.local', import.meta.url), 'utf8')
  const apiKey = envLocal.match(/^GEMINI_API_KEY=(.+)$/m)?.[1]?.trim()
  if (!apiKey) {
    console.error('GEMINI_API_KEY não encontrada em .env.local')
    process.exit(1)
  }

  const pastaSaida = new URL(`../public/imagens/linha-do-tempo/${slug}/`, import.meta.url).pathname.slice(1)
  mkdirSync(pastaSaida, { recursive: true })

  for (const [nome, prompt] of Object.entries(LINHAS_DO_TEMPO[slug])) {
    const jaExiste = ['png', 'jpg', 'jpeg'].some((ext) => existsSync(path.join(pastaSaida, `${nome}.${ext}`)))
    if (jaExiste) {
      console.log(`já existe, pulando: ${nome}`)
      continue
    }
    process.stdout.write(`gerando ${nome}... `)
    try {
      const { base64, mimeType } = await gerarImagem(prompt, apiKey, '3:2')
      const ext = mimeType?.includes('png') ? 'png' : 'jpg'
      const destino = path.join(pastaSaida, `${nome}.${ext}`)
      writeFileSync(destino, Buffer.from(base64, 'base64'))
      console.log(`ok -> ${destino}`)
    } catch (erro) {
      console.log(`FALHOU: ${erro.message}`)
    }
  }
}

main()
