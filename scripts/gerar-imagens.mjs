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

async function gerarImagem(prompt, apiKey) {
  const resposta = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODELO}:generateContent`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify({ contents: [{ parts: [{ text: `${prompt} ${ESTILO}` }] }] }),
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

async function gerarLote(pastaSaida, itens, apiKey) {
  mkdirSync(pastaSaida, { recursive: true })
  for (const [nome, prompt] of Object.entries(itens)) {
    const jaExiste = ['png', 'jpg', 'jpeg'].some((ext) => existsSync(path.join(pastaSaida, `${nome}.${ext}`)))
    if (jaExiste) {
      console.log(`  já existe, pulando: ${nome}`)
      continue
    }
    process.stdout.write(`  gerando ${nome}... `)
    try {
      const { base64, mimeType } = await gerarImagem(prompt, apiKey)
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

  const cenarios = new Set([...Object.keys(ICONES_PAPEIS), ...Object.keys(IMAGENS_RODADAS), ...Object.keys(IMAGENS_EVENTOS)])
  for (const cenario of cenarios) {
    if (filtroCenario && cenario !== filtroCenario) continue

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
