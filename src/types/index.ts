import { StaticImageData } from 'next/image'
import { users } from 'src/config/users'

export type FileDescriptionT = {
  releasedYear: number
  availableLanguages: string[]
  genres: string[]
  rating: {
    IMDb: string
    Streamvibe: string
  }
  director: {
    name: string
    country: string
    avatar: StaticImageData
  }
  music: {
    name: string
    country: string
    avatar: StaticImageData
  }
}

export  type User = (typeof users)[number]