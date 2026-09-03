'use client'

import { useRouter } from 'next/navigation'
import RepublicaVelha from '../_conteudo/RepublicaVelha.js'
import AbsolutismoEMercantilismo from '../_conteudo/AbsolutismoEMercantilismo.js'

// Cada linha do tempo é um componente próprio (o conteúdo é curado demais
// para valer a pena um schema genérico só para reaproveitar 1 vez) — este
// mapa é só o roteador entre o slug da URL e o componente certo.
const LINHAS_DO_TEMPO = {
  'republica-velha': RepublicaVelha,
  'absolutismo-e-mercantilismo': AbsolutismoEMercantilismo,
}

export default function PaginaLinhaDoTempo({ params }) {
  const router = useRouter()
  const Componente = LINHAS_DO_TEMPO[params.slug]

  if (!Componente) {
    return (
      <div style={{ padding: '80px 24px', textAlign: 'center' }}>
        <p>Linha do tempo não encontrada.</p>
        <a href="/linha-do-tempo">← Voltar</a>
      </div>
    )
  }

  return <Componente onSair={() => router.push('/linha-do-tempo')} />
}
