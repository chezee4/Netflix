import RatingStars from 'src/components/rating-stars'
import Chap from 'src/components/ui/chap'
import { CiCalendar } from 'react-icons/ci'
import { LuLanguages } from 'react-icons/lu'
import { CiStar } from 'react-icons/ci'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { ContentWrapper } from 'src/layouts/content-wrapper'
import Avatar from 'src/components/ui/avatar-actore'

import type { Movie } from 'src/types'

type DescriptionFilmProps = {
  movie: Movie
}
export default function DescriptionFilm({ movie }: DescriptionFilmProps) {
  return (
    <ContentWrapper as="aside" variant="secondary" className=" max-w-lg">
      <h5 className=" flex gap-2 items-center text-lg text-gray-60 mb-4">
        <CiCalendar className=" text-2xl" />
        <span> Рік випуску</span>
      </h5>
      <span className=" font-semibold">{movie.releaseYear}</span>

      <h5 className=" flex gap-2 items-center text-lg text-gray-60 mt-6 mb-4">
        <LuLanguages className=" text-2xl" />
        <span> Доступні мови</span>
      </h5>
      <div className="flex gap-3 flex-wrap">
        {movie.availableLanguages.map((language, index) => (
          <Chap
            key={index}
            className=" text-white text-base px-3.5 py-2 rounded-lg font-medium"
          >
            {language}
          </Chap>
        ))}
      </div>
      <h5 className=" flex gap-2 items-center text-lg text-gray-60 mt-6 mb-4">
        <CiStar className=" text-2xl" />
        <span>Рейтинг</span>
      </h5>
      <div className="flex items-center gap-4">
        <Chap className=" flex-col text-white items-start text-base p-5 rounded-lg font-medium">
          <span className=" text-lg font-medium">IMDb</span>
          <div className="flex items-center gap-3">
            <RatingStars
              rating={movie.ratingIMDb}
              className=" text-xs xs:text-base sm:text-xs md:text-2xl"
            />
            <span className=" text-base md:text-lg ">{movie.ratingIMDb}</span>
          </div>
        </Chap>
        <Chap className=" flex-col text-white text-base items-start p-5 rounded-lg font-medium">
          <span className=" text-lg font-medium">Streamvibe</span>
          <div className="flex items-center gap-3">
            <RatingStars
              rating={movie.ratingStreamVibe}
              className=" text-xs xs:text-base sm:text-xs md:text-2xl"
            />
            <span className=" text-base md:text-lg">{movie.ratingStreamVibe}</span>
          </div>
        </Chap>
      </div>
      <h5 className=" flex gap-2 items-center text-lg text-gray-60 mt-6 mb-4">
        <HiOutlineSquares2X2 className=" text-2xl" />
        <span>Жанри</span>
      </h5>
      <div className="flex gap-3 flex-wrap">
        {movie.genres.map((genre, index) => (
          <Chap
            key={index}
            className=" text-white text-base px-3.5 py-2 rounded-lg font-medium"
          >
            {genre}
          </Chap>
        ))}
      </div>
      <h5 className=" flex gap-2 items-center text-lg text-gray-60 mt-6 mb-3">
        Режисер
      </h5>
      <Chap className=" w-full gap-3 px-3.5 py-3 rounded-lg font-medium">
        <Avatar
          avatar={movie.director.avatar}
          name={movie.director.name}
          className="mm:h-16 mm:w-16"
        />
        <div>
          <p className="text-white text-lg">{movie.director.name}</p>
          <p className="text-base">
            <span>З </span> {movie.director.country}
          </p>
        </div>
      </Chap>
      <h5 className=" flex gap-2 items-center text-lg text-gray-60 mt-6 mb-3">
        Музика
      </h5>
      <Chap className=" w-full gap-3 px-3.5 py-3 rounded-lg font-medium">
        <Avatar
          avatar={movie.musicDirector.avatar}
          name={movie.musicDirector.name}
          className="mm:h-16 mm:w-16"
        />
        <div>
          <p className="text-white text-lg">{movie.musicDirector.name}</p>
          <p className="text-base">
            <span>З </span> {movie.musicDirector.country}
          </p>
        </div>
      </Chap>
    </ContentWrapper>
  )
}
