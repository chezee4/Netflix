'use client'

import { CommentCard } from 'src/components/card/comment-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselPagination,
} from 'src/components/ui/carousel'
import { FormForAddComments } from '../form/comment-form'
import { ContentWrapper } from 'src/layouts/content-wrapper'

import type { Comment } from 'src/types'

type CarouselCommentsProps = {
  comments: Comment[]
}
export default function CarouselComments({ comments }: CarouselCommentsProps) {
  return (
    <ContentWrapper variant="carousel" className="max-w-[1040px]">
      <div className=" relative">
        <div className=" flex justify-between items-center mb-4">
          <h3 className=" text-gray-65 text-sm sm:text-lg leading-[150%] font-bold">
            Відгуки
          </h3>
          <FormForAddComments />
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
        >
          <CarouselContent>
            {comments.map(comment => (
              <CarouselItem key={comment.id} className="sm:basis-1/2 lg:basis-1/2">
                <CommentCard
                  name={comment.name}
                  cauntry={comment.country}
                  rating={comment.rating}
                  comment={comment.comment}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className=" hidden sm:flex justify-between items-center space-x-2 mx-auto mt-5 sm:mt-7 w-fit">
            <CarouselPrevious />
            <div>
              <CarouselPagination className="hidden sm:flex" />
            </div>
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </ContentWrapper>
  )
}
