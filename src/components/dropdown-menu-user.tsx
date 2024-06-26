'use client'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from 'src/components/ui/dropdown-menu'
import { Button } from 'src/components/ui/button'
import { MoreHorizontal } from 'lucide-react'
import { ModalForUserFrom } from 'src/components/user-modal'
import { UserType } from 'src/types'
import { useUserStore } from 'src/store/user-store'

type DropdownMenuUserProps = {
  user: UserType
}

export const DropdownMenuUser = ({ user }: DropdownMenuUserProps) => {
  const deleteUser = useUserStore(state => state.deleteUser)
  const handleDeleteCar = (id: string) => {
    deleteUser(id)
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="h-8 w-8 p-0">
          <span className="sr-only">Відкрити меню</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="mb-2">Дії</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.email)}>
          Копіювати email користувача
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <ModalForUserFrom
          trigger={
            <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-300/20 hover:text-accent-foreground">
              Редагувати користувача
            </div>
          }
          id={user.id}
        />
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleDeleteCar(user.id)}>
          Видалити користувача
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
