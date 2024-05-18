'use client'
import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
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
import { useToast } from 'src/components/ui/use-toast'
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
import { UserType, Role } from 'src/types'
import { useUserStore } from 'src/store/user-store'

const UserFormSchrma = z.object({
  username: z.string(),
  email: z.string().email('Введіть коректний Email'),
  password: z.string().min(6, 'Пароль повинен бути не менше 6 символів'),
  role: z.nativeEnum(Role),
})
export function UserForm({ id }: { id?: string }) {
  const createUser = useUserStore(state => state.createUser)
  const updateUser = useUserStore(state => state.updatedUser)
  const users = useUserStore(state => state.users)
  const form = useForm<z.infer<typeof UserFormSchrma>>({
    resolver: zodResolver(UserFormSchrma),
    defaultValues: {
      username: '',
      password: '',
      email: '',
      role: Role.USER,
    },
  })
  const { toast } = useToast()

  useEffect(() => {
    if (id) {
      const user = users.find((item: UserType) => item.id === id)
      form.reset(user)
    }
  }, [id, form, users])

  const onSubmit = (data: z.infer<typeof UserFormSchrma>) => {
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
