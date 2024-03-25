import { Services } from 'src/config/card/services'
import ServiceCard from 'src/components/card/service-card'
import {
  Carousel,
  CarouselItem,
  CarouselPagination,
  CarouselContent,
} from 'src/components/ui/carousel'

export default function ServiceList() {
  return (
    <div className=" max-w-[1500px] w-full mx-auto mb-10 ">
      <Carousel
        opts={{
          align: 'start',
        }}
      >
        <CarouselContent>
          {Services.map(service => (
            <CarouselItem
              key={service.id}
              className="basis-full md:basis-1/2 xl:basis-1/3"
            >
              <ServiceCard {...service} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className=" flex xl:hidden justify-center">
          <CarouselPagination />
        </div>
      </Carousel>
    </div>
  )
}
