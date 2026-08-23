import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// null enquanto as chaves não estiverem configuradas — o "modo demonstração"
// descrito na seção 16.1 do GDD (repositório em memória) ainda não está
// implementado; por enquanto, telas que dependem do Supabase devem checar
// `modoDemonstracao` e mostrar um aviso em vez de quebrar.
export const supabase = url && anonKey ? createClient(url, anonKey) : null
export const modoDemonstracao = supabase === null
