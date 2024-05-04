import { FileDescriptionT } from 'src/types'
import avatar from 'src/../public/film/actors/Image-1.png'

export const filmDescription: FileDescriptionT = {
  releasedYear: 2022,
  availableLanguages: ['Англійська', 'Гінді', 'Таміл', 'Телугу', 'Каннада'],
  genres: ['Екшн', 'Пригоди', 'Драма'],
  rating: {
    IMDb: '4',
    Streamvibe: '5',
  },
  director: {
    name: 'Рішаб Шетті',
    country: 'Індія',
    avatar: avatar,
  },
  music: {
    name: 'Б. Аджаніш Локнат',
    country: 'Індія',
    avatar: avatar,
  },
}
