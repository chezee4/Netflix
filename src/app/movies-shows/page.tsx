import React from 'react'
import Image from 'next/image'
import MoviesByCategory from 'src/features/movies-by-category'
import Wrapper from 'src/layouts/wrapper'
import BgMovies from 'src/../public/BgMovies.jpg'

export default function MoviesShowsPage() {
  return (
    <>
      <Wrapper>
        <div className="w-full overflow-hidden my-32 rounded-lg">
          <Image src={BgMovies} alt="Movies" />
        </div>
        <MoviesByCategory />
        <MoviesByCategory />
      </Wrapper>
    </>
  )
}
