import { criarGeradorAleatorio } from './util.js'

// Distribui papéis por cota (método dos maiores restos) e embaralha com
// semente opcional, para turmas de qualquer tamanho — não só a turma de
// referência de 30 usada nas tabelas do GDD (seções 7.1 e 8.1).
export function sortearPapeis(apelidos, papeis, seed) {
  if (apelidos.length === 0) return {}

  const aleatorio = criarGeradorAleatorio(seed ?? Date.now())
  const totalCotas = papeis.reduce((soma, papel) => soma + papel.cota, 0)

  const alocacoes = papeis.map((papel) => {
    const vagasExatas = (papel.cota / totalCotas) * apelidos.length
    return { papel, vagas: Math.floor(vagasExatas), resto: vagasExatas - Math.floor(vagasExatas) }
  })

  let vagasAlocadas = alocacoes.reduce((soma, alocacao) => soma + alocacao.vagas, 0)
  const porResto = [...alocacoes].sort((a, b) => b.resto - a.resto)
  for (let i = 0; vagasAlocadas < apelidos.length; i += 1) {
    porResto[i % porResto.length].vagas += 1
    vagasAlocadas += 1
  }

  const baralho = alocacoes.flatMap((alocacao) => Array(alocacao.vagas).fill(alocacao.papel.slug))
  embaralhar(baralho, aleatorio)

  const sorteio = {}
  apelidos.forEach((apelido, indice) => {
    sorteio[apelido] = baralho[indice]
  })
  return sorteio
}

function embaralhar(lista, aleatorio) {
  for (let i = lista.length - 1; i > 0; i -= 1) {
    const j = Math.floor(aleatorio() * (i + 1))
    ;[lista[i], lista[j]] = [lista[j], lista[i]]
  }
}
