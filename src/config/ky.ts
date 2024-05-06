import ky from 'ky'

export const api = ky.create({
  prefixUrl: process.env.NETFLIX_API_URL,
  hooks: {
    beforeRequest: [
      request =>
        request.headers.set(
          'Authorization',
          `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
        ),
    ],
  },
})
