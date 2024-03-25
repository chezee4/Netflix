import Chap from 'src/components/ui/chap'
import CarouselCategory from 'src/features/carousel/category-carousel'

export default function MoviesByCategory() {
  return (
    <section className=" relative rounded-xl border border-black-15 w-full mb-10 px-4 ">
      <Chap className=" absolute translate-x-1/2 -translate-y-1/2 bg-red-45 rounded-lg text-lg text-white font-normal py-1.5 px-4">
        Movies
      </Chap>
      <div className="mt-14">
        <CarouselCategory title="Trending Now" text="pagination-1" />
        <CarouselCategory title="Our Genres" text="pagination-2" />
        <CarouselCategory title="New Releases" text="pagination-3" />
      </div>
    </section>
  )
}
