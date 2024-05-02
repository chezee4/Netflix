import SupportSection from 'src/features/support-section'
import AccordionSupport from 'src/features/support-accordion'
import CTA from 'src/features/cta'
import SectionLayout from 'src/layouts/section-layout'
import Wrapper from 'src/layouts/wrapper'

export default function SupportPage() {
  return (
    <Wrapper>
      <SupportSection />
      <SectionLayout
        title="Frequently Asked Questions"
        subtitle="Got questions? We have got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
        className='mt-36'
      >
        <AccordionSupport />
      </SectionLayout>
      <CTA />
    </Wrapper>
  )
}
