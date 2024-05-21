'use client'
import React, { useEffect } from 'react'
import CarouselAvatars from 'src/features/carousel/avatars-carousel'
import CarouselComments from 'src/features/carousel/comments-carousel'
import CTA from 'src/features/cta'
import DescriptionFilm from 'src/features/description-film'
import VideoPlayer from 'src/features/video-player'
import { ContentWrapper } from 'src/layouts/content-wrapper'
import Wrapper from 'src/layouts/wrapper'
import { useMovieStore } from 'src/store/movie-store'

type MoviePageProps = {
  params: { movieId: string }
}

export default function MoviePage({ params: { movieId } }: MoviePageProps) {
  const getMovie = useMovieStore(state => state.getMovie)
  const movie = useMovieStore(state => state.movie)

  useEffect(() => {
    getMovie(movieId)
  }, [movieId, getMovie])

  return (
    movie && (
      <Wrapper>
        <VideoPlayer
          videoUrl={movie.movieMedia.videoUrl}
          imageUrl={movie.movieMedia.imageUrl}
        />
        <section className="flex gap-5 mb-24">
          <div className=" flex flex-col gap-6 justify-between">
            <ContentWrapper variant="secondary">
              <h3 className=" text-gray-65 text-lg mb-3 leading-[150%] font-bold">
                Опис
              </h3>
              <p className=" text-base leading-[150%] font-medium">
                {movie.description}
              </p>
            </ContentWrapper>
            <CarouselAvatars actors={movie.actors} />
            <CarouselComments comments={movie.comments} />
          </div>
          <DescriptionFilm movie={movie} />
        </section>
        <CTA />
      </Wrapper>
    )
  )
}
