import { z } from 'zod'
import { Role } from 'src/types'

export const UserFormSchrma = z.object({
  username: z.string(),
  email: z.string().email('Введіть коректний Email'),
  password: z
    .string()
    .min(3, 'Пароль повинен бути не менше 3 символів')
    .max(12, 'Пароль повинен бути не більше 12 символів'),
  role: z.nativeEnum(Role),
})

export type TUserFormSchema = z.infer<typeof UserFormSchrma>