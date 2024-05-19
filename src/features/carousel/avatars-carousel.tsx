'use client'

import Avatar from 'src/components/ui/avatar-actore'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselPagination,
} from 'src/components/ui/carousel'
import { ContentWrapper } from 'src/layouts/content-wrapper'

import type { Actor } from 'src/types'

type CarouselAvatarsProps = {
  actors: Actor[]
}
export default function CarouselAvatars({ actors }: CarouselAvatarsProps) {
  return (
    <ContentWrapper variant="carousel" className=" max-w-[1040px] ">
      <div className=" relative">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full"
        >
          <div className=" flex justify-between items-center mb-4">
            <h3 className=" text-gray-65 text-lg leading-[150%] font-bold">
              Актори
            </h3>
            <div className="flex items-center gap-3">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <CarouselContent>
            {actors.map(actor => (
              <CarouselItem
                key={actor.actor_id}
                className="basis-auto lg:basis-[12.20%]"
              >
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
