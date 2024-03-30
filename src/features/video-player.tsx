'use client'
import Video from 'next-video'
import img from 'src/../public/Container.jpg'
import Image from 'next/image'

export default function VideoPlayer() {
  return (
    <Video
      src="https://makshon-netflix-api-bucket.s3.eu-north-1.amazonaws.com/videos/IMG_0088.MP4"
      className=" rounded-xl overflow-hidden max-h-[740px]"
      accentColor="#E50000"
    >
      <Image slot="poster" placeholder="blur" src={img} alt="poster" />
    </Video>
  )
}
