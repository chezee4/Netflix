import { api } from 'src/config/ky'
import { Requests } from 'src/constants/requests-urls'

import { UserType, UserAdminFormType, UserProfileFormType } from 'src/types'
import { createUrlPath } from 'src/lib/utils'

export const userService = {
  getUsers: (): Promise<UserType[]> => {
    return api.get(Requests.USERS).json()
  },
  getUser: (id: string): Promise<UserType> => {
    return api.get(createUrlPath(Requests.USERS, id)).json()
  },
  createUser: (data: UserAdminFormType): Promise<UserType> => {
    return api
      .post(Requests.USERS, {
        json: data,
      })
      .json()
  },
  updateUser: <T>(id: string, data: T): Promise<UserType> => {
    return api
      .patch(createUrlPath(Requests.USERS, id), {
        json: data,
      })
      .json()
  },
  updatePrifleAvatar: (id: string, avatar: FormData): Promise<UserType> => {
    return api
      .put(createUrlPath(Requests.USERS, `${id}/avatar`), {
        body: avatar,
      })
      .json()
  },
  deleteUser: (id: string): Promise<UserType> => {
    return api.delete(createUrlPath(Requests.USERS, id)).json()
  },
}
