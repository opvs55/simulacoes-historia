import { criarGeradorAleatorio } from './util.js'

// Estado pessoal (seção "Trilhas de 1917", roteiro de design de 2026-09-01):
// separado dos indicadores coletivos do motor.js — não é agregado com o
// resto da turma, pertence só ao jogador. `opcao.flags` e
// `reacao.flags` declaram o que somam, do mesmo jeito que `deltas` já
// declara o efeito nos indicadores coletivos.
//
// Flags numéricas se acumulam (soma); qualquer outro tipo (string, boolean)
// é substituído pelo valor mais recente — é assim que uma reação de evento
// registra "qual reação foi essa" (ex.: `desfechoEvento: 'advogado'`) sem
// precisar de uma flag por reação possível.
export function acumularFlags(anteriores, novas) {
  const combinadas = { ...anteriores }
  for (const [chave, valor] of Object.entries(novas ?? {})) {
    combinadas[chave] = typeof valor === 'number' ? (combinadas[chave] ?? 0) + valor : valor
  }
  return combinadas
}

function condicaoBate(quando, flags) {
  return Object.entries(quando ?? {}).every(([chave, condicao]) => {
    const valor = flags[chave] ?? 0
    if (condicao !== null && typeof condicao === 'object' && !Array.isArray(condicao)) {
      if ('min' in condicao && !(valor >= condicao.min)) return false
      if ('max' in condicao && !(valor <= condicao.max)) return false
      return true
    }
    return valor === condicao
  })
}

// Resolve qual final pessoal um papel teve, a partir das flags acumuladas
// na partida. `papel.resolucaoFinais.casos` é avaliado em ordem — o
// primeiro `quando` que bater decide: ou aponta um `final` fixo (uma
// escolha que decide o desfecho sozinha, sem sorteio — ex.: "embarcar de
// volta" em São Paulo 1917), ou uma distribuição `pesos` entre finais
// possíveis.
//
// A distribuição usa sorteio SEEDADO por `seed` (mesma lógica de
// sortearPapeis): a mesma pessoa, rejogando o código antigo da partida,
// vê o mesmo resultado — não é um azar novo a cada vez que a tela recarrega,
// é um azar que aconteceu uma vez.
export function resolverFinalPessoal(papel, flags, seed) {
  if (!papel.finais || !papel.resolucaoFinais) return null

  for (const caso of papel.resolucaoFinais.casos) {
    if (!condicaoBate(caso.quando, flags)) continue

    if (caso.final) {
      return { final: buscarFinal(papel, caso.final), casoUsado: caso }
    }

    const entradas = Object.entries(caso.pesos ?? {})
    if (entradas.length === 0) continue
    const pesoTotal = entradas.reduce((soma, [, peso]) => soma + peso, 0)
    const aleatorio = criarGeradorAleatorio(seed)
    let alvo = aleatorio() * pesoTotal
    for (const [slug, peso] of entradas) {
      if (alvo < peso) return { final: buscarFinal(papel, slug), casoUsado: caso }
      alvo -= peso
    }
    const [ultimoSlug] = entradas[entradas.length - 1]
    return { final: buscarFinal(papel, ultimoSlug), casoUsado: caso }
  }

  return null // nenhum caso bateu — falha de configuração do cenário, ver teste estrutural
}

function buscarFinal(papel, slug) {
  const final = papel.finais.find((f) => f.slug === slug)
  if (!final) throw new Error(`[${papel.slug}] resolucaoFinais aponta pro final inexistente: '${slug}'`)
  return final
}
