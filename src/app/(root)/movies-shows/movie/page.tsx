import React from 'react'
import CarouselAvatars from 'src/features/carousel/avatars-carousel'
import CarouselComments from 'src/features/carousel/comments-carousel'
import CTA from 'src/features/cta'
import DescriptionFilm from 'src/features/description-film'
import VideoPlayer from 'src/features/video-player'
import { ContentWrapper } from 'src/layouts/content-wrapper'
import Wrapper from 'src/layouts/wrapper'

export default function MoviePage() {
  return (
    <Wrapper>
      <VideoPlayer />
      <section className="flex gap-5 mb-24">
        <div className=" flex flex-col gap-6 justify-between">
          <ContentWrapper variant="secondary">
            <h3 className=" text-gray-65 text-lg mb-3 leading-[150%] font-bold">
              Опис
            </h3>
            <p className="text-lg leading-[150%] font-bold">
              Палкий юнак стикається з непохитним лісничим у південноіндійському
              селі, де панують духовність, доля і фольклор. Палкий юнак стикається з
              непохитним лісничим у південноіндійському селі, де панують духовність,
              доля і фольклор.
            </p>
          </ContentWrapper>
          <CarouselAvatars />
          <CarouselComments />
        </div>
        <DescriptionFilm />
      </section>
      <CTA />
    </Wrapper>
  )
}
