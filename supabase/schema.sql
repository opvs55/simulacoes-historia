-- Módulo Simulações — schema inicial (GDD v2, seção 11.3)
--
-- A fonte de verdade é a tabela `decisoes`. `estado_cache` é derivável a
-- qualquer momento rodando lib/simulacao/motor.js sobre as decisões — pode
-- ser apagada e reconstruída sem perda de informação.
--
-- Sem dado pessoal de aluno: nenhuma coluna de e-mail, nome completo ou
-- idade. O aluno entra só com código de turma + apelido.

create extension if not exists pgcrypto;

create table turmas (
  id uuid primary key default gen_random_uuid(),
  professor_id uuid not null references auth.users (id) on delete cascade,
  nome text not null,
  codigo char(6) not null unique,
  criada_em timestamptz not null default now()
);

create table partidas (
  id uuid primary key default gen_random_uuid(),
  turma_id uuid not null references turmas (id) on delete cascade,
  cenario_slug text not null,
  cenario_versao int not null,
  abre_em timestamptz not null,
  fecha_em timestamptz not null,
  status text not null default 'aberta' check (status in ('aberta', 'fechada')),
  criada_em timestamptz not null default now()
);

create table participacoes (
  id uuid primary key default gen_random_uuid(),
  partida_id uuid not null references partidas (id) on delete cascade,
  apelido text not null,
  papel_slug text not null,
  entrou_em timestamptz not null default now(),
  unique (partida_id, apelido)
);

create table decisoes (
  id uuid primary key default gen_random_uuid(),
  participacao_id uuid not null references participacoes (id) on delete cascade,
  rodada text not null,
  opcao_slug text not null,
  justificativa text,
  criada_em timestamptz not null default now(),
  unique (participacao_id, rodada)
);

create table consultas (
  id uuid primary key default gen_random_uuid(),
  participacao_id uuid not null references participacoes (id) on delete cascade,
  rodada text not null,
  fonte_slug text not null,
  aberta_em timestamptz not null default now()
);

-- Derivado, descartável — nunca é a fonte de verdade (ver cabeçalho).
create table estado_cache (
  partida_id uuid not null references partidas (id) on delete cascade,
  rodada text not null,
  indicadores jsonb not null,
  calculado_em timestamptz not null default now(),
  primary key (partida_id, rodada)
);

create index decisoes_participacao_idx on decisoes (participacao_id);
create index consultas_participacao_idx on consultas (participacao_id);
create index participacoes_partida_idx on participacoes (partida_id);
create index partidas_turma_idx on partidas (turma_id);

alter table turmas enable row level security;
alter table partidas enable row level security;
alter table participacoes enable row level security;
alter table decisoes enable row level security;
alter table consultas enable row level security;
alter table estado_cache enable row level security;

-- RLS ligada, sem políticas ainda (estado do protótipo descrito na seção
-- 16.1 do GDD): sem uma política explícita, toda leitura/escrita pela chave
-- anônima fica bloqueada por padrão — só a service role key (usada em
-- lib/supabase/server.js, só no servidor) passa por cima disso.
--
-- Políticas de acesso (aluno lê só o agregado da própria partida e as
-- próprias decisões; professor lê tudo das próprias turmas) entram junto
-- com a decisão de como o aluno mantém sua sessão entre rodadas — em aberto,
-- ver a Fase 3 do roadmap (seção 14 do GDD).
