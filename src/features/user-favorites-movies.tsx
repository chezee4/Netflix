'use client'
import { useUserStore } from 'src/store/user-store'
import CardLayout from 'src/layouts/card-layout'
import CardBodyImage from 'src/components/card/card-body-image'
import CardFooter from 'src/components/card/card-footer'
import Chap from 'src/components/ui/chap'
import { AiFillClockCircle } from 'react-icons/ai'
import { IoEyeSharp } from 'react-icons/io5'
import Banner from 'public/IMG3.jpg'

export default function UserFavoritesMovies() {
  const user = useUserStore(state => state.user!)

  const requestsList = user.favoriteMovies?.map((item, index) => (
    <CardLayout
      key={index}
      Cardbody={<CardBodyImage url={item.banner || Banner} />}
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
