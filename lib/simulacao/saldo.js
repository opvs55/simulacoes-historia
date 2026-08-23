import { calcularCoesaoPorPapel } from './coesao.js'

// Monta o objeto por trás da tela de Saldo Geral (seção 9 do GDD): blocos
// 1 e 4 (barras + decisões mais divididas) e 5 (fontes mais/menos lidas).
// O bloco 2 (linha sobreposta com o registro histórico) depende de um valor
// de referência que ainda não está no contrato de cenário da seção 12 —
// falta acrescentar esse campo quando um cenário real for escrito (Fase 1).
export function montarSaldoGeral({ estado, decisoes, consultas, cenario }) {
  return {
    indicadoresFinais: estado.indicadores,
    historico: estado.historico,
    decisoesMaisDivididas: calcularDecisoesMaisDivididas(decisoes),
    fontesConsultadas: contarConsultasPorFonte(consultas),
    textoFecho: cenario.desfecho?.textoFecho ?? null,
    perguntasDebate: cenario.desfecho?.perguntasDebate ?? [],
  }
}

function calcularDecisoesMaisDivididas(decisoes) {
  const porRodadaEPapel = agrupar(decisoes, (decisao) => `${decisao.rodadaSlug}::${decisao.papelSlug}`)

  return Object.entries(porRodadaEPapel)
    .map(([chave, decisoesDoGrupo]) => {
      const [rodadaSlug, papelSlug] = chave.split('::')
      return {
        rodadaSlug,
        papelSlug,
        totalDecisoes: decisoesDoGrupo.length,
        ...calcularCoesaoPorPapel(decisoesDoGrupo),
      }
    })
    .filter((grupo) => grupo.totalDecisoes > 1)
    .sort((a, b) => a.adesao - b.adesao)
    .slice(0, 3)
}

function contarConsultasPorFonte(consultas) {
  const porFonte = agrupar(consultas, (consulta) => consulta.fonteSlug)
  return Object.entries(porFonte)
    .map(([fonteSlug, lista]) => ({ fonteSlug, vezes: lista.length }))
    .sort((a, b) => b.vezes - a.vezes)
}

function agrupar(lista, chaveDe) {
  const grupos = {}
  for (const item of lista) {
    const chave = chaveDe(item)
    const grupo = grupos[chave] ?? (grupos[chave] = [])
    grupo.push(item)
  }
  return grupos
}
