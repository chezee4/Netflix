import Chap from 'src/components/ui/chap'
import CarouselCategory from 'src/features/carousel/category-carousel'
import { ContentWrapper } from 'src/layouts/content-wrapper'

export default function MoviesByCategory() {
  return (
    <ContentWrapper className=" relative rounded-xl p-0 px-4 bg-transparent mb-28">
      <Chap className=" absolute translate-x-1/2 -translate-y-1/2 bg-red-45 rounded-lg text-lg text-white font-normal py-1.5 px-4">
        Movies
      </Chap>
      <div className="mt-14">
        <CarouselCategory title="Trending Now" />
        <CarouselCategory title="Our Genres" />
        <CarouselCategory title="New Releases" />
        <CarouselCategory title="Must - Watch Movies" />
      </div>
    </ContentWrapper>
  )
}
