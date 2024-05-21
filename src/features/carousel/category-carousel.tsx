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

import { cn, formatDuration, formatViewsNumber } from 'src/lib/utils'
import { useMovieStore } from 'src/store/movie-store'
import { useUserStore } from 'src/store/user-store'
import { useToast } from 'src/components/ui/use-toast'

import { Film } from 'src/types'
import { AiFillClockCircle } from 'react-icons/ai'
import { IoEyeSharp } from 'react-icons/io5'
import { SkeletonCardFilm } from 'src/components/skeleton-card-film'
import { Button } from 'src/components/ui/button'

import { FaStar } from 'react-icons/fa'

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
  const isLoading = useMovieStore(state => state.isLoading)
  const user = useUserStore(state => state.user)
  const updateProfileUser = useUserStore(state => state.updateProfileUser)
  const { toast } = useToast()

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await getMoviesByCategory(category)
      setMovies(fetchedMovies)
    }

    fetchMovies()
  }, [category, getMoviesByCategory])

  const addFavoriteMovie = (id: string) => {
    if (!user)
      return toast({
        title: 'Помилка!',
        description: 'Спочатку увійдіть в акаунт або зареєструйтесь.',
      })

    updateProfileUser({
      favoriteMovieId: id,
    })
    toast({
      title: 'Фільм додано!',
      description: 'Фільм було успішно додано до списку улюблених.',
    })
  }
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
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="xs:basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5 "
                >
                  <SkeletonCardFilm />
                </CarouselItem>
              ))
            : movies.map(movie => (
                <CarouselItem
                  key={movie.id}
                  className="xs:basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5 relative"
                >
                  <Button
                    className="absolute top-0 right-0 z-10 h-10 w-10"
                    variant="outline"
                    size="icon"
                    onClick={() => addFavoriteMovie(movie.id)}
                  >
                    <FaStar size={20} />
                  </Button>
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
                              <h4 className="text-xs xs:text-sm">
                                {formatDuration(movie.duration)}
                              </h4>
                            </Chap>
                            <Chap>
                              <IoEyeSharp size={15} />
                              <h4 className="text-xs xs:text-sm">
                                {formatViewsNumber(movie.viewsNumber)}
                              </h4>
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
