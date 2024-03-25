'use client'

import { HiPlus } from 'react-icons/hi'
import { comments } from 'src/config/film/comments'

import { Button } from 'src/components/ui/button'
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

export default function CarouselComments() {
  return (
    <div className="px-2 sm:px-5 md:px-10 pb-5 pt-5 sm:pt-10 max-w-[920px] w-full mx-auto  bg-black-10 border-black-15 border rounded-xl mb-10 ">
      <div className=" relative">
        <div className=" flex justify-between items-center mb-5">
          <h3 className=" text-gray-65 text-sm sm:text-lg leading-[150%] font-bold">
            Reviews
          </h3>
          <FormForAddComments />
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
        >
          <CarouselContent>
            {comments.map((comment, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/2">
                <CommentCard
                  name={comment.name}
                  cauntry={comment.cauntry}
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
    </div>
  )
}
