import { z } from 'zod'

export const ProfileEditValiador = z.object({
  username: z
    .string()
    .min(5, {
      message: "Ім'я та прізвище повинно містити принаймні 5 символів.",
    })
    .max(45, {
      message: "Ім'я та прізвище не повинно бути довшим за 45 символів.",
    }),
  email: z
    .string()
    .email({ message: 'Будь ласка, введіть дійсну адресу електронної пошти.' }),
  bio: z.string({
    required_error: 'Будь ласка, введіть свою біографію.',
  }),
  telNumber: z
    .string()
    .regex(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Недійсний номер телефону.'),
})

export type TProfileEditValiador = z.infer<typeof ProfileEditValiador>
