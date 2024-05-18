import Link from 'next/link'
import Image from 'next/image'

import Navigate from 'src/components/navigate'
import { Button } from 'src/components/ui/button'
import { ModeToggle } from 'src/components/toggle-mode'

import logoHeader from 'src/../public/Logo.svg'
import { FiSearch } from 'react-icons/fi'
import { CiLogin } from 'react-icons/ci'

export default function Header() {
  return (
    <header className="w-full m-auto fixed top-0 z-50 bg-gray-50/90 dark:bg-black-8/90">
      <div className="w-full max-w-[1640px] px-3 md:px-8 m-auto flex justify-between items-center py-4">
        <div className=" ">
          <Link href="/">
            <Image src={logoHeader} alt="logo" width={150} height={75} />
          </Link>
        </div>
        <Navigate />
        <div className=" flex gap-x-2">
          <ModeToggle />
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
