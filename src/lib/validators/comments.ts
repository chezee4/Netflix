import { z } from 'zod'

export const FormCommentSchema = z.object({
  rating: z.string({
    required_error: 'Будь ласка, вкажіть рейтинг.',
  }),
  comment: z
    .string({
      required_error: 'Будь ласка, залиште коментар.',
    })
    .min(10, 'Коментар повинен містити принаймні 10 символів.')
    .max(200, 'Коментар не повинен бути довшим за 200 символів.'),
})

export type TFormCommentSchema = z.infer<typeof FormCommentSchema>
