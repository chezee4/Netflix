import { ReactElement } from 'react'
import { StaticImageData } from 'next/image'
import { users } from 'src/config/users'

export enum ProfileTabsEnum {
  Profile = 'profile',
  Favorites = 'favorites',
  EditProfile = 'edit-profile',
}

export type ProfileTab = {
  title: string
  content: ReactElement
  icon: ReactElement
}

export type ProfileTabsData = {
  [key in ProfileTabsEnum]: ProfileTab
}

export type Film = {
  id: string
  title: string
  alt: string
  duration: number
  banner: StaticImageData
  viewsNumber: number
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

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export type UserType = {
  id: string
  username: string
  password: string
  email: string
  role: Role
  avatar: string
  bio: string | null
  telNumber: string | null
  favorites: Film[] | null
}

export type UserProfileFormType = Omit<
  UserType,
  'id' | 'password' | 'role' | 'avatar' | 'favorites'
>

export type UserAdminFormType = {
  username: string
  email: string
  password: string
  role: Role
}

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
