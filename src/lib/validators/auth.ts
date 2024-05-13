import { z } from 'zod'

export const AuthSignUpValiador = z.object({
  email: z.string().email({ message: 'Please provide a valid email address' }),
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
})

export type TAuthSignUpValiador = z.infer<typeof AuthSignUpValiador>

export const AuthSignInValiador = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
})

export type TAuthSignInValiador = z.infer<typeof AuthSignInValiador>
