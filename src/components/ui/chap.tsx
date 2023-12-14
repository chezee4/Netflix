import { cn } from '@/lib/utils'
import React from 'react'

export default function Chap({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-[51px] gap-1 border px-2 py-[2px] text-gray-60 bg-black-8 border-black-15 ',
        className,
      )}
    >
      {children}
    </div>
  )
}
