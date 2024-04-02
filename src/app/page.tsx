import CarouselAvatars from 'src/features/carousel/avatars-carousel'
import CTA from 'src/features/cta'
import DevicesList from 'src/features/devices-list'
import SupportForm from 'src/features/form/support-form'
import MoviesByCategory from 'src/features/movies-by-category'
import ServiceList from 'src/features/services-list'
import CarouselComments from 'src/features/carousel/comments-carousel'
import AccordionSupport from 'src/features/support-accordion'
import TableOfServices from 'src/features/table-of-services'
import WelcomeSection from 'src/features/welcome-section'
import VideoPlayer from 'src/features/video-player'
import DescriptionFilm from 'src/features/description-film'
import BannerCarousel from 'src/features/carousel/banner-carousel'

export default function Home() {
  return (
    <main className="min-h-screen w-full m-auto">
      <WelcomeSection />
      <div className="flex h-full flex-col items-center gap-10 justify-between w-full max-w-[1640px] px-3 md:px-8 m-auto">
        <VideoPlayer />
        <DevicesList />
        <BannerCarousel />
        <CTA />
        <DescriptionFilm />
        <SupportForm />
        <CarouselComments />
        <CarouselAvatars />
        <AccordionSupport />
        <ServiceList />
        <TableOfServices />
        <MoviesByCategory />
      </div>
    </main>
  )
}
