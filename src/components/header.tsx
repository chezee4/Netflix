'use client'
import Link from 'next/link'
import Image from 'next/image'
import logoHeader from 'src/../public/Logo.svg'
import { FiSearch } from 'react-icons/fi'
import { CiLogin } from 'react-icons/ci'
import Navigate from './navigate'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="w-full max-w-[1640px] px-3 md:px-8 m-auto">
      <div className="w-full flex justify-between items-center py-4">
        <div className=" ">
          <Link href="/">
            <Image src={logoHeader} alt="logo" width={150} height={75} />
          </Link>
        </div>
        <Navigate />
        <div className=" flex gap-x-2">
          <Button size="icon" variant="link">
            <FiSearch />
          </Button>
          <Button size="icon" variant="link">
            <CiLogin />
          </Button>
        </div>
      </div>
    </header>
  )
}
