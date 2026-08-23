const FAIXAS = [
  { minimo: 0.8, multiplicador: 2.0 },
  { minimo: 0.6, multiplicador: 1.5 },
  { minimo: 0, multiplicador: 1.0 },
]

// A "opção majoritária" só faz sentido dentro do próprio papel: cada papel
// tem sua lista própria de 2-3 opções por rodada (seção 5.1 do GDD), então
// não existe uma opção compartilhada entre papéis diferentes para comparar.
// A coesão de um bloco popular com vários papéis (ex.: operária têxtil +
// operário imigrante) é lida papel a papel.
export function calcularCoesaoPorPapel(decisoesDoPapel) {
  if (decisoesDoPapel.length === 0) {
    return { opcaoMajoritaria: null, adesao: 0, multiplicador: 1.0 }
  }

  const contagemPorOpcao = new Map()
  for (const decisao of decisoesDoPapel) {
    const total = contagemPorOpcao.get(decisao.opcaoSlug) ?? 0
    contagemPorOpcao.set(decisao.opcaoSlug, total + 1)
  }

  let opcaoMajoritaria = null
  let maiorContagem = 0
  for (const [opcaoSlug, contagem] of contagemPorOpcao) {
    if (contagem > maiorContagem) {
      maiorContagem = contagem
      opcaoMajoritaria = opcaoSlug
    }
  }

  const adesao = maiorContagem / decisoesDoPapel.length
  const faixa = FAIXAS.find((candidata) => adesao >= candidata.minimo)
  return { opcaoMajoritaria, adesao, multiplicador: faixa.multiplicador }
}

// Elites têm mult_coesão fixo em 1.0 — não precisam se organizar para agir
// (seção 5.3 do GDD). O multiplicador só se move para blocos populares.
export function multiplicadorCoesao(bloco, decisoesDoPapel) {
  if (bloco !== 'popular') return 1.0
  return calcularCoesaoPorPapel(decisoesDoPapel).multiplicador
}
