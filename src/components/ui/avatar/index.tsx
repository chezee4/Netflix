import Image from 'next/image'
import type { AvatarProps } from './types'
import { cn } from '@/lib/utils'

export default function Avatar({ avatar, name, className }: AvatarProps) {
  return (
    <div
      className={cn(
        className,
        ' w-[75px] h-[78px] mm:w-[85px] mm:h-[88px] rounded-xl overflow-hidden cursor-pointer',
      )}
      title={name}
    >
      <Image src={avatar} alt={name} />
    </div>
  )
}
