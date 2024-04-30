package com.example.netflixapi.controller;

import com.example.netflixapi.model.Movie;
import com.example.netflixapi.service.MovieMediaService;
import com.example.netflixapi.service.MovieService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    private final MovieService movieService;
    private final MovieMediaService movieMediaService;

    public MovieController(MovieService movieService, MovieMediaService movieMediaService) {
        this.movieMediaService = movieMediaService;
        this.movieService = movieService;
    }
    @GetMapping
    public List<Movie> findAllMovie(){ return movieService.findAllMovie(); }

    @GetMapping("/{id}")
    public Optional<Movie> findById(@PathVariable UUID id){ return movieService.findById(id); }

    @PostMapping("/upload")
    public Movie uploadMovieWithMedia(@RequestParam("name") String name,
                                      @RequestParam("alt") String alt,
                                      @RequestParam("photo") MultipartFile photo,
                                      @RequestParam("video") MultipartFile video) {
        Movie movie = new Movie();
        movie.setName(name);
        movie.setAlt(alt);

        movie = movieService.saveMovie(movie);

        movie = movieMediaService.uploadMedia(movie.getId(), photo, video);

        return movie;
    }

    @PutMapping
    public Movie updateMovie(@RequestBody Movie movie){ return movieService.updateMovie(movie); }

    @DeleteMapping("/{id}")
    public void deleteMovie(@PathVariable UUID id){ movieService.deleteMovie(id); }
}
