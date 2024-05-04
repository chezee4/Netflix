'use client'
import Video from 'next-video'
import img from 'src/../public/Container.jpg'
import Image from 'next/image'

type VideoPlayerProps = {
  videoUrl?: string
}
export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  return (
    <section className="w-full">
      <iframe
        width="100%"
        height="600px"
        src="https://www.youtube.com/embed/27hMNWcsa-Y"
        title="YouTube video player"
        className="mb-10"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
    // <Video
    //   src="https://makshon-netflix-api-bucket.s3.eu-north-1.amazonaws.com/videos/IMG_0088.MP4"
    //   className=" rounded-xl overflow-hidden max-h-[740px]"
    //   accentColor="#E50000"
    // >
    //   <Image slot="poster" placeholder="blur" src={img} alt="poster" />
    // </Video>
  )
}
