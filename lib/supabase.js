import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  "https://xnvnskxcsphbvkxhndui.supabase.co",
  "YOUR_ANON_KEY"
)
