'use client'
import { create } from 'zustand'
import { userService } from 'src/services/user'
import { UserFormType, UserType } from 'src/types'
import { createJSONStorage, persist } from 'zustand/middleware'

type UserStore = {
  user: UserType | null
  accessToken: string | undefined
  accessTokenData: any
  setAccessToken: (accessToken: string) => void
  setAccessTokenData: (accessTokenData: any) => void
  getUser: (id: string) => void
  updateUser: (user: UserFormType) => void
  updateAvatar: (avatar: FormData) => void
  setUser: (user: UserType) => void
  deleteUser: () => Promise<void>
  isLoading: boolean
  error: unknown
  logout: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: undefined,
      accessTokenData: undefined,
      setAccessToken: (accessToken: string) => set({ accessToken }),
      setAccessTokenData: (accessTokenData: any) => set({ accessTokenData }),
      getUser: async id => {
        if (!id) return set({ error: 'User ID is required' })

        set({ isLoading: true })

        try {
          const fetchedUser: UserType = await userService.getUser(id)
          set({
            user: fetchedUser,
            isLoading: false,
          })
        } catch (error) {
          console.error('Failed to fetch user', error)
          set({ error: 'Failed to fetch user', isLoading: false })
        }
      },
      setUser: user => set(state => ({ ...state, user })),
      updateUser: async data => {
        set({ isLoading: true })
        try {
          const user = get().user
          if (user) {
            const updatedUser = await userService.updateUser(user.id, data)
            set({ user: updatedUser, isLoading: false })
          }
        } catch (error) {
          set({ error, isLoading: false })
        }
      },
      updateAvatar: async avatar => {
        set({ isLoading: true })
        try {
          const user = get().user
          if (user) {
            const updatedUser = await userService.updateAvatar(user.id, avatar)
            set({ user: updatedUser, isLoading: false })
          }
        } catch (error) {
          set({ error, isLoading: false })
        }
      },
      deleteUser: async () => {
        set({ isLoading: true })
        try {
          const { user } = get()
          if (user) {
            await userService.deleteUser(user.id)
            set({ user: null, isLoading: false })
          }
        } catch (error) {
          set({ error, isLoading: false })
        }
      },
      logout: () =>
        set({ user: null, accessToken: undefined, accessTokenData: undefined }),

      isLoading: false,
      error: null,
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({
        accessTokenData: state.accessTokenData,
        accessToken: state.accessToken,
        user: state.user,
      }),
    },
  ),
)
