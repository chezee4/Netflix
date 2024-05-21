'use client'
import { create } from 'zustand'
import { userService } from 'src/services/user'
import { UserProfileFormType, UserAdminFormType, UserType } from 'src/types'
import { createJSONStorage, persist } from 'zustand/middleware'

type UserStore = {
  user: UserType | null
  users: UserType[]
  accessToken: string | undefined
  accessTokenData: any
  setAccessToken: (accessToken: string) => void
  setAccessTokenData: (accessTokenData: any) => void
  getUser: (id: string) => void
  getAllUsers: () => void
  createUser: (data: UserAdminFormType) => void
  updatedUser: (id: string, data: UserAdminFormType) => void
  updateProfileUser: (user: UserProfileFormType) => void
  updateProfileAvatar: (avatar: FormData) => void
  setUser: (user: UserType) => void
  deleteUser: (id: string) => void
  isLoading: boolean
  error: unknown
  logout: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      users: [],
      accessToken: undefined,
      accessTokenData: undefined,
      setAccessToken: (accessToken: string) => set({ accessToken }),
      setAccessTokenData: (accessTokenData: any) => set({ accessTokenData }),
      getAllUsers: async () => {
        set({ isLoading: true })

        try {
          const fetchedUsers: UserType[] = await userService.getUsers()
          set({
            users: fetchedUsers,
            isLoading: false,
          })
        } catch (error) {
          console.error('Failed to fetch users', error)
          set({ error: 'Failed to fetch users', isLoading: false })
        }
      },
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
      createUser: async data => {
        set({ isLoading: true })
        try {
          const users = get().users
          const user = await userService.createUser(data)
          set({ users: [user, ...users], isLoading: false })
        } catch (error) {
          set({ error, isLoading: false })
        }
      },
      updatedUser: async (id, data) => {
        set({ isLoading: true })
        try {
          const users = get().users
          const updatedUser = await userService.updateUser(id, data)
          const updatedUsers = users.map(user =>
            user.id === id ? updatedUser : user,
          )
          set({ users: updatedUsers, isLoading: false })
        } catch (error) {
          set({ error, isLoading: false })
        }
      },
      setUser: user => set(state => ({ ...state, user })),
      updateProfileUser: async data => {
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
      updateProfileAvatar: async avatar => {
        set({ isLoading: true })
        try {
          const user = get().user
          if (user) {
            const updatedUser = await userService.updatePrifleAvatar(user.id, avatar)
            set({ user: updatedUser, isLoading: false })
          }
        } catch (error) {
          set({ error, isLoading: false })
        }
      },
      deleteUser: async id => {
        set({ isLoading: true })
        try {
          const users = get().users
          const updatedUsers = users.filter(user => user.id !== id)
          await userService.deleteUser(id)
          set({ users: updatedUsers, isLoading: false })
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
