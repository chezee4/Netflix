import CTA from 'src/features/cta'
import ServiceList from 'src/features/services-list'
import TableOfServices from 'src/features/table-of-services'
import SectionLayout from 'src/layouts/section-layout'
import Wrapper from 'src/layouts/wrapper'

export default function SubscriptionsPage() {
  return (
    <Wrapper>
      <SectionLayout
        title="Виберіть план, який вам підходить"
        subtitle="Приєднуйтесь до StreamVibe та вибирайте з наших гнучких варіантів підписки, які розроблені для задоволення ваших переглядових вподобань. Готуйтесь до безперервних розваг!"
        className="mt-36"
      >
        <ServiceList />
      </SectionLayout>
      <SectionLayout
        title="Порівняйте наші плани та знайдіть той, який вам підходить"
        subtitle="StreamVibe пропонує три різні плани, щоб задовольнити ваші потреби: Базовий, Стандартний та Преміум. Порівняйте особливості кожного плану та виберіть той, який вам підходить."
      >
        <TableOfServices />
      </SectionLayout>
      <CTA />
    </Wrapper>
  )
}
