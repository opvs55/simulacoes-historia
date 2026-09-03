import { criarGeradorAleatorio } from './util.js'

// Puramente narrativo — não entra em nenhum cálculo de indicador (esses
// já usam só o peso do papel do próprio jogador, conforme o aviso que já
// existe na tela: "sozinho, sua voz vale só o seu peso"). Serve só para
// mostrar, na tela de consequência, quantos colegas fictícios da mesma
// cota teriam decidido igual — dá corpo à Regra da Coesão sem fingir que
// o jogo hoje simula a turma inteira de verdade.
//
// Determinístico: a mesma semente + rodada + opção sempre dá o mesmo
// número, dentro da mesma partida.
export function estimarColegasQueDecidiramIgual(semente, rodadaSlug, opcaoSlug, cotaPapel) {
  if (cotaPapel <= 1) return 0
  const chaveTexto = `${semente}:${rodadaSlug}:${opcaoSlug}`
  const hash = Array.from(chaveTexto).reduce((soma, c) => soma + c.charCodeAt(0) * 7, 0)
  const aleatorio = criarGeradorAleatorio(hash)
  // nunca 0 (ninguém decide sozinho) nem o total (nunca é unânime) —
  // fica entre ~35% e ~85% do resto da cota, para soar plausível.
  const restante = cotaPapel - 1
  const min = Math.max(1, Math.round(restante * 0.35))
  const max = Math.max(min, Math.round(restante * 0.85))
  return min + Math.floor(aleatorio() * (max - min + 1))
}
