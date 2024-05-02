import Image from 'next/image'
import { cn } from 'src/lib/utils'

type MoviesVideoWrapperProps = {
  name: string
  avatar: string
  className?: string
  onClick?: () => void
}
export default function MoviesVideoWrapper({
  name,
  avatar,
  className,
  onClick,
}: MoviesVideoWrapperProps) {
  return (
    <div
      className={cn(
        ' max-w-80 max-h-80 w-full bg-slate-200 rounded-lg overflow-hidden',
        className,
      )}
      onClick={onClick}
    >
      <Image alt={name} className=" block w-full h-full" src={avatar} />
    </div>
  )
}
