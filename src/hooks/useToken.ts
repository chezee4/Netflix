'use client'
import { useAccessTokenData } from 'src/store/auth-store'

export const useToken = () => {
  const data = useAccessTokenData()
  console.log(data)
  //   if (data === undefined) {
  //     throw new Error('Token is not defined')
  //   }

  return data
}
