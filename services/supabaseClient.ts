
import { createClient } from '@supabase/supabase-js';

// Project URL: https://xrtdygdqviaoouodwzsv.supabase.co
const supabaseUrl = process.env.SUPABASE_URL || 'https://xrtdygdqviaoouodwzsv.supabase.co';
// API Key: sb_publishable_UA3uvt4AMu1u2o5BSag7pQ_KVvl2RG9
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'sb_publishable_UA3uvt4AMu1u2o5BSag7pQ_KVvl2RG9';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
