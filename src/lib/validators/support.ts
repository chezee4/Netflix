import { z } from 'zod'

export const SupportFormSchema = z.object({
  firstName: z
    .string()
    .min(3, 'First Name must be at least 3 characters long.')
    .max(18, 'First Name must be no more than 18 characters long.'),
  lastName: z
    .string()
    .min(3, 'Last Name must be at least 3 characters long.')
    .max(18, 'Last Name must be no more than 18 characters long.'),
  email: z.string().email('Invalid email address.'),
  phoneNumber: z
    .string()
    .regex(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Invalid phone number.'),
  message: z
    .string()
    .min(6, 'Question must be at least 6 characters long.')
    .max(400, 'Question must be no more than 400 characters long.'),
})

export type TSupportFormSchema = z.infer<typeof SupportFormSchema>
