'use client'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { useUserStore } from 'src/store/user-store'
import Loading from 'src/app/loading'

type AdminWrapperProps = {
  children: React.ReactNode
}

const AdminWrapper: FC<AdminWrapperProps> = ({ children }) => {
  const { accessTokenData, setUser, getUser, user } = useUserStore()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    console.log('accessTokenData', accessTokenData)
    if (!accessTokenData) {
      router.push('/auth/sign-in')
      return
    }

    try {
      getUser(accessTokenData.id)
      console.log('user', user)

      if (user?.role !== 'ADMIN') {
        router.push('/auth/sign-in')
      }
    } catch (error) {
      console.error('Failed to fetch user', error)
    } finally {
      setLoading(false)
    }
  }, [accessTokenData])

  if (loading) {
    return <Loading />
  }

  return <>{children}</>
}

export default AdminWrapper
