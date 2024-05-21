'use client'
import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from 'src/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'src/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/select'
import { DialogFooter } from 'src/components/ui/dialog'
import { Button } from 'src/components/ui/button'
import { useToast } from 'src/components/ui/use-toast'

import { useUserStore } from 'src/store/user-store'
import { UserFormSchrma, TUserFormSchema } from 'src/lib/validators/create-user'

import { UserType, Role } from 'src/types'

type UserFormProps = {
  id?: string
  setIsOpen: (isOpen: boolean) => void
}
export function UserForm({ id, setIsOpen }: UserFormProps) {
  const { toast } = useToast()
  const createUser = useUserStore(state => state.createUser)
  const updateUser = useUserStore(state => state.updatedUser)
  const users = useUserStore(state => state.users)

  const form = useForm<TUserFormSchema>({
    resolver: zodResolver(UserFormSchrma),
    defaultValues: {
      username: '',
      password: '',
      email: '',
      role: Role.USER,
    },
  })

  useEffect(() => {
    if (id) {
      const user = users.find((item: UserType) => item.id === id)
      form.reset(user)
    }
  }, [id, form, users])

  const onSubmit = (data: TUserFormSchema) => {
    if (id) {
      updateUser(id, data)
      toast({
        title: 'Користувач успішно оновлений',
        description: `Користувач ${data.username} успішно оновлений`,
      })
    } else {
      createUser(data)
      toast({
        title: 'Користувач успішно створений',
        description: `Користувач ${data.username} успішно створений`,
      })
    }
    setIsOpen(false)
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <FormLabel>Ім&apos;я</FormLabel>
                    <Input
                      onChange={field.onChange}
                      value={field.value}
                      placeholder="Введіть ім'я та прізвище"
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <FormLabel>Email</FormLabel>
                    <Input
                      onChange={field.onChange}
                      value={field.value}
                      placeholder="Введіть Email"
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <FormLabel>Password</FormLabel>
                    <Input
                      onChange={field.onChange}
                      value={field.value}
                      placeholder="Введіть пароль"
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <FormLabel>Роль</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Виберіть роль" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {['ADMIN', 'USER'].map(role => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <DialogFooter>
          <Button type="submit" variant="secondary">
            Додати
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
