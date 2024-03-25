import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const FormCommentSchema = z.object({
  rating: z.string({
    required_error: 'Please select a rating.',
  }),
  comment: z
    .string({
      required_error: 'Please enter a comment.',
    })
    .min(10, 'Comment must be at least 10 characters long.'),
})

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
  phone: z.string().regex(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Invalid phone number.'),
  question: z
    .string()
    .min(6, 'Question must be at least 6 characters long.')
    .max(400, 'Question must be no more than 400 characters long.'),
})
