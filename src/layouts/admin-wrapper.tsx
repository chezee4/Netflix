'use client'
import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { useUserStore } from 'src/store/user-store'

import Loading from 'src/app/loading'

type AdminWrapperProps = {
  children: React.ReactNode
}

const AdminWrapper: FC<AdminWrapperProps> = ({ children }) => {
  const { accessTokenData, getUser, user } = useUserStore()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    if (!accessTokenData) {
      router.push('/auth/sign-in')
      return
    }

    try {
      getUser(accessTokenData.id)

      if (user?.role !== 'ADMIN') {
        router.push('/auth/sign-in')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessTokenData])

  if (loading) {
    return <Loading />
  }

  return <>{children}</>
}

export default AdminWrapper
