import 'server-only'
import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Client com a service role key — ignora RLS. Só para Server
// Components/Route Handlers do painel do professor. O `import 'server-only'`
// faz o build falhar se isso vazar para um componente de cliente.
export function criarClienteServidor() {
  if (!url || !serviceRoleKey) return null
  return createClient(url, serviceRoleKey, { auth: { persistSession: false } })
}
