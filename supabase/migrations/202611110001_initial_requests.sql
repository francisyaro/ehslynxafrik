-- EHS LYNX AFRIK: MVP commercial request persistence.
-- All writes are restricted to the server-side service role. Public web users do not receive SQL table privileges.
create extension if not exists pgcrypto;

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique default ('ELX-C-' || to_char(now(), 'YYMMDD') || '-' || upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 6))),
  kind text not null check (kind in ('contact', 'expertise')),
  full_name text not null,
  email text not null,
  organization text not null default '',
  phone text not null default '',
  country text not null default '',
  subject text not null,
  message text not null,
  status text not null default 'new' check (status in ('new', 'in_progress', 'completed', 'closed')),
  created_at timestamptz not null default now()
);

create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique default ('ELX-Q-' || to_char(now(), 'YYMMDD') || '-' || upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 6))),
  full_name text not null,
  email text not null,
  organization text not null,
  phone text not null,
  country text not null,
  message text not null default '',
  status text not null default 'new' check (status in ('new', 'in_progress', 'quoted', 'completed', 'closed')),
  created_at timestamptz not null default now()
);

create table if not exists public.quote_request_items (
  id uuid primary key default gen_random_uuid(),
  quote_request_id uuid not null references public.quote_requests(id) on delete cascade,
  product_slug text not null,
  product_name text not null,
  brand text not null,
  quantity integer not null check (quantity between 1 and 99),
  created_at timestamptz not null default now()
);

create index if not exists contact_requests_created_at_idx on public.contact_requests(created_at desc);
create index if not exists quote_requests_created_at_idx on public.quote_requests(created_at desc);
create index if not exists quote_request_items_quote_request_id_idx on public.quote_request_items(quote_request_id);

alter table public.contact_requests enable row level security;
alter table public.quote_requests enable row level security;
alter table public.quote_request_items enable row level security;

-- No anon/authenticated policy is deliberately created: public access is denied.
revoke all on public.contact_requests from anon, authenticated;
revoke all on public.quote_requests from anon, authenticated;
revoke all on public.quote_request_items from anon, authenticated;

create or replace function public.create_quote_request(request_payload jsonb)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  new_id uuid;
  new_reference text;
  line_count integer;
begin
  if jsonb_typeof(request_payload->'items') is distinct from 'array' then
    raise exception 'Invalid items';
  end if;
  line_count := jsonb_array_length(request_payload->'items');
  if line_count < 1 or line_count > 25 then
    raise exception 'Invalid quote item count';
  end if;
  if exists (select 1 from jsonb_to_recordset(request_payload->'items') as x(product_slug text, product_name text, brand text, quantity integer)
             where x.quantity not between 1 and 99 or x.quantity is null) then
    raise exception 'Invalid item quantity';
  end if;
  insert into public.quote_requests(full_name, email, organization, phone, country, message)
  values (request_payload->>'full_name', request_payload->>'email', request_payload->>'organization', request_payload->>'phone', request_payload->>'country', coalesce(request_payload->>'message', ''))
  returning id, reference into new_id, new_reference;
  insert into public.quote_request_items(quote_request_id, product_slug, product_name, brand, quantity)
  select new_id, x.product_slug, x.product_name, x.brand, x.quantity
  from jsonb_to_recordset(request_payload->'items') as x(product_slug text, product_name text, brand text, quantity integer);
  return new_reference;
end;
$$;

revoke all on function public.create_quote_request(jsonb) from PUBLIC, anon, authenticated;
grant execute on function public.create_quote_request(jsonb) to service_role;
