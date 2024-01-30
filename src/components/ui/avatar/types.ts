import { StaticImageData } from 'next/image'

export type AvatarProps = {
  avatar: StaticImageData
  name: string
  className?: string
}
