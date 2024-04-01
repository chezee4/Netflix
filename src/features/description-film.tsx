import RatingStars from 'src/components/rating-stars'
import Chap from 'src/components/ui/chap'
import { filmDescription } from 'src/config/film'
import { CiCalendar } from 'react-icons/ci'
import { LuLanguages } from 'react-icons/lu'
import { CiStar } from 'react-icons/ci'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { ContentWrapper } from 'src/layouts/content-wrapper'
import Avatar from 'src/components/ui/avatar'

export default function DescriptionFilm() {
  return (
    <ContentWrapper as="aside" variant="secondary" className=" max-w-lg">
      <h5 className=" flex gap-2 items-center text-lg text-gray-60 mb-4">
        <CiCalendar className=" text-2xl" />
        <span> Released Year</span>
      </h5>
      <span className=" font-semibold">{filmDescription.releasedYear}</span>

      <h5 className=" flex gap-2 items-center text-lg text-gray-60 mt-6 mb-4">
        <LuLanguages className=" text-2xl" />
        <span> Available Languages</span>
      </h5>
      <div className="flex gap-3 flex-wrap">
        {filmDescription.availableLanguages.map((language, index) => (
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
        <span>Rating</span>
      </h5>
      <div className="flex items-center gap-4">
        <Chap className=" flex-col text-white items-start text-base p-5 rounded-lg font-medium">
          <span className=" text-lg font-medium">IMDb</span>
          <div className="flex items-center gap-3">
            <RatingStars
              rating={+filmDescription.rating.IMDb}
              className=" text-xs xs:text-base sm:text-xs md:text-2xl"
            />
            <span className=" text-base md:text-lg ">
              {filmDescription.rating.IMDb}
            </span>
          </div>
        </Chap>
        <Chap className=" flex-col text-white text-base items-start p-5 rounded-lg font-medium">
          <span className=" text-lg font-medium">Streamvibe</span>
          <div className="flex items-center gap-3">
            <RatingStars
              rating={+filmDescription.rating.Streamvibe}
              className=" text-xs xs:text-base sm:text-xs md:text-2xl"
            />
            <span className=" text-base md:text-lg">
              {filmDescription.rating.Streamvibe}
            </span>
          </div>
        </Chap>
      </div>
      <h5 className=" flex gap-2 items-center text-lg text-gray-60 mt-6 mb-4">
        <HiOutlineSquares2X2 className=" text-2xl" />
        <span>Genres</span>
      </h5>
      <div className="flex gap-3 flex-wrap">
        {filmDescription.genres.map((genre, index) => (
          <Chap
            key={index}
            className=" text-white text-base px-3.5 py-2 rounded-lg font-medium"
          >
            {genre}
          </Chap>
        ))}
      </div>
      <h5 className=" flex gap-2 items-center text-lg text-gray-60 mt-6 mb-3">
        Director
      </h5>
      <Chap className=" w-full gap-3 px-3.5 py-3 rounded-lg font-medium">
        <Avatar
          avatar={filmDescription.director.avatar}
          name={filmDescription.director.name}
          className="mm:h-16 mm:w-16"
        />
        <div>
          <p className="text-white text-lg">{filmDescription.director.name}</p>
          <p className="text-base">
            <span>From </span> {filmDescription.director.country}
          </p>
        </div>
      </Chap>
      <h5 className=" flex gap-2 items-center text-lg text-gray-60 mt-6 mb-3">
        Music
      </h5>
      <Chap className=" w-full gap-3 px-3.5 py-3 rounded-lg font-medium">
        <Avatar
          avatar={filmDescription.director.avatar}
          name={filmDescription.director.name}
          className="mm:h-16 mm:w-16"
        />
        <div>
          <p className="text-white text-lg">{filmDescription.director.name}</p>
          <p className="text-base">
            <span>From </span> {filmDescription.director.country}
          </p>
        </div>
      </Chap>
    </ContentWrapper>
  )
}
