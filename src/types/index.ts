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
  favoriteMovies: Film[] | null
}

export type UserProfileFormType = Partial<UserType> & {
  favoriteMovieId?: string
}

export type UserAdminFormType = {
  username: string
  email: string
  password: string
  role: Role
}

export type Comment = {
  id: string
  name: string
  comment: string
  country: string
  rating: number
}

export type CommentFormType = Omit<Comment, 'id'>

export type Actor = {
  actor_id: string
  name: string
  avatar: string
}

export type Director = {
  id: string
  name: string
  avatar: string
  country: string
}

export type Music = {
  id: string
  name: string
  avatar: string
  country: string
}

export type MovieMedia = {
  id: string
  imageUrl: string
  videoUrl: string
  bannerUrl: string
}

export type Movie = {
  id: string
  title: string
  alt: string
  description: string
  releasedYear: number
  duration: number
  ratingIMDb: number
  ratingStreamVibe: number
  viewsNumber: number
  genres: string[]
  availableLanguages: string[]
  category: string[]
  actors: Actor[]
  director: Director
  musicDirector: Music
  comments: Comment[]
  movieMedia: MovieMedia
}
