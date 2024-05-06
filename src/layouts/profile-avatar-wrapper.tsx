import Image from 'next/image'

import { cn } from 'src/lib/utils'

type ProfileAvatarWrapperProps = {
  name: string
  avatar: string
  className?: string
  onClick?: () => void
}
export default function ProfileAvatarWrapper({
  name,
  avatar,
  className,
  onClick,
}: ProfileAvatarWrapperProps) {
  return (
    <div
      className={cn(
        ' max-w-xs max-h-80 w-full bg-slate-200 rounded-lg overflow-hidden',
        className,
      )}
      onClick={onClick}
    >
      <Image alt={name} className=" block w-full h-full object-cover" src={avatar}  width={320} height={320}/>
    </div>
  )
}
