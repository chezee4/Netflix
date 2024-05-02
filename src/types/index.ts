import { StaticImageData } from 'next/image'
import { users } from 'src/config/users'

export type Film = {
  title: string
  duration: string
  img: StaticImageData
  numberOfViews: string
}

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

export type User = (typeof users)[number]

export type Comment = {
  id: string
  name: string
  country: string
  comment: string
  rating: number
}

export type Actor = {
  id: string
  name: string
  country: string
  avatar: string
}

export type Rating = {
  IMDb: string
  Streamvibe: string
}

export type Director = {
  name: string
  country: string
  avatar: string
}

export type Music = {
  name: string
  country: string
  avatar: string
}

export type Movie = {
  id: string
  title: string
  releasedYear: number
  poster: string
  videoUrl: string
  description: string
  comments: Comment[]
  actors: Actor[]
  availableLanguages: string[]
  genres: string[]
  rating: Rating
  director: Director
  music: Music
}
