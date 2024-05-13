// import { NextRequest, NextResponse } from 'next/server'
import ky, { ResponsePromise } from 'ky'
import { getActions } from 'src/store/auth-store'

interface SignUp {
  username: string
  email: string
  password: string
}

type SignIn = {
  username: string
  password: string
}

interface SignInResponse {
  accessToken: string
}

export const authService = {
  signUp: (credentials: SignUp): ResponsePromise => {
    return ky.post(`${process.env.NEXT_PUBLIC_NETFLIX_API_URL}auth/signup`, {
      json: credentials,
    })
  },
  signIn: async (credentials: SignIn): Promise<string> => {
    const response = await ky.post(
      `${process.env.NEXT_PUBLIC_NETFLIX_API_URL}auth/signin`,
      {
        json: credentials,
      },
    )
    if (!response.ok) {
      throw new Error('Failed to sign in')
    }
    const data: SignInResponse = await response.json()
    return data.accessToken
  },
}
