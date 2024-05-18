'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { navigateLinks } from 'src/config/navigation/navigate'
import { cn } from 'src/lib/utils'

export default function Navigate() {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState<string | null>('')

  useEffect(() => {
    setActiveTab(pathname)
  }, [pathname])

  return (
    <nav className="w-full max-w-[450px] rounded-xl border-black-12 border-4 bg-black-6 hidden lg:block">
      <ul className="flex justify-between items-stretch">
        {navigateLinks.map(link => (
          <motion.li
            key={link.id}
            onClick={() => setActiveTab(link.path)}
            className={cn(
              'relative text-sm font-medium text-white transition duration-200 ease-linear cursor-pointer py-4',
              { 'hover:text-white/60': !(activeTab === link.path) },
            )}
          >
            {activeTab === link.path && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-1 z-10 bg-black-12 mix-blend-exclusion rounded-md"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              ></motion.span>
            )}
            <Link href={link.path} className='p-4'>{link.title}</Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}
