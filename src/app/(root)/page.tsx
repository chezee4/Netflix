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
          title="Досліджуйте широкий асортимент наших фільмів"
          subtitle="Чи шукаєте ви комедію, щоб розсмішити вас, драму, щоб змусити вас думати, чи документальний фільм, щоб дізнатися щось нове"
        >
          <CarouselCategory
            className=" max-w-none"
            title="Популярні Топ 10 Фільмів"
          />
        </SectionLayout>
        <SectionLayout
          title="Ми надаємо вам досвід перегляду на різних пристроях."
          subtitle="З StreamVibe ви можете насолоджуватися улюбленими фільмами та телешоу в будь-який час, в будь-якому місці. Наша платформа розроблена для сумісності з широким спектром пристроїв, що гарантує, що ви ніколи не пропустите момент розваги."
        >
          <DevicesList />
        </SectionLayout>
        <SectionLayout
          title="Часто задавані питання"
          subtitle="Маєте питання? У нас є відповіді! Перевірте наш розділ ЧАП, щоб знайти відповіді на найпоширеніші питання про StreamVibe."
        >
          <AccordionSupport />
        </SectionLayout>
        <SectionLayout
          title="Виберіть план, який вам підходить"
          subtitle="Приєднуйтесь до StreamVibe та вибирайте з наших гнучких варіантів підписки, які розроблені для задоволення ваших переглядових вподобань. Готуйтесь до безперервних розваг!"
        >
          <ServiceList />
        </SectionLayout>
        <CTA />
      </Wrapper>
    </>
  )
}
