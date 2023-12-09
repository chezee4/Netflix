import Link from 'next/link'
import Image from 'next/image'
import logoHeader from '@/../public/Logo.svg'
import { FiSearch } from 'react-icons/fi'
import { PiBell } from 'react-icons/pi'
import Navigate from './navigate'

export default function Header() {
  return (
    <header className="w-full max-w-[1944px] px-3 m-auto">
      <div className="w-full flex justify-between items-center py-4">
        <div className=" ">
          <Link href="/">
            <Image src={logoHeader} alt="logo" width={150} height={75} />
          </Link>
        </div>
        <Navigate />
        <div className=" flex gap-x-2">
          <button>
            <FiSearch className="text-white text-lg" />
          </button>
          <button>
            <PiBell className="text-white  text-2xl" />
          </button>
        </div>
      </div>
    </header>
  )
}
