import IMG1 from 'src/../public/IMG1.jpg'
import IMG2 from 'src/../public/IMG2.jpg'
import IMG3 from 'src/../public/IMG3.jpg'
import IMG4 from 'src/../public/IMG4.jpg'

import { Film } from 'src/types/index'

export const list: Film[] = [
  {
    title: 'Shawshank Redemption',
    duration: '45min',
    img: IMG1,
    numberOfViews: '2K',
  },
  {
    title: 'It іs a Wonderful Life',
    duration: '1h 30min',
    img: IMG2,
    numberOfViews: '3K',
  },
  {
    title: 'Back to the Future',
    duration: '1h',
    img: IMG3,
    numberOfViews: '1.5K',
  },
  {
    title: 'The Usual Suspects',
    duration: '2h 10min',
    img: IMG4,
    numberOfViews: '860',
  },
  {
    title: 'Witness for Prosecution',
    duration: '1h 10min',
    img: IMG2,
    numberOfViews: '2.5k',
  },
  {
    title: 'Back to the Future',
    duration: '50min',
    img: IMG4,
    numberOfViews: '160',
  },
  {
    title: 'The Dark Knight Rises',
    duration: '2h 10min',
    img: IMG3,
    numberOfViews: '860',
  },
  {
    title: 'It іs a Wonderful Life',
    duration: '5h 10min',
    img: IMG2,
    numberOfViews: '2.3K',
  },
]
