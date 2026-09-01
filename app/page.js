import styles from './page.module.css'
import EntrarComCodigo from './EntrarComCodigo.js'

export default function Home() {
  return (
    <div className={styles.wrap}>

      <div className={styles.dateline}>
        <span>Aulas de História · Ensino Médio</span>
        <span>Simulação social de turma</span>
        <span>Edição do professor</span>
      </div>

      <header className={styles.masthead}>
        <h1>Histórificando</h1>
        <div className={styles.sub}>Simulações, fontes e debate para a aula de História</div>
      </header>

      <nav className={styles.tabs}>
        <a href="#simulacoes">Simulações</a>
        <a href="#conteudos">Conteúdos</a>
        <a href="/fonte-ou-boato">Fonte ou boato?</a>
        <a href="/juri">Júri histórico</a>
        <a href="#professor">Professor</a>
      </nav>

      <section className={`${styles.row} ${styles.hero}`}>
        <div className={styles.col}>
          <div className={styles.kicker}>A aula de hoje</div>
          <h2 className={styles.lede}>&ldquo;Quem foi que decidiu que o pão ia custar o dobro?&rdquo;</h2>
          <p className={styles.bodyText}>
            Cada aluno é sorteado para uma posição social dentro de uma crise histórica real —
            operário, comerciante, jornalista, tenente — e decide rodada após rodada com o que
            aquela posição sabe e pode. Ninguém vê o tabuleiro inteiro.
          </p>
          <p className={`${styles.bodyText} ${styles.muted}`}>
            No fim, a turma descobre o resultado: greve, acordo, repressão ou silêncio. O desfecho
            é da turma inteira, não de um aluno. A discussão começa aí.
          </p>
          <div className={styles.acoes}>
            <a className={styles.btn} href="/simulacao/DEMO01">Jogar uma simulação <span className={styles.arrow}>→</span></a>
            <a className={styles.linkStrong} href="#professor">Entrar com código de turma</a>
          </div>
        </div>
        <div className={styles.col}>
          <div className={`${styles.plate} ${styles.heroPlate}`}>
            <div className={styles.frame}>Foto de arquivo — manifestação ou primeira página de jornal de época</div>
          </div>
          <div className={styles.caption}>Arquivo. Legenda da imagem de abertura.</div>
        </div>
      </section>

      <div className={styles.sectionHead} id="simulacoes">
        <h2>Três simulações jogáveis</h2>
        <div className={styles.meta}>15–20 min · turma inteira</div>
      </div>

      <section className={`${styles.row} ${styles.three}`}>
        <a className={`${styles.col} ${styles.card}`} href="/simulacao/DEMO01">
          <div className={`${styles.plate} ${styles.cardPlate}`}><div className={styles.frame}>Greve de 1917</div></div>
          <div className={`${styles.kicker} ${styles.tnum}`}>01 · 1917</div>
          <h3>São Paulo, 1917</h3>
          <p>A greve geral vista de dentro da fábrica, da redação e do palácio. Salário, pão e polícia na mesma semana.</p>
          <span className={styles.linkArrow}>Jogar →</span>
        </a>
        <a className={`${styles.col} ${styles.card}`} href="/simulacao/DEMO01">
          <div className={`${styles.plate} ${styles.cardPlate}`}><div className={styles.frame}>Voto de cabresto</div></div>
          <div className={`${styles.kicker} ${styles.tnum}`}>02 · República Velha</div>
          <h3>Coronelismo e voto de cabresto</h3>
          <p>Uma eleição no interior: quem deve favor a quem, e o que custa votar contra o coronel.</p>
          <span className={styles.linkArrow}>Jogar →</span>
        </a>
        <a className={`${styles.col} ${styles.card}`} href="/simulacao/DEMO01">
          <div className={`${styles.plate} ${styles.cardPlate}`}><div className={styles.frame}>Plano Cohen, 1937</div></div>
          <div className={`${styles.kicker} ${styles.tnum}`}>03 · 1937</div>
          <h3>Plano Cohen</h3>
          <p>Um documento falso circula. A turma decide o que publicar, o que acreditar e o que fazer com o medo.</p>
          <span className={styles.linkArrow}>Jogar →</span>
        </a>
      </section>

      <section className={`${styles.row} ${styles.three} ${styles.ruleHeavy}`}>
        <div className={styles.col} id="conteudos">
          <div className={styles.kicker}>Antes de jogar</div>
          <h3 className={styles.small}>Conteúdos</h3>
          <p className={styles.justify}>Vídeos curtos e leituras selecionadas para cada simulação, mais os materiais alternativos indicados pelo professor.</p>
          <a className={styles.linkArrow} href="/materiais">Ver vídeos e leituras →</a>
        </div>
        <div className={styles.col} id="cartas">
          <div className={styles.kicker}>Jogo de cartas</div>
          <h3 className={styles.small}>Fonte ou boato?</h3>
          <p className={styles.justify}>Uma carta por vez: manchete, panfleto, telegrama, ofício. A turma julga o que é fonte confiável e o que é boato.</p>
          <a className={styles.linkArrow} href="/fonte-ou-boato">Abrir o baralho →</a>
        </div>
        <div className={styles.col} id="juri-card">
          <div className={styles.kicker}>Atividade em grupo</div>
          <h3 className={styles.small}>Júri histórico</h3>
          <p className={styles.justify}>Cada time recebe um conjunto de evidências e só pode argumentar com o que tem em mãos. O resto é defesa.</p>
          <a className={styles.linkArrow} href="/juri">Montar o júri →</a>
        </div>
      </section>

      <section className={`${styles.row} ${styles.two}`} id="professor">
        <div className={styles.col}>
          <h3 className={styles.small}>Para o professor</h3>
          <p className={styles.justify}>Abra uma sala, gere o código de turma e acompanhe as rodadas pelo painel. Os alunos entram pelo código, sem cadastro.</p>
          <div className={styles.acoes}>
            <a className={`${styles.btn} ${styles.btnSecondary}`} href="/professor">Painel do professor</a>
            <a className={`${styles.btn} ${styles.btnGhost}`} href="/materiais">Materiais alternativos</a>
          </div>
        </div>
        <div className={styles.col}>
          <h3 className={styles.small}>Entrar na sala</h3>
          <p className={styles.justify}>Alunos: digite o código que o professor projetou na lousa.</p>
          <EntrarComCodigo />
        </div>
      </section>

      <div className={styles.status}>
        <span className={styles.label}>Estado do módulo</span>
        <span>Motor de sorteio e agregação — testado</span>
        <span>Banco de dados (Supabase) — schema aplicado, ainda não ligado ao jogo</span>
        <span>Painel do professor e código de turma — em desenvolvimento</span>
      </div>

      <div className={styles.colophon}>Histórificando · Currículo em Ação · Simulação social de turma</div>

    </div>
  )
}
