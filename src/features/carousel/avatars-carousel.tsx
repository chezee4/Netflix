'use client'

import { actors } from 'src/config/film/actors'
import Avatar from 'src/components/ui/avatar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselPagination,
} from 'src/components/ui/carousel'

export default function CarouselAvatars() {
  return (
    <div className="px-5 sm:px-10 pt-10 pb-6 max-w-[820px] w-full mx-auto  bg-black-10 border-black-15 border rounded-xl mb-10 ">
      <div className=" relative">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="max-w-[800px]"
        >
          <div className=" flex justify-between items-center mb-5">
            <h3 className=" text-gray-65 text-lg leading-[150%] font-bold">Cast</h3>
            <div className="flex items-center gap-3">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <CarouselContent>
            {actors.map((actor, index) => (
              <CarouselItem key={index} className="basis-auto lg:basis-[12.25%]">
                <Avatar
                  avatar={actor.avatar}
                  name={actor.name}
                  className=" mx-auto mm:mx-0"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mx-auto sm:mt-5 w-fit">
            <CarouselPagination className="hidden sm:flex " />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
