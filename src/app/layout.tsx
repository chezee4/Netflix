import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import { ThemeProvider } from 'src/context/theme-provider'
import { Toaster } from 'src/components/ui/toaster'

import { cn } from 'src/lib/utils'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Netflix Clone',
  description: 'Netflix Clone Ap',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(manrope.className, '')}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
