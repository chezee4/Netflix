import { api } from 'src/config/ky'
import { Requests } from 'src/constants/requests-urls'

import { TSupportFormSchema } from 'src/lib/validators/support'
export const supportService = {
  sendSupportMessage: (data: TSupportFormSchema): Promise<void> => {
    return api
      .post(Requests.SUPPORT_MESSAGE, {
        json: data,
      })
      .json()
  },
}
