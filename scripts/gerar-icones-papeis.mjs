// Gera um ícone (retrato estilo gravura/xilogravura, P&B) por papel de um
// cenário, usando a API de imagens do Gemini. Uso:
//   node scripts/gerar-icones-papeis.mjs <slug-do-cenario>
//
// Precisa de GEMINI_API_KEY em .env.local. Salva em
// public/imagens/<cenario>/papeis/<papel-slug>.<ext>

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import path from 'node:path'

const MODELO = 'gemini-3.1-flash-lite-image'
const ESTILO =
  'Editorial woodcut-style engraving portrait, black and white, high contrast, ' +
  'fine crosshatching linework, in the style of an early 20th century Brazilian ' +
  'newspaper illustration. Shoulders-up portrait, plain flat background, no text, ' +
  'no watermark, no signature, no color.'

const PROMPTS = {
  'sao-paulo-1917': {
    'coronel-cafe':
      'Elderly Brazilian coffee baron (coronel), circa 1917: thick mustache, wide-brim panama-style hat, linen suit, watch chain, stern authoritative expression.',
    'industrial-textil':
      'Middle-aged Brazilian textile factory owner, circa 1917: urban suit and waistcoat, pocket watch, trimmed mustache, severe businesslike expression.',
    'autoridade-estadual':
      "São Paulo state police officer (Força Pública), circa 1917: period military-style uniform, peaked cap, stern composed expression.",
    'grande-imprensa':
      'Brazilian newspaper editor of the mainstream press, circa 1917: suit, starched collar and tie, pen in hand, observant expression.',
    'imprensa-operaria':
      'Brazilian anarchist worker-press typesetter/journalist, circa 1917: simple shirt, sleeves rolled up or plain jacket, ink-stained hands, intense expression.',
    'operaria-textil':
      'Young Brazilian immigrant textile factory worker woman, circa 1917: simple period work dress, headscarf, tired but resolute expression.',
    'operario-imigrante':
      'Young European immigrant male factory worker in São Paulo, circa 1917: simple work clothes, flat cap, weary determined expression.',
  },
}

async function gerarImagem(prompt, apiKey) {
  const resposta = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODELO}:generateContent`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${prompt} ${ESTILO}` }] }],
      }),
    }
  )

  const corpo = await resposta.json()
  if (!resposta.ok) {
    throw new Error(`HTTP ${resposta.status}: ${JSON.stringify(corpo)}`)
  }

  const partes = corpo.candidates?.[0]?.content?.parts ?? []
  const parteImagem = partes.find((p) => p.inlineData || p.inline_data)
  if (!parteImagem) {
    throw new Error(`Sem imagem na resposta: ${JSON.stringify(corpo).slice(0, 500)}`)
  }
  const inline = parteImagem.inlineData ?? parteImagem.inline_data
  return { base64: inline.data, mimeType: inline.mimeType ?? inline.mime_type }
}

async function main() {
  const cenarioSlug = process.argv[2]
  if (!cenarioSlug || !PROMPTS[cenarioSlug]) {
    console.error(`Uso: node scripts/gerar-icones-papeis.mjs <${Object.keys(PROMPTS).join('|')}>`)
    process.exit(1)
  }

  const envLocal = readFileSync(new URL('../.env.local', import.meta.url), 'utf8')
  const apiKey = envLocal.match(/^GEMINI_API_KEY=(.+)$/m)?.[1]?.trim()
  if (!apiKey) {
    console.error('GEMINI_API_KEY não encontrada em .env.local')
    process.exit(1)
  }

  const pastaSaida = new URL(`../public/imagens/${cenarioSlug}/papeis/`, import.meta.url).pathname.slice(1)
  mkdirSync(pastaSaida, { recursive: true })

  for (const [papelSlug, prompt] of Object.entries(PROMPTS[cenarioSlug])) {
    const destino = path.join(pastaSaida, `${papelSlug}.png`)
    if (existsSync(destino)) {
      console.log(`  já existe, pulando: ${papelSlug}`)
      continue
    }
    process.stdout.write(`gerando ${papelSlug}... `)
    try {
      const { base64, mimeType } = await gerarImagem(prompt, apiKey)
      const ext = mimeType?.includes('png') ? 'png' : mimeType?.includes('jpeg') ? 'jpg' : 'png'
      const destinoFinal = path.join(pastaSaida, `${papelSlug}.${ext}`)
      writeFileSync(destinoFinal, Buffer.from(base64, 'base64'))
      console.log(`ok -> ${destinoFinal}`)
    } catch (erro) {
      console.log(`FALHOU: ${erro.message}`)
    }
  }
}

main()
