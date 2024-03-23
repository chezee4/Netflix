import { cn } from 'src/lib/utils'
import Chap from '../chap'

type CardFooterProps = {
  className?: string
  children: React.ReactNode
}

export default function CardFooter({ className, children }: CardFooterProps) {
  return <div className={cn('w-full flex items-center', className)}>{children}</div>
}
