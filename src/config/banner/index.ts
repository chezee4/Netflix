import bannerIMG from 'src/../public/BgMovies.jpg'
import bannerIMG2 from 'src/../public/Container.jpg'

export const banners = [
  {
    id: '1',
    title: 'Месники: Завершення',
    subtitle:
      'За допомогою залишихся союзників, Месники повинні зібратися ще раз, щоб скасувати дії Таноса і відновити хаос у всесвіті, незалежно від того, які наслідки можуть бути в запасі, і незалежно від того, з ким вони стикаються... Помстіться за впавших.',
    img: bannerIMG,
  },
  {
    id: '2',
    title: 'Месники: Війна нескінченності',
    subtitle:
      'Месники та їх союзники повинні бути готові жертвувати всім у спробі відбити могутнього Таноса, перш ніж його блискавичне спустошення та руїна покладуть кінець всесвіту.',
    img: bannerIMG2,
  },
  {
    id: '3',
    title: 'Месники: Ера Альтрона',
    subtitle:
      'Коли Тоні Старк та Брюс Беннер намагаються запустити сплячу програму миротворця під назвою Альтрон, все йде жахливо не так, і Месникам доводиться зупинити зловісного Альтрона від втілення його жахливого плану.',
    img: bannerIMG,
  },
  {
    id: '4',
    title: 'Месники',
    subtitle:
      "Наймогутніші герої Землі повинні об'єднатися та навчитися боротися як команда, якщо вони збираються зупинити хитрого Локі та його інопланетну армію від рабства людства.",
    img: bannerIMG2,
  },
] as const
