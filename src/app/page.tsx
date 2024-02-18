import AccordionSupport from '@/components/accordion-support'
import CarouselAvatars from '@/components/carousel-avatars'
import CarouselComment from '@/components/carousel-comment'
import CTA from '@/components/cta'
import DevicesList from '@/components/devices-list'
import SupportForm from '@/components/form/support-form'
import MoviesByCategory from '@/components/movies-by-category'
import ServiceList from '@/components/services-list'
import TableOfServices from '@/components/table-of-services'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 justify-between w-full max-w-[1640px] px-3 md:px-8 m-auto">
      <DevicesList />
      <CTA />
      <CarouselAvatars />
      <CarouselComment />
      <AccordionSupport />
      <ServiceList />
      <TableOfServices />
      <MoviesByCategory />
      {/* <SupportForm /> */}
    </main>
  )
}
