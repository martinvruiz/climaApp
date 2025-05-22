import { useEffect } from 'react'
import useStore from '../../store/store'

const useAPI = (key) => {
  const location = useStore((state) => state.location)
  const setData = useStore((state) => state.setData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!key) throw new Error('API key is missing')
        if (!location) return
        const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`
        const response = await fetch(url)
        if (!response.ok) {
          const error = await response.json()
          throw new Error(`Error: ${error.error.message}`)
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [key, location, setData])
}

export default useAPI
