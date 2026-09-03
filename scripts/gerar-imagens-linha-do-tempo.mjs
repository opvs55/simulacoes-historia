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
