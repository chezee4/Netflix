import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

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
