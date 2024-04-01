import React from 'react'
import Image from 'next/image'
import supportIMG from 'src/../public/support_img.png'
import SupportForm from './form/support-form'

export default function SupportSection() {
  return (
    <div className="flex justify-between mt-36 w-full">
      <div className="max-w-lg w-full">
        <h2 className="text-6xl font-bold mb-4">Welcome to our support page!</h2>
        <h3 className=" text-lg text-gray-60 line-clamp-2 mb-4">
          We are here to help you with any problems you may be having with our
          product.
        </h3>

        <div className=" overflow-hidden rounded-lg border-8 max-h-[500px] border-black-10">
          <Image src={supportIMG} alt="Support" />
        </div>
      </div>
      <SupportForm />
    </div>
  )
}
