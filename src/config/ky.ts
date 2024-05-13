import ky from 'ky'

export const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_NETFLIX_API_URL,
  hooks: {
    beforeRequest: [
      request => {
        const authStore = localStorage.getItem('auth-store');
        if (authStore) {
          const authState = JSON.parse(authStore).state;
          if (authState && authState.accessToken) {
            request.headers.set('Authorization', authState.accessToken);
          }
        }
      },
    ],
  },
})