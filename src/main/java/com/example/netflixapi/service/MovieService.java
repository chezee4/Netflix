package com.example.netflixapi.service;

import com.example.netflixapi.model.Movie;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface MovieService {
    List<Movie> findAllMovie();
    Optional<Movie> findById(UUID id);
    Movie saveMovie(Movie movie);
    Movie updateMovie(Movie movie);
    void deleteMovie(UUID id);
}
