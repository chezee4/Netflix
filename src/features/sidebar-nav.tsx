'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { cn, createUrlPath } from 'src/lib/utils'

import { buttonVariants } from 'src/components/ui/button'
import { tabsData } from 'src/constants/profile'
import { ProfileTab } from 'src/types'

export default function SidebarNav() {
  const searchParams = useSearchParams()
  const tab = searchParams.get('tab')

  const tabs = Object.entries(tabsData).map(([key, item]: [string, ProfileTab]) => (
    <Link
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        tab === key
          ? 'bg-muted hover:bg-muted'
          : 'hover:bg-muted',
        'justify-start',
        'flex justify-start items-center px-4 py-2 gap-2 rounded-md font-normal',
      )}
      key={key}
      href={createUrlPath('/profile', '', { tab: key })}
    >
      {item.icon}
      {item.title}
    </Link>
  ))

  return (
    <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
      {tabs}
    </nav>
  )
}
