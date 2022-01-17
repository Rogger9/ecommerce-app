import { useState, useEffect } from 'react'
import { Services } from '../services'
import { GenericKeyString } from '../types'

export const useFetch = ({ url }: GenericKeyString<string>) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    Services.fetchData(url)
      .then(res => setData(res))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}
