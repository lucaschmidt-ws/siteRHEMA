-- Estrutura inicial do mural público de testemunhos da RHEMA.
-- Execute no SQL Editor do Supabase quando o projeto estiver ativo.
-- Depois, permita a exposição de public.rhema_testimonies na Data API.
-- A equipe da RHEMA deve alterar status de 'pending' para 'published' após revisar cada relato.
-- A chave service_role nunca deve ser colocada no site.

create table if not exists public.rhema_testimonies (
  id uuid primary key default gen_random_uuid(),
  display_name text not null
    check (char_length(trim(display_name)) between 1 and 50),
  testimony text not null
    check (char_length(trim(testimony)) between 20 and 1200),
  status text not null default 'pending'
    check (status in ('pending', 'published')),
  created_at timestamptz not null default now()
);

alter table public.rhema_testimonies enable row level security;

grant usage on schema public to anon, authenticated;
revoke all on table public.rhema_testimonies from anon, authenticated;
grant select (id, display_name, testimony, created_at)
  on table public.rhema_testimonies to anon, authenticated;
grant insert (display_name, testimony)
  on table public.rhema_testimonies to anon, authenticated;

drop policy if exists "Anyone can read approved RHEMA testimonies"
  on public.rhema_testimonies;
create policy "Anyone can read approved RHEMA testimonies"
  on public.rhema_testimonies
  for select
  to anon, authenticated
  using (status = 'published');

drop policy if exists "Visitors can submit pending RHEMA testimonies"
  on public.rhema_testimonies;
create policy "Visitors can submit pending RHEMA testimonies"
  on public.rhema_testimonies
  for insert
  to anon, authenticated
  with check (status = 'pending');
