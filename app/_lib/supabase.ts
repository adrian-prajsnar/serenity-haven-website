import { createClient } from '@supabase/supabase-js';
import { Database } from '../_types/database.types';

export const supabase = createClient<Database>(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);
