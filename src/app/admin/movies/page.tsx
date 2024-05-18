'use client'
import { useEffect } from 'react'
import CardLayout from 'src/layouts/card-layout'
import CardBodyImage from 'src/components/card/card-body-image'
import CardFooter from 'src/components/card/card-footer'
import Chap from 'src/components/ui/chap'
import { AiFillClockCircle } from 'react-icons/ai'
import { IoEyeSharp } from 'react-icons/io5'
import { DropdownMenuFilm } from 'src/components/dropdown-menu-film'
import { useMovieStore } from 'src/store/movie-store'
import { useToast } from 'src/components/ui/use-toast'
import Link from 'next/link'

export default function MoviesPage() {
  const { toast } = useToast()
  const getAllMovies = useMovieStore(state => state.getAllMovies)
  const mavies = useMovieStore(state => state.movies)
  const deleteMovie = useMovieStore(state => state.deleteMovie)

  useEffect(() => {
    getAllMovies()
  }, [])

  const handleDelete = (id: string) => {
    deleteMovie(id)
    toast({
      title: 'Фільм видалено!',
      description: 'Фільм було успішно видалено.',
    })
  }
  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Movies</h1>
      </div>
      <div className="flex gap-6 items-center flex-wrap w-full">
        {mavies.map((movie, index) => (
          <Link href={`/movies-shows/${movie.id}`} key={index}>
            <CardLayout
              key={index}
              className="cursor-pointer"
              Cardbody={
                <>
                  <div className=" absolute top-0 right-0">
                    <DropdownMenuFilm movie={movie} deleteFilm={handleDelete} />
                  </div>
                  <CardBodyImage url={movie.banner} />
                </>
              }
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
        ))}
      </div>
    </main>
  )
}
