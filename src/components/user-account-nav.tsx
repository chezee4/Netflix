'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from 'src/components/ui/dropdown-menu'

import { useUserStore } from 'src/store/user-store'
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'

const UserAccountNav = () => {
  const router = useRouter()
  const { user, logout } = useUserStore()
  const signOut = () => {
    logout()
    window.location.reload()
  }
  if (!user) return <div>fwfwfwfwffw</div>
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Avatar className=" overflow-hidden cursor-pointer">
          <AvatarImage src={user.avatar} alt={user.username} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-60" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-0.5 leading-none">
            <p className="font-medium text-sm text-black">{user.username}</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/profile?tab=profile">Профіль</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={signOut} className="cursor-pointer">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav
