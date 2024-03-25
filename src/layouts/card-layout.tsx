import React, { FC } from 'react'

type CardLayoutProps = {
  Cardfooter: React.ReactNode
  Cardbody: React.ReactNode
}

export default function CardLayout({ Cardfooter, Cardbody }: CardLayoutProps) {
  return (
    <div className="bg-black-10 rounded-lg border border-black-15 max-w-max m-auto">
      <div className="flex flex-col gap-2 p-4">
        {Cardbody}
        {Cardfooter}
      </div>
    </div>
  )
}
