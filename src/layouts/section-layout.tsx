import React from 'react'

type SectionLayoutProps = {
  title: string
  subtitle: string
  children: React.ReactNode
}

export default function SectionLayout({
  title,
  subtitle,
  children,
}: SectionLayoutProps) {
  return (
    <section className="w-full mb-20 md:mb-36">
      <div className="mb-20 max-w-5xl">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <h4 className="text-gray-60 line-clamp-2">{subtitle}</h4>
      </div>
      {children}
    </section>
  )
}
