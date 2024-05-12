'use client'

import { useEffect, useState } from 'react'

import { cn } from 'src/lib/utils'
import { Icons } from 'src/components/ui/icons'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from 'src/components/ui/use-toast'
import { authService } from 'src/services/auth'
import { getAccessTokenData } from 'src/store/auth-store'
import {
  AuthSignInValiador,
  type TAuthSignInValiador,
} from 'src/lib/validators/auth'
import { useUserStore } from 'src/store/user-store'
import { useToken } from 'src/hooks/useToken'
import { userService } from 'src/services/user'
import { authStore } from 'src/store/auth-store'
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SignInForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { getUser } = useUserStore()
  const { toast } = useToast()
  const { accessTokenData } = authStore()
  console.log(accessTokenData)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthSignInValiador>({
    resolver: zodResolver(AuthSignInValiador),
  })

  useEffect(() => {
    userService.getUser('8e2ba6a0-7029-4e6e-b0c2-bf3c3d818ad2').then(user => {
      console.log(user)
    })
  }, [])

  const onSubmit = (data: TAuthSignInValiador) => {
    authService
      .signIn(data)
      .then(() => {
        toast({
          title: 'User signed in',
          description: 'User has been signed in successfully.',
        })
        console.log('User signed in')
      })
      .catch(error => {
        toast({
          title: 'Failed to sign in',
          description: 'Failed to sign in user.',
        })

        console.error(error)
      })
    setIsLoading(true)

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
              Email
            </Label>
            <Input
              {...register('username')}
              id="user"
              placeholder="chezee4"
              type="text"
              autoCapitalize="none"
              autoComplete="text"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              {...register('password')}
              id="password"
              placeholder="123456789"
              type="text"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}
