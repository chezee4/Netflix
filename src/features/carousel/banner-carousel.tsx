'use client'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from 'src/lib/utils'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselPagination,
} from 'src/components/ui/carousel'
import { Button, buttonVariants } from 'src/components/ui/button'
import { banners } from 'src/config/banner'
import { FaPlay } from 'react-icons/fa6'
import { FaPlus } from 'react-icons/fa6'
import { AiOutlineLike } from 'react-icons/ai'
import { HiOutlineSpeakerWave } from 'react-icons/hi2'
import { useToast } from 'src/components/ui/use-toast'
import { useUserStore } from 'src/store/user-store'

export default function BannerCarousel() {
  const updateProfileUser = useUserStore(state => state.updateProfileUser)
  const { toast } = useToast()

  const handleClick = (id: string) => {
    updateProfileUser({
      favoriteMovieId: id,
    })
    toast({
      title: 'Фільм видалено!',
      description: 'Фільм було успішно видалено із списку улюблених.',
    })
  }
  return (
    <div className="w-full overflow-hidden my-28 rounded-2xl">
      <div className=" relative">
        <Carousel
          opts={{
            align: 'start',
          }}
        >
          <CarouselContent>
            {banners.map(banner => (
              <CarouselItem key={banner.id} className="relative">
                <div>
                  <Image
                    src={banner.img}
                    alt={banner.title}
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <div className=" absolute bottom-[15%] text-center max-w-5xl w-full left-1/2 -translate-x-1/2">
                    <h1 className=" text-5xl font-bold">{banner.title}</h1>
                    <h3 className=" text-lg text-gray-60 font-medium mt-4">
                      {banner.subtitle}
                    </h3>
                    <div className="flex items-center gap-3 mt-8 justify-center">
                      <Link
                        href="/"
                        className={cn(
                          buttonVariants({ variant: 'default' }),
                          ' gap-2',
                        )}
                      >
                        <FaPlay />
                        Дивитись зараз
                      </Link>
                      <Button
                        size="icon"
                        variant="link"
                        onClick={() => handleClick(banner.id)}
                        className=" bg-black-6 border-2 border-black-10 box-content p-2"
                      >
                        <FaPlus className="text-2xl" />
                      </Button>
                      <Button
                        size="icon"
                        variant="link"
                        className=" bg-black-6 border-2 border-black-10 box-content p-2"
                      >
                        <AiOutlineLike className="text-2xl" />
                      </Button>
                      <Button
                        size="icon"
                        variant="link"
                        className=" bg-black-6 border-2 border-black-10 box-content p-2"
                      >
                        <HiOutlineSpeakerWave className="text-2xl" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className=" absolute flex justify-between items-center w-full max-w-[95%] bottom-[5%] left-1/2 -translate-x-1/2">
            <CarouselPrevious size="icon" className="p-1 box-content" />
            <div>
              <CarouselPagination className="flex" />
            </div>
            <CarouselNext size="icon" className="p-1 box-content" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
