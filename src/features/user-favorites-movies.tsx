'use client'
import Link from 'next/link'
import CardLayout from 'src/layouts/card-layout'
import CardBodyImage from 'src/components/card/card-body-image'
import CardFooter from 'src/components/card/card-footer'
import Chap from 'src/components/ui/chap'
import { useToast } from 'src/components/ui/use-toast'
import { DropdownMenuFilm } from 'src/components/dropdown-menu-film'

import { useUserStore } from 'src/store/user-store'

import { AiFillClockCircle } from 'react-icons/ai'
import { IoEyeSharp } from 'react-icons/io5'

export default function UserFavoritesMovies() {
  const user = useUserStore(state => state.user!)
  const updateProfileUser = useUserStore(state => state.updateProfileUser)
  const { toast } = useToast()

  const handleDelete = (id: string) => {
    updateProfileUser({
      favoriteMovieId: id,
    })
    toast({
      title: 'Фільм видалено!',
      description: 'Фільм було успішно видалено із списку улюблених.',
    })
  }
  const requestsList = user?.favoriteMovies?.map(item => (
    <Link href={`/movies-shows/${item.id}`} key={item.id}>
      <CardLayout
        Cardbody={
          <>
            <div className=" absolute top-0 right-0">
              <DropdownMenuFilm movie={item} deleteFilm={handleDelete} />
            </div>
            <CardBodyImage url={item.banner} />
          </>
        }
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
                <h4 className="text-xs xs:text-sm">{item.viewsNumber}</h4>
              </Chap>
            </div>
          </CardFooter>
        }
      />
    </Link>
  ))

  return (
    <div className="w-full">
      <h1 className="mb-10 text-3xl font-medium">
        {user.username}, це ваші улюблені фільми 🎬
      </h1>
      <div className="flex w-full gap-5 flex-wrap justify-start border-1 p-2">
        {requestsList}
      </div>
    </div>
  )
}
