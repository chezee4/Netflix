import React from 'react'
import Image from 'next/image'
import supportIMG from 'src/../public/support_img.png'
import SupportForm from './form/support-form'

export default function SupportSection() {
  return (
    <div className="flex justify-between mt-36 w-full">
      <div className="max-w-lg w-full">
        <h2 className="text-6xl font-bold mb-4">
          Ласкаво просимо на нашу сторінку підтримки!
        </h2>
        <h3 className=" text-lg text-gray-60 line-clamp-2 mb-4">
          Ми тут, щоб допомогти вам з будь-якими проблемами, які у вас можуть
          виникнути з нашим продуктом.
        </h3>

        <div className=" overflow-hidden rounded-lg border-8 max-h-[500px] border-black-10">
          <Image src={supportIMG} alt="Support" />
        </div>
      </div>
      <SupportForm />
    </div>
  )
}
