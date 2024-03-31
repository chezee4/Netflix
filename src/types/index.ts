import { StaticImageData } from 'next/image'

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
