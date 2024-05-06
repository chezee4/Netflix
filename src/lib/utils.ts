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

export const UploadMovieFormSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters long.')
    .max(50, 'Title must be no more than 50 characters long.'),
  releasedYear: z.number().int().min(1900, 'Year must be at least 1900.'),
  poster: z.any().refine(val => val.length > 0, 'File is required'),
  videoUrl: z.any().refine(val => val.length > 0, 'File is required'),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters long.')
    .max(400, 'Description must be no more than 400 characters long.'),
  actors: z.array(
    z.object({
      name: z.string(),
      country: z.string(),
      avatar: z.any().refine(val => val.length > 0, 'File is required'),
    }),
  ),
  availableLanguages: z.array(z.string()),
  genres: z.array(z.string()),
  rating: z.object({
    IMDb: z.string(),
    Streamvibe: z.string(),
  }),
  director: z.object({
    name: z.string(),
    country: z.string(),
    avatar: z.any().refine(val => val.length > 0, 'File is required'),
  }),
  music: z.object({
    name: z.string(),
    country: z.string(),
    avatar: z.any().refine(val => val.length > 0, 'File is required'),
  }),
})

export const initialValues = {
  title: '',
  releasedYear: '',
  poster: new FormData(),
  videoUrl: new FormData(),
  description: '',
  actors: [
    {
      name: '',
      country: '',
      avatar: new FormData(),
    },
  ],
  availableLanguages: [],
  genres: [],
  rating: {
    IMDb: '',
    Streamvibe: '',
  },
  director: {
    name: '',
    country: '',
    avatar: new FormData(),
  },
  music: {
    name: '',
    country: '',
    avatar: new FormData(),
  },
}
export type TUpladMovieFormSchema = z.infer<typeof UploadMovieFormSchema>

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
