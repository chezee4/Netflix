import { FileDescriptionT } from 'src/types'
import avatar from 'src/../public/film/actors/Image-1.png'

export const filmDescription: FileDescriptionT = {
  releasedYear: 2022,
  availableLanguages: ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada'],
  genres: ['Action', 'Adventure', 'Drama'],
  rating: {
    IMDb: '4',
    Streamvibe: '5',
  },
  director: {
    name: 'Rishab Shetty',
    country: 'India',
    avatar: avatar,
  },
  music: {
    name: 'B. Ajaneesh Loknath',
    country: 'India',
    avatar: avatar,
  },
}
