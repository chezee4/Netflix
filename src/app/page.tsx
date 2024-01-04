'use client'
import Carousel from '@/components/carousel'
import CTA from '@/components/cta'
import DevicesList from '@/components/devices-list'
import MoviesByCategory from '@/components/movies-by-category'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full max-w-[1640px] px-3 md:px-8 m-auto">
      <DevicesList />
      <CTA />
      <MoviesByCategory />
    </main>
  )
}
