'use client'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import AdminNavigation from 'src/components/navigation-admin'
import Wrapper from 'src/layouts/wrapper'

import logoHeader from 'public/Logo.svg'
import { useUserStore } from 'src/store/user-store'
import AdminWrapper from 'src/layouts/admin-wrapper'
import UserAccountNav from 'src/components/user-account-nav'
import { buttonVariants } from 'src/components/ui/button'
import { CiLogin } from 'react-icons/ci'
import { ModeToggle } from 'src/components/toggle-mode'

export default function SecondLayout({ children }: { children: React.ReactNode }) {
  const user = useUserStore(state => state.user)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <AdminWrapper>
      <Wrapper>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-black-10 lg:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-5">
                <Link className="flex items-center gap-2 font-semibold" href="/">
                  <Image src={logoHeader} alt="logo" width={150} height={75} />
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <AdminNavigation />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-black-06 justify-between lg:justify-end">
              <Link
                className="flex items-center gap-2 font-semibold lg:hidden"
                href="/admin"
              >
                <Image src={logoHeader} alt="logo" width={150} height={75} />
              </Link>
              {/* <ModeToggle /> */}
              {user && isClient && (
                <Link
                  href="/"
                  className={buttonVariants({
                    variant: 'outline',
                    className: ' border-0',
                  })}
                >
                  Головна
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
            </header>
            {children}
          </div>
        </div>
      </Wrapper>
    </AdminWrapper>
  )
}
