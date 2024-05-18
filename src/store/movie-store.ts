'use client'
import { create } from 'zustand'
import { moviesService } from 'src/services/movies'
import { Movie, Film } from 'src/types'
import { CommentFormType } from 'src/types'
type MoviesStore = {
  movies: Film[]
  movie: Movie | null
  isLoading: boolean
  error: unknown
  getAllMovies: () => Promise<void>
  getMovie: (id: string) => Promise<void>
  getMoviesByGenre: (genre: string) => Promise<Film[]>
  getMoviesByCategory: (category: string) => Promise<Film[]>
  deleteMovie: (id: string) => Promise<void>
  addCommentForMovie: (comment: CommentFormType) => Promise<void>
}

export const useMovieStore = create<MoviesStore>()((set, get) => ({
  movies: [],
  movie: null,
  isLoading: false,
  error: null,
  getAllMovies: async () => {
    set({ isLoading: true })

    try {
      const fetchedMovies: Film[] = await moviesService.getMovies()
      set({
        movies: fetchedMovies,
        isLoading: false,
      })
    } catch (error) {
      console.error('Failed to fetch movies', error)
      set({ error: 'Failed to fetch movies', isLoading: false })
    }
  },
  getMovie: async id => {
    if (!id) return set({ error: 'Movie ID is required' })

    set({ isLoading: true })

    try {
      const fetchedMovie: Movie = await moviesService.getMovie(id)
      set({
        movie: fetchedMovie,
        isLoading: false,
      })
    } catch (error) {
      console.error('Failed to fetch movie', error)
      set({ error: 'Failed to fetch movie', isLoading: false })
    }
  },
  getMoviesByGenre: async genre => {
    set({ isLoading: true })

    try {
      const fetchedMovies: Film[] = await moviesService.getMoviesByGenre(genre)
      set({
        isLoading: false,
      })
      return fetchedMovies
    } catch (error) {
      console.error('Failed to fetch movies by genre', error)
      set({ error: 'Failed to fetch movies by genre', isLoading: false })
      return []
    }
  },
  getMoviesByCategory: async category => {
    set({ isLoading: true })

    try {
      const fetchedMovies: Film[] = await moviesService.getMoviesByCategory(category)
      set({
        isLoading: false,
      })
      return fetchedMovies
    } catch (error) {
      console.error('Failed to fetch movies by category', error)
      set({ error: 'Failed to fetch movies by category', isLoading: false })
      return []
    }
  },
  deleteMovie: async id => {
    set({ isLoading: true })

    try {
      await moviesService.deleteMovie(id)
      set({ isLoading: false })
    } catch (error) {
      console.error('Failed to delete movie', error)
      set({ error: 'Failed to delete movie', isLoading: false })
    }
  },
  addCommentForMovie: async comment => {
    set({ isLoading: true })
    try {
      const movie = get().movie
      if (!movie?.id) return set({ error: 'Movie ID is required' })

      const fetchedMovie = await moviesService.addCommentForMovie(movie.id, comment)

      set({ movie: fetchedMovie, isLoading: false })
    } catch (error) {
      console.error('Failed to add comment for movie', error)
      set({ error: 'Failed to add comment for movie', isLoading: false })
    }
  },
}))
