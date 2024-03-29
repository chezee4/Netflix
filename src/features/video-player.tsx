'use client'
import { useEffect, useState } from 'react'
import Video from 'next-video'
import ky from 'ky'

interface Movie {
  id: number
  name: string
  image: string
  alt: string
  video: string
}

export default function VideoPlayer() {
  const [videoSrc, setVideoSrc] = useState('')

  useEffect(() => {
    ky('https://netflix-api-4d6db95885b9.herokuapp.com/api/movies')
      .json<Movie[]>()
      .then(data => {
        setVideoSrc(data[0].video)
      })
      .catch(error => console.error('Error:', error))
  }, [])

  return videoSrc && <Video src={videoSrc} />
}
