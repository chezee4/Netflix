import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPlay } from 'react-icons/fa6'
import welcomeImg from 'src/../public/welcome_section.png'
import { buttonVariants } from 'src/components/ui/button'
import { cn } from 'src/lib/utils'

export default function WelcomeSection() {
  return (
    <section>
      <Image src={welcomeImg} alt="Welcome" />
      <div className=" flex flex-col items-center justify-center max-w-6xl w-full mx-auto -mt-20 pb-32">
        <h1 className="text-6xl font-bold text-center mt-10">
          Найкращий досвід перегляду
        </h1>
        <p className="text-lg text-center mt-4 text-gray-60">
          StreamVibe - це найкращий досвід перегляду для перегляду ваших улюблених
          фільмів та шоу на вимогу, в будь-який час, будь-де. З StreamVibe ви можете
          насолоджуватися широким вибором контенту, включаючи останні блокбастери,
          класичні фільми, популярні телешоу та багато іншого. Ви також можете
          створювати свої власні списки перегляду, щоб легко знайти контент, який ви
          хочете дивитися.
        </p>

        <Link
          href="/"
          className={cn(buttonVariants({ variant: 'default' }), 'mt-8 gap-2')}
        >
          <FaPlay />
          Почати дивитися зараз
        </Link>
      </div>
    </section>
  )
}
