'use client'
import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import Loading from 'src/app/loading'

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

    if (user?.role !== 'ADMIN' && user?.role !== 'USER') {
      router.push('/auth/sign-in')
    }
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessTokenData])

  if (loading) {
    return <Loading />
  }

  return <>{children}</>
}

export default UserWrapper
