'use client'
import { create } from 'zustand'
import { userService } from 'src/services/user'
import { list } from 'src/config/card/card-film'
import { Role, UserFormType, UserType } from 'src/types'

type UserStore = {
  user: UserType | null
  getUser: (id: string) => void
  updateUser: (user: UserFormType) => void
  setUser: (user: UserType) => void
  deleteUser: () => Promise<void>
  isLoading: boolean
  error: unknown
}

export const user: UserType = {
  id: '74304823048230948320948',
  name: 'Дуфинець Вадим',
  email: 'vadymdufynets@gmail.com',
  password: 'rkoepri0493i2-ir3pir0-23jr2r0k2r32-03rr',
  phone: '+380 99 999 99 99',
  bio: 'Мене звуть Вікторія Костак, і я віддана справі благодійності та допомоги людям у потребі. Я засновниця фонду "Добра Дія" і активно підтримую дітей з малозабезпечених сімей, організовуючи збори коштів для лікування хворих та сприяючи розвитку освіти й культури серед вразливих груп населення. Крім того, маю вражаючі навички у back-end розробці і завжди відкрита до можливостей отримати оффер у цій галузі.',
  role: Role.USER,
  favorites: list,
  avatar:
    'https://cdn.discordapp.com/attachments/1167013602436333570/1234259616322293872/sticker.webp?ex=6639f897&is=6638a717&hm=68496256052d68f4f25faab23b23b8b656fb147e67ea57caef6e5a3ac6ced3d2&',
}

export const useUserStore = create<UserStore>((set, get) => ({
  user,
  getUser: async id => {
    if (!id) return set({ error: 'User ID is required' })
    set({ isLoading: true })
    try {
      const fetchedUser: UserType = await userService.getUser(id)
      console.log(fetchedUser)
      set({
        user: {
          ...fetchedUser,
          avatar:
            'https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png',
        },
        isLoading: false,
      })
    } catch (error) {
      set({ error, isLoading: false })
    }
  },
  setUser: (user) => set((state) => ({ ...state, user })),
  updateUser: data => {
    const currentUser = get().user
    if (!currentUser) return
    const newUser = { ...currentUser, ...data, avatar: data.avatar }
    set({ user: newUser })
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
  isLoading: false,
  error: null,
}))
