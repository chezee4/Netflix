import CarouselAvatars from 'src/components/carousel-avatars'
import CTA from 'src/components/cta'
import DevicesList from 'src/components/devices-list'
import SupportForm from 'src/components/form/support-form'
import MoviesByCategory from 'src/components/movies-by-category'
import ServiceList from 'src/components/services-list'
import CarouselComments from 'src/components/carousel-comments'
import AccordionSupport from '@/components/accordion-support'
import TableOfServices from '@/components/table-of-services'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 justify-between w-full max-w-[1640px] px-3 md:px-8 m-auto">
      <DevicesList />
      <CTA />
      <CarouselComments />
      <CarouselAvatars />
      <AccordionSupport />
      <ServiceList />
      <TableOfServices />
      <MoviesByCategory />
      {/* <SupportForm /> */}
    </main>
  )
}
