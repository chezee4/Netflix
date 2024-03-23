'use client'
import { Services } from 'src/config/services'
import ServiceCard from './ui/card/service-card'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { cn } from 'src/lib/utils'

export default function ServiceList() {
  return (
    <div className=" relative w-full flex gap-5 justify-center mb-10">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={5}
        pagination={{
          el: '.service-pagination',
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {Services.map(service => (
          <SwiperSlide key={service.id}>
            <ServiceCard {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={cn(
          'service-pagination absolute -bottom-5 left-1/2',
          'flex gap-1',
        )}
      ></div>
    </div>
  )
}
