'use client'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6'
import { cn } from '@/lib/utils'

import Avatar from './ui/avatar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'

import { actors } from '@/config/film/actors'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Button } from './ui/button'

export default function CarouselAvatars() {
  return (
    <div className="px-5 sm:px-10 py-10 max-w-[820px] w-full mx-auto  bg-black-10 border-black-15 border rounded-xl mb-10 ">
      <div className=" relative">
        <div className=" flex justify-between items-center mb-5">
          <h3 className=" text-gray-65 text-lg leading-[150%] font-bold">Cast</h3>
          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="full-sercle"
              className="prev-actors-button"
            >
              <FaArrowLeft color="text-gray-60" />
            </Button>
            <Button
              variant="secondary"
              size="full-sercle"
              className="next-actors-button"
            >
              <FaArrowRight color="text-gray-60" />
            </Button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: '.next-actors-button',
            prevEl: '.prev-actors-button',
          }}
          pagination={{ el: '.actors', clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            440: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            500: {
              slidesPerView: 5,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 6,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 7,
              spaceBetween: 8,
            },
            888: {
              slidesPerView: 8,
              spaceBetween: 8,
            },
          }}
        >
          {actors.map(actor => (
            <SwiperSlide key={actor.id}>
              <Avatar
                avatar={actor.avatar}
                name={actor.name}
                className=" mx-auto mm:mx-0"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={cn('actors absolute -bottom-5 left-1/2', 'flex gap-1')}
        ></div>
      </div>
    </div>
  )
}
