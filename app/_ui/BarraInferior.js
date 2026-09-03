'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './BarraInferior.module.css'

const ITENS = [
  { href: '/', rotulo: 'Início', ativo: (p) => p === '/' },
  { href: '/estudar', rotulo: 'Estudar', ativo: (p) => p.startsWith('/estudar') },
  { href: '/turma', rotulo: 'Turma', ativo: (p) => p.startsWith('/turma') },
]

// Barra fixa das páginas "papel" da navegação por período (Início,
// Estudar, Turma) — ver docs/plano-navegacao-por-periodo.md. Substitui
// os "← Voltar" soltos que cada página inventava por conta própria.
// Não aparece nas páginas "cinema" (linha do tempo, simulação), que já
// têm sua própria casca de saída (✕ / Dock); nem em /simulacoes,
// /materiais, /linha-do-tempo (hub), que continuam como listas simples.
export default function BarraInferior() {
  const pathname = usePathname()

  return (
    <nav className={styles.barra} aria-label="Navegação principal">
      {ITENS.map((item) => {
        const ativo = item.ativo(pathname)
        return (
          <Link
            key={item.href}
            href={item.href}
            className={ativo ? `${styles.item} ${styles.itemAtivo}` : styles.item}
            aria-current={ativo ? 'page' : undefined}
          >
            {item.rotulo}
          </Link>
        )
      })}
    </nav>
  )
}
