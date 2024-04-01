import React from 'react'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col items-center justify-between w-full max-w-[1640px] px-3 md:px-8 m-auto">
      {children}
    </div>
  )
}
