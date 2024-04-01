import CTA from 'src/features/cta'
import ServiceList from 'src/features/services-list'
import TableOfServices from 'src/features/table-of-services'
import SectionLayout from 'src/layouts/section-layout'
import Wrapper from 'src/layouts/wrapper'

export default function SubscriptionsPage() {
  return (
    <Wrapper>
      <SectionLayout
        title="Choose the plan that is right for you"
        subtitle="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        className="mt-36"
      >
        <ServiceList />
      </SectionLayout>
      <SectionLayout
        title="Compare our plans and find the right one for you"
        subtitle="StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
      >
        <TableOfServices />
      </SectionLayout>
      <CTA />
    </Wrapper>
  )
}
