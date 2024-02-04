import { FaStar } from 'react-icons/fa'
import type { RatingStarsProps } from './types'

export default function RatingStars({ rating, size = 20 }: RatingStarsProps) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => {
        const starNumber = i + 1
        return (
          <FaStar
            key={i}
            color={starNumber <= Math.floor(rating) ? 'red' : '#999999'}
            size={size}
          />
        )
      })}
    </div>
  )
}
