import { createClient } from '@supabase/supabase-js';

let client;

export default function getSupabase() {
  if (!client) {
    client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );
  }
  return client;
}
