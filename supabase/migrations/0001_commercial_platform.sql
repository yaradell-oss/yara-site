create extension if not exists vector with schema extensions;

create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  clerk_user_id text unique not null,
  email text,
  display_name text,
  locale text not null default 'ru',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists programs (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  summary text not null,
  required_entitlement text not null,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

create table if not exists content_items (
  id uuid primary key default gen_random_uuid(),
  program_id uuid references programs(id) on delete cascade,
  title text not null,
  content_type text not null,
  source_path text,
  required_entitlement text not null,
  is_public_preview boolean not null default false,
  approved_for_subscribers boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists content_chunks (
  id uuid primary key default gen_random_uuid(),
  content_item_id uuid references content_items(id) on delete cascade,
  chunk_index integer not null,
  content text not null,
  embedding extensions.vector(1536),
  required_entitlement text not null,
  created_at timestamptz not null default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  program_id uuid references programs(id),
  stripe_product_id text,
  stripe_price_id text,
  feature_lookup_key text not null,
  status text not null default 'active',
  created_at timestamptz not null default now()
);

create table if not exists entitlements (
  lookup_key text primary key,
  label text not null,
  description text,
  created_at timestamptz not null default now()
);

create table if not exists user_entitlements (
  id uuid primary key default gen_random_uuid(),
  clerk_user_id text not null,
  stripe_customer_id text,
  lookup_key text not null references entitlements(lookup_key),
  label text,
  active boolean not null default true,
  starts_at timestamptz not null default now(),
  ends_at timestamptz,
  updated_at timestamptz not null default now(),
  unique (clerk_user_id, lookup_key)
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  clerk_user_id text,
  stripe_customer_id text,
  stripe_checkout_session_id text unique,
  amount_total integer,
  currency text,
  status text not null,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  clerk_user_id text,
  stripe_customer_id text unique,
  stripe_subscription_id text,
  status text not null,
  active_entitlements text[] not null default '{}',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists chat_sessions (
  id uuid primary key default gen_random_uuid(),
  clerk_user_id text not null,
  title text,
  created_at timestamptz not null default now()
);

create table if not exists chat_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references chat_sessions(id) on delete cascade,
  role text not null,
  content text not null,
  citations jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists audit_events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null,
  actor_type text not null,
  actor_id text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table profiles enable row level security;
alter table programs enable row level security;
alter table content_items enable row level security;
alter table content_chunks enable row level security;
alter table user_entitlements enable row level security;
alter table orders enable row level security;
alter table subscriptions enable row level security;
alter table chat_sessions enable row level security;
alter table chat_messages enable row level security;

create index if not exists content_chunks_embedding_idx
  on content_chunks using ivfflat (embedding vector_cosine_ops);

create index if not exists user_entitlements_user_active_idx
  on user_entitlements (clerk_user_id, active);

create policy "Public can read active programs"
  on programs for select
  using (status in ('active', 'archive', 'coming-soon'));

create policy "Users can read their own entitlements"
  on user_entitlements for select
  using (clerk_user_id = current_setting('request.jwt.claims', true)::jsonb ->> 'sub');

create policy "Users can read public previews or entitled content"
  on content_items for select
  using (
    is_public_preview
    or required_entitlement in (
      select lookup_key
      from user_entitlements
      where clerk_user_id = current_setting('request.jwt.claims', true)::jsonb ->> 'sub'
        and active = true
    )
  );

create policy "Users can search entitled chunks"
  on content_chunks for select
  using (
    required_entitlement in (
      select lookup_key
      from user_entitlements
      where clerk_user_id = current_setting('request.jwt.claims', true)::jsonb ->> 'sub'
        and active = true
    )
  );

insert into entitlements (lookup_key, label, description) values
  ('program_blooming_garden_v2', 'Цветущий Сад v2', 'Доступ к программе Цветущий Сад v2'),
  ('library_evergreen', 'Evergreen library', 'Архив старших программ'),
  ('concierge_basic', 'Agatha concierge basic', 'Базовый concierge'),
  ('concierge_plus', 'Agatha concierge plus', 'Расширенный concierge'),
  ('admin_content_access', 'Admin content access', 'Внутренний доступ')
on conflict (lookup_key) do nothing;
