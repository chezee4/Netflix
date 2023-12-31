import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/header'
import { Providers } from '@/context/providers'
const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(manrope.className, ' bg-black-8')}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
