import { useState } from 'react'

export function useFormSubmit(submitFn) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (formData) => {
    try {
      setLoading(true)
      setError(null)
      setSuccess(false)
      
      await submitFn(formData)
      
      setSuccess(true)
      return true
    } catch (err) {
      setError(err.message)
      return false
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setLoading(false)
    setError(null)
    setSuccess(false)
  }

  return { handleSubmit, loading, error, success, reset }
}