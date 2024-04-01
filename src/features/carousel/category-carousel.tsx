import CardLayout from 'src/layouts/card-layout'
import CardBodyImage from 'src/components/card/card-body-image'
import CardFooter from 'src/components/card/card-footer'
import Chap from 'src/components/ui/chap'
import {
  Carousel,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
  CarouselPagination,
} from 'src/components/ui/carousel'

import { list } from 'src/config/card/card-film'
import { AiFillClockCircle } from 'react-icons/ai'
import { IoEyeSharp } from 'react-icons/io5'
import { cn } from 'src/lib/utils'

type CaruselProps = {
  title: string
  text?: string
  className?: string
}

export default function CarouselCategory({ title, text, className }: CaruselProps) {
  return (
    <div
      className={cn(' w-full text-white max-w-[1450px] mb-16 m-auto ', className)}
    >
      <Carousel
        opts={{
          align: 'start',
        }}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-xl sm:text-3xl leading-[150%] font-bold">
            {title}
          </h2>
          <div className="flex items-center gap-5 md:gap-3 rounded-xl border-black-12 border bg-black-6 p-4">
            <CarouselPrevious variant="category" size="category" />
            <CarouselPagination className="hidden md:flex" />
            <CarouselNext variant="category" size="category" />
          </div>
        </div>
        <CarouselContent>
          {list.map((item, index) => (
            <CarouselItem
              key={index}
              className="xs:basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <CardLayout
                Cardbody={<CardBodyImage url={item.img} />}
                Cardfooter={
                  <CardFooter className="justify-between">
                    <h3 className="text-sm sm:text-xl font-medium line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="flex justify-between ">
                      <Chap>
                        <AiFillClockCircle size={15} />
                        <h4 className="text-xs xs:text-sm">{item.duration}</h4>
                      </Chap>
                      <Chap>
                        <IoEyeSharp size={15} />
                        <h4 className="text-xs xs:text-sm">{item.numberOfViews}</h4>
                      </Chap>
                    </div>
                  </CardFooter>
                }
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
