import Image from 'next/image'
import React from 'react'

type CardBodyImageProps = {
  url: any
}

export default function CardBodyImage({ url }: CardBodyImageProps) {
  return (
    <div className='w-[250px] h-[330px] rounded-lg overflow-hidden'>
      <Image
        src={url}
        width={250}
        height={330}
        className='rounded-lg'
        alt="card"
      ></Image>
    </div>
  )
}
