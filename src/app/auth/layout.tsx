'use client'
import { Metadata } from 'next'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { cn } from 'src/lib/utils'
import { buttonVariants } from 'src/components/ui/button'

type AuthenticationLayoutProps = {
  children: React.ReactNode
}

export default function AuthenticationLayout({
  children,
}: AuthenticationLayoutProps) {
  const pathname = usePathname()
  const isSignInPage = pathname === '/auth/sign-in'
  const linkText = isSignInPage ? 'Sign Up' : 'Sign In'
  const linkHref = isSignInPage ? '/auth/sign-up' : '/auth/sign-in'
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href={linkHref}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 md:right-8 md:top-8',
        )}
      >
        {linkText}
      </Link>
      <div className="relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 brightness-[35%] bg-bg-movies bg-cover" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          <span>Streamvibe</span>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              Ми раді вітати вас на нашому сайті. Зареєструйтеся або увійдіть в
              акаунт, щоб скористатися всіма можливостями.
            </p>
            <footer className="text-sm">Дуфинець Вадим та Баран Максим</footer>
          </blockquote>
        </div>
      </div>
      {children}
    </div>
  )
}
