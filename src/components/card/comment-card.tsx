import Chap from 'src/components/ui/chap'
import RatingStars from 'src/components/rating-stars'
import { ContentWrapper } from 'src/layouts/content-wrapper'

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
    <ContentWrapper variant="card" className=" h-full ">
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
    </ContentWrapper>
  )
}
