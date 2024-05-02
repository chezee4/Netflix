import MoviesByCategory from 'src/features/movies-by-category'
import Wrapper from 'src/layouts/wrapper'
import BannerCarousel from 'src/features/carousel/banner-carousel'

export default function MoviesShowsPage() {
  return (
    <Wrapper>
      <BannerCarousel />
      <MoviesByCategory />
      <MoviesByCategory />
    </Wrapper>
  )
}
