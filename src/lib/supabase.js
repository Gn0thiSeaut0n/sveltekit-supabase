import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://lpogfzscnrjqrgfjxmxl.supabase.co';
const SUPABASE_PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwb2dmenNjbnJqcXJnZmp4bXhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyNTYxNTQsImV4cCI6MTk5MzgzMjE1NH0.SmpH-k0whchd-fSQKb9eyQxsqpOmUi0kj7H_p-JUCEk';

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);

export default supabase;