import ky from 'ky'

export const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_NETFLIX_API_URL,
  hooks: {
    beforeRequest: [
      request =>
        request.headers.set(
          'Authorization',
          JSON.parse(localStorage.getItem('auth-store') || '').state.accessToken,
        ),
    ],
  },
})
