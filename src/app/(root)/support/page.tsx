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
        title="Часто задавані питання"
        subtitle="Маєте питання? У нас є відповіді! Перевірте наш розділ ЧАП, щоб знайти відповіді на найпоширеніші питання про StreamVibe."
        className="mt-36"
      >
        <AccordionSupport />
      </SectionLayout>
      <CTA />
    </Wrapper>
  )
}
