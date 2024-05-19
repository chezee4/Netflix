'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { cn, getUserIdFromToken } from 'src/lib/utils'
import { Icons } from 'src/components/ui/icons'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from 'src/components/ui/use-toast'
import { authService } from 'src/services/auth'
import {
  AuthSignInValiador,
  type TAuthSignInValiador,
} from 'src/lib/validators/auth'

import { useUserStore } from 'src/store/user-store'
import { userService } from 'src/services/user'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SignInForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthSignInValiador>({
    resolver: zodResolver(AuthSignInValiador),
  })
  const router = useRouter()
  const { setAccessToken, setAccessTokenData, accessTokenData, setUser } =
    useUserStore()

  useEffect(() => {
    accessTokenData &&
      userService.getUser(accessTokenData.UserId).then(user => {
        setUser(user)
      })
  }, [accessTokenData])

  const onSubmit = (data: TAuthSignInValiador) => {
    setIsLoading(true)
    authService
      .signIn(data)
      .then(data => {
        setAccessToken(data)
        setAccessTokenData(getUserIdFromToken(data))
        toast({
          title: 'User signed in',
          description: 'User has been signed in successfully.',
        })
        
        router.push('/')
        
      })
      .catch(error => {
        toast({
          title: 'Failed to sign in',
          description: 'Failed to sign in user.',
        })

        console.error(error)
      })
      .finally(() => setIsLoading(false))
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
