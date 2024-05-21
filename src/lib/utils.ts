import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'
import { jwtDecode } from 'jwt-decode'

export const getUserIdFromToken = (accessToken: string) => jwtDecode(accessToken)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const createQueryParamsString = (query: { [key: string]: string }) => {
  const queryParams = new URLSearchParams()

  Object.entries(query).forEach(([key, value]) => {
    queryParams.append(key, value)
  })

  return queryParams.toString()
}

export const createUrlPath = (
  URL: string,
  params: string | null = '',
  query = {},
) => {
  const queryParams = createQueryParamsString(query)
  const queryParamsString = queryParams ? `?${queryParams}` : ''
  const paramsString = params ? `/${params}` : ''

  return `${URL}${paramsString}${queryParamsString}`
}

export const formatViewsNumber = (number: number) => {
  if (number >= 1000) {
    const formattedNumber = (number / 1000).toFixed(1)
    return parseFloat(formattedNumber) + 'k'
  } else {
    return number
  }
}

export const formatDuration = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  if (hours > 0) {
    return `${hours}год. ${remainingMinutes > 0 ? remainingMinutes + 'хв' : ''}`
  } else {
    return `${minutes}хв`
  }
}
