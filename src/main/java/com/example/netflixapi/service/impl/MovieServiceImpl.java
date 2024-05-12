package com.example.netflixapi.service.impl;

import com.example.netflixapi.model.Comment;
import com.example.netflixapi.model.Movie;
import com.example.netflixapi.repository.CommentRepository;
import com.example.netflixapi.repository.MovieRepository;
import com.example.netflixapi.service.MovieService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class MovieServiceImpl implements MovieService {

    private final MovieRepository movieRepository;
    private final CommentRepository commentRepository;

    public MovieServiceImpl(MovieRepository movieRepository, CommentRepository commentRepository) { this.movieRepository = movieRepository;
        this.commentRepository = commentRepository;
    }
    @Override
    public List<Movie> findAllMovie() {
        return movieRepository.findAll();
    }

    @Override
    public Optional<Movie> findById(UUID id) {
        return movieRepository.findById(id);
    }

    @Override
    public List<Movie> findMoviesByGenre(String genre) {
        return movieRepository.findAll().stream()
                .filter(movie -> movie.getGenres().contains(genre))
                .collect(Collectors.toList());
    }

    @Override
    public List<Movie> findMoviesByCategory(String category) {
        return movieRepository.findAll().stream()
                .filter(movie -> movie.getCategory().contains(category))
                .collect(Collectors.toList());
    }

    @Override
    public Movie saveMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    @Override
    public Movie updateMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    @Override
    public void deleteMovie(UUID id) {
        movieRepository.deleteById(id);
    }

    @Override
    public Movie addComment(UUID id, Comment comment) {
        Movie movie = movieRepository.findById(id).get();
        commentRepository.save(comment);
        movie.getComments().add(comment);
        return movieRepository.save(movie);
    }
}
