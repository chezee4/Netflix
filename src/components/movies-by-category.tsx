import Chap from "./ui/chap"
import Carusel from "./carousel"

export default function MoviesByCategory() {
  return (
    <section className=' relative rounded-xl border border-black-15 w-full mb-10 '>
       <Chap className=" absolute translate-x-1/2 -translate-y-1/2 bg-red-45 rounded-lg text-lg text-white font-normal py-1.5 px-4">Movies</Chap>
       <div className="mt-14">
       <Carusel title="Trending Now" text="pagination-1"/>
       <Carusel title="Our Genres" text="pagination-2"/>
       <Carusel title="New Releases" text="pagination-3"/>
       </div>
    </section>
  )
}
