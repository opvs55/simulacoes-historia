import { notFound } from 'next/navigation'
import Link from 'next/link'
import eras from '@/cenarios/eras.js'
import linhasDoTempo from '@/materiais/linhas-do-tempo.js'
import materiaisData from '@/materiais/dados.js'
import coroaECofre from '@/cenarios/coroa-e-cofre.js'
import saoPaulo1917 from '@/cenarios/sao-paulo-1917.js'
import aTerraDoFavor from '@/cenarios/a-terra-do-favor.js'
import oPlanoQueNaoExistia from '@/cenarios/o-plano-que-nao-existia.js'
import LinhaItem from '../../_ui/LinhaItem.js'
import listaStyles from '../../_ui/LinhaItem.module.css'
import comum from '../../_ui/comum.module.css'
import BarraInferior from '../../_ui/BarraInferior.js'
import ProgressoLinha from './ProgressoLinha.js'
import styles from './page.module.css'

const CENARIOS = [coroaECofre, saoPaulo1917, aTerraDoFavor, oPlanoQueNaoExistia]
const ROTULO_SERIE = { '1a': '1ª série', '2a': '2ª série' }

export function generateStaticParams() {
  return eras.map((era) => ({ era: era.slug }))
}

export default function Era({ params }) {
  const era = eras.find((e) => e.slug === params.era)
  if (!era) notFound()

  const linhas = linhasDoTempo.filter((l) => l.era === era.slug)
  const cenarios = CENARIOS.filter((c) => c.era === era.slug)

  // um material pertence à sua própria `era` quando ela existe
  // explicitamente (necessário para eras sem cenário jogável ainda, como
  // "colonizacao" — não tem de onde derivar); senão, à era do PRIMEIRO
  // cenário relacionado, mesma regra de agrupamento usada em /materiais
  // (ver docs/plano-navegacao-por-periodo.md). Sem nenhum dos dois, o
  // material fica de fora daqui — só aparece na lista plana /materiais.
  // Linha do tempo fica de fora sempre — já aparece acima, vinda de
  // materiais/linhas-do-tempo.js; senão duplicaria.
  const materiaisDoPeriodo = materiaisData.filter((item) => {
    if (item.tipo === 'linha-do-tempo') return false
    if (item.era) return item.era === era.slug
    const slugCenario = item.cenariosRelacionados?.[0]
    if (!slugCenario) return false
    const cenarioDoItem = CENARIOS.find((c) => c.slug === slugCenario)
    return cenarioDoItem?.era === era.slug
  })

  return (
    <div className={styles.page}>
      <div className={styles.capaFaixa}>
        <img src={era.capa} alt="" />
        <div className={styles.capaGradiente} />
        <Link href="/estudar" className={styles.capaVoltar}>
          ← Estudar · {ROTULO_SERIE[era.serie]}
        </Link>
        <div className={styles.capaTexto}>
          <div className={styles.capaPeriodo}>{era.periodo}</div>
          <h1>{era.nome}</h1>
        </div>
      </div>

      <div className={styles.corpo}>
        <p className={styles.resumo}>{era.resumo}</p>

        <div className={styles.lista}>
          {linhas.map((linha) => (
            <ProgressoLinha key={linha.slug} linha={linha} />
          ))}

          {cenarios.map((cenario) => (
            <Link key={cenario.slug} href={`/simulacoes/${cenario.slug}`} className={styles.item}>
              <div className={`${comum.plate} ${styles.itemCapa}`}>
                <img src={`/imagens/${cenario.slug}/capa.jpg`} alt="" />
              </div>
              <div className={styles.itemCorpo}>
                <div className={styles.itemTitulo}>{cenario.titulo}</div>
                <div className={styles.itemMeta}>
                  <span className={styles.itemMetaDestaque}>Simulação</span>
                  <span>·</span>
                  <span>{cenario.rodadas.length} rodadas</span>
                  <span>·</span>
                  <span>turma inteira</span>
                </div>
              </div>
              <span className={styles.itemSeta}>→</span>
            </Link>
          ))}

          {linhas.length === 0 && cenarios.length === 0 && (
            <p className={styles.vazio}>Ainda não há linha do tempo nem simulação para este período.</p>
          )}
        </div>

        {materiaisDoPeriodo.length > 0 && (
          <div className={styles.materiaisBloco}>
            <div className={comum.kicker}>Materiais do período</div>
            <div className={listaStyles.videoLista}>
              {materiaisDoPeriodo.map((item, indice) => (
                <LinhaItem
                  key={item.slug}
                  item={item}
                  cenario={CENARIOS.find((c) => c.slug === item.cenariosRelacionados[0])}
                  proximoItem={materiaisDoPeriodo[indice + 1] ?? null}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <BarraInferior />
    </div>
  )
}
