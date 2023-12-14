'use client'
import CTA from '@/components/cta'
import DevicesList from '@/components/devices-list'
import CardLayout from '@/components/layouts/card-layout'
import CardBodyImage from '@/components/ui/card/card-body-image'
import CardFooter from '@/components/ui/card/card-footer'
import Chap from '@/components/ui/chap'
import { list } from '@/config/card-film'
import { AiFillClockCircle } from 'react-icons/ai'
import { IoEyeSharp } from 'react-icons/io5'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full max-w-[1640px] px-3 md:px-8 m-auto">
      <DevicesList />
      <CTA />
      <div className="flex justify-between w-full gap-3 mb-10 ">
        {list.map((item, index) => {
          return (
            <CardLayout
              key={index}
              Cardbody={<CardBodyImage url={item.img} />}
              Cardfooter={
                <CardFooter className="justify-between">
                  <Chap >
                    <AiFillClockCircle size={20}/>
                    <h3>{item.duration}</h3>
                  </Chap>
                  <Chap>
                    <IoEyeSharp size={20}/>
                    <h3>{item.numberOfViews}</h3>
                  </Chap>
                </CardFooter>
              }
            />
          )
        })}
      </div>
    </main>
  )
}
