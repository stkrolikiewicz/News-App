import useSWR from "swr"
import { fetcher } from '../lib/swr'
import { Data } from "../types"


const useCountryNews = (countryCode: string) => {
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY

  const swr = useSWR(`https://newsapi.org/v2/top-headlines?country=${countryCode}&pageSize=24&apiKey=${API_KEY}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 60 * 1000,
  })

  return {
    data: swr.data as Data,
    isLoading: swr.isLoading,
    isValidating: swr.isValidating,
    error: swr.error
  }
}

export default useCountryNews