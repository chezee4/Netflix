"use client"
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
import { User } from 'src/types'
import { users } from 'src/config/users'

const UserFormSchrma = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.string(),
})
export function UserForm({ id }: { id?: string }) {
  const form = useForm<z.infer<typeof UserFormSchrma>>({
    resolver: zodResolver(UserFormSchrma),
    defaultValues: {
      id: id || '',
      name: '',
      email: '',
      role: '',
    },
  })
  const { toast } = useToast()

  useEffect(() => {
    let usersLocalStorage = JSON.parse(localStorage.getItem('users') || '[]') as User[]
    if (!usersLocalStorage.length) {
      usersLocalStorage = users
    }
    if (id) {
      const user = usersLocalStorage.find((item: User) => item.id === id)
      if (user) {
        form.reset(user)
      }
    }
  }, [id, form])

  const onSubmit = (data: z.infer<typeof UserFormSchrma>) => {
    let usersLocalStorage = JSON.parse(localStorage.getItem('users') || '[]') as User[]
    if (!usersLocalStorage.length) {
      usersLocalStorage = users
    }

    if (id) {
      usersLocalStorage = usersLocalStorage.map((item: any) =>
        item.id === id ? { ...item, ...data } : item,
      )
    } else {
      usersLocalStorage.push(data)
    }
    localStorage.setItem('users', JSON.stringify(usersLocalStorage))
    toast({
      title: 'Review Added',
      description: 'Your review has been added successfully.',
    })
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} >
        <div className="grid gap-4 py-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <FormLabel>Name</FormLabel>
                    <Input
                      onChange={field.onChange}
                      value={field.value}
                      placeholder="Enter Name"
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
                      placeholder="Enter Email"
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
                    <FormLabel>Role</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {['Admin', 'User'].map(role => (
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
            Add
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
