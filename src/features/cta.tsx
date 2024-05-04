import { Button } from 'src/components/ui/button'

export default function CTA() {
  return (
    <section className=" border-black-15 border sm:border-none relative w-full bg-bg-cva before:content-['_'] bg-cover before:rounded-[11px] before:absolute eclipse before:inset-0 rounded-xl mb-20 md:mb-36">
      <div className="relative z-10 w-full flex justify-center items-center lg:px-16 px-6 sm:py-12 py-10 sm:flex-row flex-col ">
        <div className="flex-1 flex flex-col">
          <h2 className=" font-medium sm:font-bold text-center sm:text-start lg:text-[32px] text-[26px] text-white xs:leading-[150%] leading-[120%] w-full">
            Розпочніть свій безкоштовний пробний період сьогодні!
          </h2>
          <p className=" text-gray-60 text-sm text-center sm:text-start lg:text-[18px] leading-[150%] mt-5">
            Це чіткий та стислий заклик до дії, який заохочує користувачів
            зареєструватися для безкоштовного пробного періоду StreamVibe.
          </p>
        </div>
        <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
          <Button>Розпочати пробний період</Button>
        </div>
      </div>
    </section>
  )
}
