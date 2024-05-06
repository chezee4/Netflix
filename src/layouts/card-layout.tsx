'use client'
import { cn } from 'src/lib/utils'

type CardLayoutProps = {
  Cardfooter: React.ReactNode
  Cardbody: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function CardLayout({
  Cardfooter,
  Cardbody,
  className,
  onClick = () => {},
}: CardLayoutProps) {
  return (
    <div
      onClick={onClick}
      className="bg-black-10 rounded-lg border border-black-15 max-w-max m-auto relative cursor-pointer hover:scale-[1.01] duration-300 transition-all"
    >
      <div className={cn('flex flex-col gap-2 p-4', className)}>
        {Cardbody}
        {Cardfooter}
      </div>
    </div>
  )
}
