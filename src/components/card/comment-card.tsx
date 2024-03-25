import Chap from 'src/components/ui/chap'
import RatingStars from 'src/components/rating-stars'

type CommentCardProps = {
  name: string
  cauntry: string
  rating: number
  comment: string
}

export const CommentCard: React.FC<CommentCardProps> = ({
  name,
  cauntry,
  rating,
  comment,
}) => {
  return (
    <div className=" h-full bg-black-6 border-black-15 border rounded-xl px-6 py-10 lg:p-10">
      <div className="flex justify-between items-center gap-2 mb-6">
        <div>
          <h4 className="text-white text-sm sm:text-xl font-medium line-clamp-1">
            {name}
          </h4>
          <span className="text-sm md:text-base text-gray-65 font-medium">
            {cauntry}
          </span>
        </div>
        <Chap className="px-3 gap-2 ">
          <RatingStars
            rating={rating}
            className=" text-xs xs:text-base sm:text-xs md:text-base"
          />
          <span className="text-gray-60 text-base md:text-lg ">{rating}</span>
        </Chap>
      </div>
      <p className="text-gray-60 text-xs sm:text-sm line-clamp-3">{comment}</p>
    </div>
  )
}
