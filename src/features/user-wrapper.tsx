'use client'

import { useRouter } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { userService } from 'src/services/user'
import { useUserStore } from 'src/store/user-store'

type UserWrapperProps = {
  children: React.ReactNode
}

const UserWrapper: FC<UserWrapperProps> = ({ children }) => {
  const { accessTokenData, getUser, user } = useUserStore()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!accessTokenData) {
      router.push('/auth/sign-in')
      return
    }
    getUser(accessTokenData.id)
    console.log('user', user)
    if (user?.role !== 'ADMIN' && user?.role !== 'USER') {
      router.push('/auth/sign-in')
    }
    setLoading(false)
  }, [accessTokenData])

  if (loading) {
    return <div>Loading...</div> // TODO: think about suspense
  }

  return <>{children}</>
}

export default UserWrapper
