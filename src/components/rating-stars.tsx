import { FaStar } from 'react-icons/fa'
import { cn } from 'src/lib/utils'

type RatingStarsProps = {
  rating: number
  className?: string
}

export default function RatingStars({ rating, className }: RatingStarsProps) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => {
        const starNumber = i + 1
        return (
          <FaStar
            key={i}
            color={starNumber <= Math.floor(rating) ? 'red' : '#999999'}
            className={cn(className)}
          />
        )
      })}
    </div>
  )
}
