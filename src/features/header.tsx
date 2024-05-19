'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navigate from 'src/components/navigate'
import { buttonVariants } from 'src/components/ui/button'
import { ModeToggle } from 'src/components/toggle-mode'

import logoHeader from 'src/../public/Logo.svg'
import { CiLogin } from 'react-icons/ci'
import { useUserStore } from 'src/store/user-store'
import UserAccountNav from 'src/components/user-account-nav'

export default function Header() {
  const user = useUserStore(state => state.user)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <header className="w-full m-auto fixed top-0 z-50 bg-gray-50/90 dark:bg-black-8/90 border-b border-black-10/80">
      <div className="w-full max-w-[1640px] px-3 md:px-8 m-auto flex justify-between items-center py-4">
        <div className=" ">
          <Link href="/">
            <Image src={logoHeader} alt="logo" width={150} height={75} />
          </Link>
        </div>
        <Navigate />
        <div className=" flex items-center gap-x-2">
          <ModeToggle />
          {user?.role === 'ADMIN' && isClient && (
            <Link
              href="/admin/users"
              className={buttonVariants({
                variant: 'outline',
                className: ' border-0',
              })}
            >
              Адмінка
            </Link>
          )}
          {user && isClient ? (
            <UserAccountNav />
          ) : (
            <Link
              href="/auth/sign-in"
              className={buttonVariants({
                variant: 'outline',
                size: 'icon',
                className: ' border-0',
              })}
            >
              <CiLogin />
              <span>Увійти</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
