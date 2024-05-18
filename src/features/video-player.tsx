'use client'

type VideoPlayerProps = {
  videoUrl: string
  imageUrl: string
}
export default function VideoPlayer({ videoUrl, imageUrl }: VideoPlayerProps) {
  console.log('videoUrl', videoUrl)
  return (
    <section className="w-full mt-[95px] mb-6">
      <video
        src={videoUrl}
        className=" rounded-xl overflow-hidden w-full max-h-[740px]"
        controls
        poster={imageUrl}
      ></video>
    </section>
  )
}
