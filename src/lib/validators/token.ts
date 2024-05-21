import { z } from 'zod'

export const TokenDataSchema = z.object({
  UserId: z.string(),
})

export type TokenData = z.infer<typeof TokenDataSchema>
