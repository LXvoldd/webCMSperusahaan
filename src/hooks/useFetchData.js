import { useState, useEffect } from 'react'
import { fetchData } from '../lib/supabaseClient'

export const useFetchData = (table, query = {}, deps = []) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const { data: result, error: fetchError } = await fetchData(table, query)
        
        if (fetchError) throw fetchError
        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, deps)

  return { data, loading, error }
}