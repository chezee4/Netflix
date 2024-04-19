'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { FaRegUser } from 'react-icons/fa6'
import { BiMovie } from 'react-icons/bi'

import { MdOutlineAddToPhotos } from 'react-icons/md'
import { cn } from 'src/lib/utils'

export default function AdminNavigation() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start px-4 text-sm gap-3 font-medium">
      <Link
        href="/admin/users"
        className={cn(
          'flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-900  transition-all hover:text-gray-900 hover:bg-black-12   dark:text-gray-50 dark:hover:text-gray-50',
          {
            'bg-gray-100 dark:bg-black-15': pathname === '/admin/users',
          },
        )}
      >
        <FaRegUser className="h-4 w-4" />
        Users
      </Link>
      <Link
        href="/admin/movies"
        className={cn(
          'flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-900  transition-all hover:text-gray-900 hover:bg-black-12   dark:text-gray-50 dark:hover:text-gray-50',
          {
            'bg-gray-100 dark:bg-black-15': pathname === '/admin/movies',
          },
        )}
      >
        <BiMovie className="h-5 w-5" />
        Movies
      </Link>
      <Link
        href="/admin/movies-add"
        className={cn(
          'flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-900  transition-all hover:text-gray-900 hover:bg-black-12  dark:text-gray-50 dark:hover:text-gray-50',
          {
            'bg-gray-100 dark:bg-black-15': pathname === '/admin/movies-add',
          },
        )}
      >
        <MdOutlineAddToPhotos className="h-5 w-5" />
        <span> Add Movies</span>
      </Link>
    </nav>
  )
}
