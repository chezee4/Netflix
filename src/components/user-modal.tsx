import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'src/components/ui/dialog'
import { UserForm } from 'src/features/form/user-form'

export function ModalForUserFrom({
  id,
  trigger,
}: {
  id?: string
  trigger: JSX.Element
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {id ? 'Редагувати користувача' : 'Додати користувача'}
          </DialogTitle>
          <DialogDescription>
            {id ? 'Редагувати користувача' : 'Додати користувача'}
          </DialogDescription>
        </DialogHeader>
        <UserForm id={id} setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  )
}
