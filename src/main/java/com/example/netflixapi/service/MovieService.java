package com.example.netflixapi.service;

import com.example.netflixapi.model.Movie;

import java.util.List;
import java.util.Optional;

public interface MovieService {
    List<Movie> findAllMovie();
    Optional<Movie> findById(String id);
    Movie saveMovie(Movie movie);
    Movie updateMovie(Movie movie);
    void deleteMovie(String id);
}
