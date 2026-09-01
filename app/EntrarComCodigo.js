'use client'

import { useState } from 'react'
import styles from './page.module.css'

// Client component isolado só porque precisa de estado — o resto da home
// continua um server component simples. Sem validação de código real
// ainda (não há Supabase ligado ao jogo); qualquer texto vira o :codigo
// da rota dinâmica que já existe.
export default function EntrarComCodigo() {
  const [codigo, setCodigo] = useState('')

  function handleSubmit(evento) {
    evento.preventDefault()
    const valor = codigo.trim()
    if (!valor) return
    window.location.href = `/simulacao/${encodeURIComponent(valor)}`
  }

  return (
    <form className={styles.acoes} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        name="codigo"
        placeholder="Código da turma"
        aria-label="Código da turma"
        value={codigo}
        onChange={(evento) => setCodigo(evento.target.value)}
      />
      <button className={styles.btn} type="submit">Entrar</button>
    </form>
  )
}
