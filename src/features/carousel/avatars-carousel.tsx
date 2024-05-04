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
import { ContentWrapper } from 'src/layouts/content-wrapper'

export default function CarouselAvatars() {
  return (
    <ContentWrapper variant="carousel" className=" max-w-[820px] ">
      <div className=" relative">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="max-w-[800px]"
        >
          <div className=" flex justify-between items-center mb-5">
            <h3 className=" text-gray-65 text-lg leading-[150%] font-bold">
              Актори
            </h3>
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
    </ContentWrapper>
  )
}
