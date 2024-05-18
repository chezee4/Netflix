import { api } from 'src/config/ky'
import { Requests } from 'src/constants/requests-urls'
import { CommentFormType, Film, Movie } from 'src/types'
import { createUrlPath } from 'src/lib/utils'

export const moviesService = {
  getMovies: (): Promise<Film[]> => {
    return api.get(Requests.MOVIES).json()
  },
  getMovie: (id: string): Promise<Movie> => {
    return api.get(createUrlPath(Requests.MOVIES, id)).json()
  },
  getMoviesByGenre: (genre: string): Promise<Film[]> => {
    return api.get(createUrlPath(Requests.MOVIES_GENRE, genre)).json()
  },
  getMoviesByCategory: (category: string): Promise<Film[]> => {
    return api.get(createUrlPath(Requests.MOVIES_CATEGORY, category)).json()
  },
  deleteMovie: (id: string): Promise<void> => {
    return api.delete(createUrlPath(Requests.MOVIES, id)).json()
  },
  addCommentForMovie: (id: string, comment: CommentFormType): Promise<Movie> => {
    return api
      .post(createUrlPath(Requests.MOVIES, `${id}/comment`), { json: comment })
      .json()
  },
}
