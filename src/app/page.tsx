import CarouselAvatars from 'src/features/carousel/avatars-carousel'
import CTA from 'src/features/cta'
import DevicesList from 'src/features/devices-list'
import SupportForm from 'src/features/form/support-form'
import MoviesByCategory from 'src/features/movies-by-category'
import ServiceList from 'src/features/services-list'
import CarouselComments from 'src/features/carousel/comments-carousel'
import AccordionSupport from 'src/features/support-accordion'
import TableOfServices from 'src/features/table-of-services'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 justify-between w-full max-w-[1640px] px-3 md:px-8 m-auto">
      <DevicesList />
      <CTA />
      <SupportForm />
      <CarouselComments />
      <CarouselAvatars />
      <AccordionSupport />
      <ServiceList />
      <TableOfServices />
      <MoviesByCategory />
    </main>
  )
}
