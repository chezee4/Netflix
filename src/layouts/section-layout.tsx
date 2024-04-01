import React from 'react'
import { cn } from 'src/lib/utils'

type SectionLayoutProps = {
  title: string
  subtitle: string
  className?: string
  children: React.ReactNode
}

export default function SectionLayout({
  title,
  subtitle,
  children,
  className,
}: SectionLayoutProps) {
  return (
    <section className={cn('w-full mb-20 md:mb-36', className)}>
      <div className="mb-20 max-w-5xl">
        <h3 className="text-4xl font-bold mb-4">{title}</h3>
        <h4 className="text-gray-60 line-clamp-2">{subtitle}</h4>
      </div>
      {children}
    </section>
  )
}
