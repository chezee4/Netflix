import CarouselAvatars from '@/components/carousel-avatars'
import CTA from '@/components/cta'
import DevicesList from '@/components/devices-list'
import SupportForm from '@/components/form/support-form'
import MoviesByCategory from '@/components/movies-by-category'
import ServiceList from '@/components/services-list'
import RatingStars from '@/components/ui/rating-stars'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full max-w-[1640px] px-3 md:px-8 m-auto">
      <DevicesList />
      <CTA />
      <CarouselAvatars />
      <ServiceList />
      <MoviesByCategory />
      {/* <SupportForm /> */}
    </main>
  )
}
