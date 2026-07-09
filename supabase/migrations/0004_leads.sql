-- Lead capture: newsletter subscriptions + contact requests.
-- Forms were decorative until 2026-07-09; this table is the owned list
-- that the marketing plan builds on. referral_code is forward-compat
-- with the attribution cookie (Phase 2 of the referral build).

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('newsletter', 'contact')),
  email text not null,
  name text,
  message text,
  locale text not null default 'ru',
  source_path text,
  referral_code text,
  created_at timestamptz not null default now()
);

create index if not exists leads_kind_created_idx on leads (kind, created_at desc);
create index if not exists leads_email_idx on leads (email);

alter table leads enable row level security;
-- no policies: service-role access only, matching the platform convention
