'use client'

import { useRef, useState } from 'react'
import comum from '../_ui/comum.module.css'
import styles from './page.module.css'

// Código de turma em 6 casas, uma por dígito — substitui o campo de
// texto único que EntrarComCodigo.js usava. Ainda sem validação real
// (não há Supabase ligado ao jogo): qualquer 6 caracteres viram o
// :codigo da rota dinâmica que já existe, igual antes.
export default function CodigoTurma() {
  const [digitos, setDigitos] = useState(['', '', '', '', '', ''])
  const refs = useRef([])

  function handleChange(indice, valor) {
    const caractere = valor.slice(-1).toUpperCase()
    setDigitos((anteriores) => {
      const novos = [...anteriores]
      novos[indice] = caractere
      return novos
    })
    if (caractere && indice < 5) refs.current[indice + 1]?.focus()
  }

  function handleKeyDown(indice, evento) {
    if (evento.key === 'Backspace' && !digitos[indice] && indice > 0) {
      refs.current[indice - 1]?.focus()
    }
  }

  function handleSubmit(evento) {
    evento.preventDefault()
    const codigo = digitos.join('').trim()
    if (codigo.length < 6) return
    window.location.href = `/simulacao/${encodeURIComponent(codigo)}`
  }

  return (
    <form onSubmit={handleSubmit} className={styles.codigoForm}>
      <div className={styles.codigoCaixas}>
        {digitos.map((digito, indice) => (
          <input
            key={indice}
            ref={(el) => {
              refs.current[indice] = el
            }}
            className={styles.codigoCaixa}
            value={digito}
            onChange={(evento) => handleChange(indice, evento.target.value)}
            onKeyDown={(evento) => handleKeyDown(indice, evento)}
            maxLength={1}
            inputMode="text"
            autoComplete="off"
            aria-label={`Dígito ${indice + 1} do código`}
          />
        ))}
      </div>
      <button type="submit" className={`${comum.btn} ${styles.codigoBotao}`}>
        Entrar na sala
      </button>
    </form>
  )
}
