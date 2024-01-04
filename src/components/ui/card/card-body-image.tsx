import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type CardBodyImageProps = {
  url: any,
  className?: string
}

export default function CardBodyImage({ url,className }: CardBodyImageProps) {
  return (
    <div className={cn('w-full m-auto h-full max-w-[240px] max-h-[270px] mb-2 rounded-lg overflow-hidden',className)}>
      <Image
        src={url}
        width={250}
        height={320}
        className='rounded-lg object-bottom-bottom object-cover '
        alt="card"
      ></Image>
    </div>
  )
}
