'use client'
import { cn } from '@/lib/utils'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6'
import { HiPlus } from 'react-icons/hi'
import { Button } from './ui/button'
import Chap from './ui/chap'
import RatingStars from './ui/rating-stars'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'

import { comments } from '@/config/film/comments'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function CarouselComment() {
  return (
    <div className="px-2 sm:px-5 md:px-10 pb-5 pt-5 sm:pt-10 max-w-[920px] w-full mx-auto  bg-black-10 border-black-15 border rounded-xl mb-10 ">
      <div className=" relative">
        <div className=" flex justify-between items-center mb-5">
          <h3 className=" text-gray-65 text-sm sm:text-lg leading-[150%] font-bold">Reviews</h3>
          <Button
            variant="secondary"
            size="default"
            className="flex items-center gap-1 text-xs sm:text-sm lg:text-sm px-3"
          >
            <HiPlus color="text-gray-75" className=" text-base sm:text-xl" />
            <span>Add Your Review</span>
          </Button>
        </div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={{
            nextEl: '.next-comments-button',
            prevEl: '.prev-comments-button',
          }}
          pagination={{ el: '.comments', clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            440: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
          }}
        >
          {comments.map((comment, index) => (
            <SwiperSlide key={index}>
              <div className=" h-full bg-black-6 border-black-15 border rounded-xl px-6 py-10 lg:p-10">
                <div className="flex justify-between items-center gap-2 mb-6">
                  <div>
                    <h4 className="text-white text-sm sm:text-xl font-medium line-clamp-1">
                      {comment.name}
                    </h4>
                    <span className="text-sm md:text-base text-gray-65 font-medium">
                      {comment.cauntry}
                    </span>
                  </div>
                  <Chap className="px-3 gap-2 ">
                    <RatingStars
                      rating={comment.rating}
                      className=" text-xs xs:text-base sm:text-xs md:text-base"
                    />
                    <span className="text-gray-60 text-base md:text-lg ">
                      {comment.rating}
                    </span>
                  </Chap>
                </div>
                <p className="text-gray-60 text-xs sm:text-sm line-clamp-3">
                  {comment.comment}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className=" hidden sm:flex justify-between items-center gap-2 mx-auto mt-5 sm:mt-7 w-fit">
          <Button
            variant="secondary"
            size="full-sercle"
            className="prev-comments-button"
          >
            <FaArrowLeft color="text-gray-60" />
          </Button>
          <div className={cn('comments hidden sm:flex gap-1 ')}></div>
          <Button
            variant="secondary"
            size="full-sercle"
            className="next-comments-button"
          >
            <FaArrowRight color="text-gray-60" />
          </Button>
        </div>
      </div>
    </div>
  )
}
