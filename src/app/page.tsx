import CTA from '@/components/cta'
import DevicesList from '@/components/devices-list'
import SupportForm from '@/components/form/support-form'
import MoviesByCategory from '@/components/movies-by-category'
import ServiceList from '@/components/services-list'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full max-w-[1640px] px-3 md:px-8 m-auto">
      <DevicesList />
      <CTA />
      <ServiceList />
      <MoviesByCategory />
      <SupportForm />
    </main>
  )
}
