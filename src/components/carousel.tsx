'use client'
import { list } from 'src/config/card-film'
import CardLayout from 'src/components/layouts/card-layout'
import CardBodyImage from 'src/components/ui/card/card-body-image'
import CardFooter from 'src/components/ui/card/card-footer'
import Chap from 'src/components/ui/chap'

import { AiFillClockCircle } from 'react-icons/ai'
import { IoEyeSharp } from 'react-icons/io5'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { cn } from 'src/lib/utils'

type CaruselProps = {
  title: string
  text?: string
}
export default function Carusel({ title, text }: CaruselProps) {
  return (
    <div className=" w-full text-white max-w-[1450px] mb-16 m-auto ">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-white text-3xl leading-[150%] font-bold">{title}</h2>
        <div className="flex items-center gap-3 rounded-xl border-black-12 border bg-black-6 p-4">
          <button
            className={cn(
              'rounded-lg border-black-12 border bg-black-10 text-xl p-3 transition-all duration-200 ease-linear hover:bg-black-15',
              `prev-${text}-button`,
            )}
          >
            <FaArrowLeft />
          </button>
          <div className={cn(text, 'flex gap-1')}></div>
          <button
            className={cn(
              'rounded-lg border-black-12 border bg-black-10 text-xl p-3 transition-all duration-200 ease-linear  hover:bg-black-15',
              `next-${text}-button`,
            )}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={5}
        navigation={{
          nextEl: `.next-${text}-button`,
          prevEl: `.prev-${text}-button`,
        }}
        pagination={{ el: '.' + text, clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1100: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {list.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <CardLayout
                Cardbody={<CardBodyImage url={item.img} />}
                Cardfooter={
                  <CardFooter className="justify-between">
                    <Chap>
                      <AiFillClockCircle size={15} />
                      <h3>{item.duration}</h3>
                    </Chap>
                    <Chap>
                      <IoEyeSharp size={15} />
                      <h3>{item.numberOfViews}</h3>
                    </Chap>
                  </CardFooter>
                }
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
