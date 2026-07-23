import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export function useSupabaseQuery(table, options = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { select = '*', filter, order, limit, single } = options

  useEffect(() => {
    if (!supabase) {
      console.warn('Supabase is not configured')
      setLoading(false)
      return
    }

    const fetchData = async () => {
      try {
        setLoading(true)
        let query = supabase.from(table).select(select)

        if (filter) {
          query = query.match(filter)
        }
        if (order) {
          query = query.order(order.column, { ascending: order.ascending ?? true })
        }
        if (limit) {
          query = query.limit(limit)
        }
        if (single) {
          query = query.single()
        }

        const { data: result, error: queryError } = await query

        if (queryError) throw queryError
        setData(result)
        setError(null)
      } catch (err) {
        console.error(`Error fetching ${table}:`, err.message)
        setError(err.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [table, select, JSON.stringify(filter), JSON.stringify(order), limit, single])

  return { data, loading, error }
}

export function useSupabaseRealtime(table, callback) {
  useEffect(() => {
    if (!supabase) return

    const subscription = supabase
      .channel(`${table}-changes`)
      .on('postgres_changes', { event: '*', schema: 'public', table }, (payload) => {
        callback(payload)
      })
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [table, callback])
}