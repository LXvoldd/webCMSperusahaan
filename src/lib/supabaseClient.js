import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Check if Supabase is configured
const isSupabaseConfigured = supabaseUrl && supabaseAnonKey

// Create client only if configured
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
      db: {
        schema: 'public',
      },
    })
  : null

// Safe fetch function
export const fetchData = async (table, query = {}) => {
  if (!supabase) {
    console.warn('Supabase is not configured. Using mock data.')
    return { data: null, error: new Error('Supabase not configured') }
  }

  try {
    let request = supabase.from(table).select(query.select || '*')
    
    if (query.order) {
      request = request.order(query.order.column, { 
        ascending: query.order.ascending ?? true 
      })
    }
    
    if (query.limit) {
      request = request.limit(query.limit)
    }
    
    if (query.filter) {
      request = request.match(query.filter)
    }
    
    const { data, error } = await request
    
    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error(`Error fetching ${table}:`, error.message)
    return { data: null, error }
  }
}

export const getPublicUrl = (bucket, path) => {
  if (!supabase) return ''
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return data.publicUrl
}