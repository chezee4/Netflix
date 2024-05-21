'use client'
import * as React from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'
import { useToast } from 'src/components/ui/use-toast'

import { authService } from 'src/services/auth'
import { cn } from 'src/lib/utils'

import {
  AuthSignUpValiador,
  type TAuthSignUpValiador,
} from 'src/lib/validators/auth'

import { Icons } from 'src/components/ui/icons'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SignUpForm({ className, ...props }: UserAuthFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthSignUpValiador>({
    resolver: zodResolver(AuthSignUpValiador),
  })

  const onSubmit = (data: TAuthSignUpValiador) => {
    setIsLoading(true)
    authService
      .signUp(data)
      .then(() => {
        toast({
          title: 'User signed up',
          description: 'User has been signed up successfully.',
        })
        router.push('/auth/sign-in')
      })
      .catch(error => {
        toast({
          title: 'Failed to sign up',
          description: 'Failed to sign up user.',
        })
      })

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-3">
          <div className="grid gap-2.5">
            <Label className="sr-only" htmlFor="user">
              User
            </Label>
            <Input
              {...register('username')}
              id="user"
              placeholder="username"
              type="text"
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              {...register('email')}
              id="email"
              placeholder="example@gmail.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              {...register('password')}
              id="password"
              placeholder="password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  )
}
