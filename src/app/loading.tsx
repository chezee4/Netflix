import React from 'react'
import Image from 'next/image'
import loadingGIF from 'public/loadingGIF.gif'

export default function Loading() {
  return (
    <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Image src={loadingGIF} alt="Loading..." className=' invert'/>
    </div>
  )
}
