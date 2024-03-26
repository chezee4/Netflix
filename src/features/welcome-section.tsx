import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPlay } from 'react-icons/fa6'
import welcomeImg from 'src/../public/welcome_section.png'
import { Button } from 'src/components/ui/button'

export default function WelcomeSection() {
  return (
    <section>
      <Image src={welcomeImg} alt="Welcome" />
      <div className=" flex flex-col items-center justify-center max-w-6xl w-full mx-auto -mt-16 pb-32">
        <h1 className="text-6xl font-bold text-center mt-10">
          The Best Streaming Experience
        </h1>
        <p className="text-lg text-center mt-4 text-gray-60">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you can
          enjoy a wide variety of content, including the latest blockbusters, classic
          movies, popular TV shows, and more. You can also create your own
          watchlists, so you can easily find the content you want to watch.
        </p>
        <Button variant="default" className="mt-8 gap-2">
          <Link href="/">
            <FaPlay />
            Start Watching Now
          </Link>
        </Button>
      </div>
    </section>
  )
}
