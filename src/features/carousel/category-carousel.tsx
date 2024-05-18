'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
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

import { cn } from 'src/lib/utils'
import { useMovieStore } from 'src/store/movie-store'

import { Film } from 'src/types'
import { AiFillClockCircle } from 'react-icons/ai'
import { IoEyeSharp } from 'react-icons/io5'

type CaruselProps = {
  title: string
  category: string
  className?: string
}

export default function CarouselCategory({
  title,
  category,
  className,
}: CaruselProps) {
  const [movies, setMovies] = useState<Film[]>([])
  const getMoviesByCategory = useMovieStore(state => state.getMoviesByCategory)

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await getMoviesByCategory(category)
      setMovies(fetchedMovies)
    }

    fetchMovies()
  }, [category, getMoviesByCategory])

  return (
    <div className={cn(' w-full text-white max-w-[1450px] m-auto mb-16', className)}>
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
          {movies.map(movie => (
            <CarouselItem
              key={movie.id}
              className="xs:basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <Link href={`/movies-shows/${movie.id}`}>
                <CardLayout
                  Cardbody={<CardBodyImage url={movie.banner} />}
                  Cardfooter={
                    <CardFooter className="justify-between">
                      <h3 className="text-sm sm:text-xl font-medium line-clamp-1">
                        {movie.title}
                      </h3>
                      <div className="flex justify-between ">
                        <Chap>
                          <AiFillClockCircle size={15} />
                          <h4 className="text-xs xs:text-sm">{movie.duration}</h4>
                        </Chap>
                        <Chap>
                          <IoEyeSharp size={15} />
                          <h4 className="text-xs xs:text-sm">{movie.viewsNumber}</h4>
                        </Chap>
                      </div>
                    </CardFooter>
                  }
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
