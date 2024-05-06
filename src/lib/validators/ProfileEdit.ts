import { z } from 'zod'

export const ProfileEditValiador = z.object({
  name: z
    .string()
    .min(5, {
      message: "Ім'я та прізвище повинно містити принаймні 2 символи.",
    })
    .max(35, {
      message: "Ім'я та прізвище не повинно бути довшим за 30 символів.",
    }),
  email: z
    .string()
    .email({ message: 'Будь ласка, введіть дійсну адресу електронної пошти.' }),
  bio: z.string({
    required_error: 'Будь ласка, введіть свою біографію.',
  }),
  phone: z.string().min(10, {
    message: 'Будь ласка, введіть дійсний номер телефону.',
  }),
  avatar: z.string().optional(),
})

export type TProfileEditValiador = z.infer<typeof ProfileEditValiador>
