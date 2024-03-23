'use client'
import Link from 'next/link'
import { navigateLinks } from 'src/config/navigate'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from 'src/lib/utils'

export default function Navigate() {
  const [activeTab, setActiveTab] = useState<string>(navigateLinks[0].id)
  return (
    <nav className="w-full max-w-[580px] rounded-xl border-black-12 border-4 bg-black-6 hidden lg:block">
      <ul className="flex justify-between items-stretch">
        {navigateLinks.map(link => (
          <motion.li
            key={link.id}
            onClick={() => setActiveTab(link.id)}
            className={cn(
              'relative text-sm font-medium text-white transition duration-200 ease-linear cursor-pointer p-4',
              { 'hover:text-white/60': !(activeTab === link.id) },
            )}
          >
            {activeTab === link.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-1 z-10 bg-black-12 mix-blend-exclusion rounded-md"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              ></motion.span>
            )}
            <Link href="/">{link.title}</Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}
