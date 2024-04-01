import WelcomeSection from 'src/features/welcome-section'
import CarouselCategory from 'src/features/carousel/category-carousel'
import DevicesList from 'src/features/devices-list'
import AccordionSupport from 'src/features/support-accordion'
import ServiceList from 'src/features/services-list'
import CTA from 'src/features/cta'
import SectionLayout from 'src/layouts/section-layout'
import Wrapper from 'src/layouts/wrapper'

export default function HomePage() {
  return (
    <>
      <WelcomeSection />
      <Wrapper>
        <SectionLayout
          title="Explore the wide variety of our films"
          subtitle="Whether you are looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        >
          <CarouselCategory className=" max-w-none" title="Popular Top 10 Films" />
        </SectionLayout>
        <SectionLayout
          title="We Provide you streaming experience across various devices."
          subtitle="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
        >
          <DevicesList />
        </SectionLayout>
        <SectionLayout
          title="Frequently Asked Questions"
          subtitle="Got questions? We have got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
        >
          <AccordionSupport />
        </SectionLayout>
        <SectionLayout
          title="Choose the plan that is right for you"
          subtitle="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        >
          <ServiceList />
        </SectionLayout>
        <CTA />
      </Wrapper>
    </>
  )
}
