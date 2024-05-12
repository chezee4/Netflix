// auth-store.ts
import { create } from 'zustand'
import { useStore } from 'zustand'
import { jwtDecode } from 'jwt-decode'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { z } from 'zod'

const TokenDataSchema = z.object({
  UserId: z.string(),
})

type TokenData = z.infer<typeof TokenDataSchema>

type AuthStore = {
  accessToken: string | undefined
  accessTokenData: TokenData | undefined
  actions: {
    setAccessToken: (accessToken: string | undefined) => void
    init: () => void
    clearTokens: () => void
  }
}

export const decodeAccessToken = (accessToken: string) =>
  TokenDataSchema.parse(jwtDecode<TokenData>(accessToken))

export const authStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      accessToken: undefined,
      accessTokenData: undefined,

      actions: {
        setAccessToken: (accessToken: string | undefined) => {
          const accessTokenData = (() => {
            console.log(accessToken)

            try {
              return accessToken ? decodeAccessToken(accessToken) : undefined
            } catch (error) {
              console.error(error)
              return undefined
            }
          })()
         
          set({
            accessToken,
            accessTokenData,
          })
        },
        init: () => {
          const { setAccessToken } = get().actions
          setAccessToken(localStorage.getItem('ACCESS_TOKEN') || undefined)
        },
        clearTokens: () =>
          set({
            accessToken: undefined,
            accessTokenData: undefined,
          }),
      },
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export type ExtractState<S> = S extends {
  getState: () => infer T
}
  ? T
  : never

type Params<U> = Parameters<typeof useStore<typeof authStore, U>>

// Selectors
const accessTokenSelector = (state: ExtractState<typeof authStore>) =>
  state.accessToken
const accessTokenDataSelector = (state: ExtractState<typeof authStore>) =>
  state.accessTokenData
const actionsSelector = (state: ExtractState<typeof authStore>) => state.actions

// getters
export const getAccessToken = () => accessTokenSelector(authStore.getState())
export const getAccessTokenData = () => accessTokenDataSelector(authStore.getState())
export const getActions = () => actionsSelector(authStore.getState())

function useAuthStore<U>(selector: Params<U>[1], equalityFn?: Params<U>[2]) {
  return useStore(authStore, selector, equalityFn)
}

// Hooks
export const useAccessToken = () => useAuthStore(accessTokenSelector)
export const useAccessTokenData = () => useAuthStore(accessTokenDataSelector)
export const useActions = () => useAuthStore(actionsSelector)
