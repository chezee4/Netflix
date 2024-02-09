package com.example.netflixapi.controller;

import com.example.netflixapi.model.Movie;
import com.example.netflixapi.service.MovieService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/movie")
public class MovieController {
    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }
    @GetMapping
    public List<Movie> findAllMovie(){ return movieService.findAllMovie(); }

    @GetMapping("/{id}")
    public Optional<Movie> findById(Integer id){ return movieService.findById(id); }

    @PostMapping
    public Movie saveMovie(Movie movie){ return movieService.saveMovie(movie); }

    @PutMapping
    public Movie updateMovie(Movie movie){ return movieService.updateMovie(movie); }

    @DeleteMapping("/{id}")
    public void deleteMovie(Integer id){ movieService.deleteMovie(id); }
}
