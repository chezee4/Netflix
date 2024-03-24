import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { ThemeProvider } from 'src/context/theme-provider'
import './globals.css'
import { cn } from 'src/lib/utils'
import Header from 'src/components/header'
import Footer from 'src/components/footer'

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
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
