'use client'
import CardLayout from 'src/layouts/card-layout'
import CardBodyImage from 'src/components/card/card-body-image'
import CardFooter from 'src/components/card/card-footer'
import Chap from 'src/components/ui/chap'
import { AiFillClockCircle } from 'react-icons/ai'
import { IoEyeSharp } from 'react-icons/io5'
import { list } from 'src/config/card/card-film'
import { DropdownMenuFilm } from 'src/components/dropdown-menu-film'

export default function MoviesPage() {
  const handlEditFlm = (title: string) => {
    // there will be a function to edit the film
  }
  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Movies</h1>
      </div>
      <div className="flex gap-y-6 items-center flex-wrap w-full">
        {list.map((item, index) => (
          <CardLayout
            key={index}
            onClick={() => handlEditFlm(item.title)}
            className="cursor-pointer"
            Cardbody={
              <>
                <div className=" absolute top-0 right-0">
                  <DropdownMenuFilm film={item} />
                </div>
                <CardBodyImage url={item.img} />
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
                    <h4 className="text-xs xs:text-sm">{item.numberOfViews}</h4>
                  </Chap>
                </div>
              </CardFooter>
            }
          />
        ))}
      </div>
    </main>
  )
}
