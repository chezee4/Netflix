package com.example.netflixapi.controller;

import com.example.netflixapi.dto.ActorRequestDto;
import com.example.netflixapi.model.Actor;
import com.example.netflixapi.model.Movie;
import com.example.netflixapi.service.ActorService;
import com.example.netflixapi.service.MovieMediaService;
import com.example.netflixapi.service.MovieService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    private final MovieService movieService;
    private final MovieMediaService movieMediaService;
    private final ActorService actorService;

    public MovieController(MovieService movieService, MovieMediaService movieMediaService, @Qualifier("actorService") ActorService actorService) {
        this.movieMediaService = movieMediaService;
        this.movieService = movieService;
        this.actorService = actorService;
    }
    @GetMapping
    public List<Movie> findAllMovie(){ return movieService.findAllMovie(); }

    @GetMapping("/{id}")
    public Optional<Movie> findById(@PathVariable UUID id){ return movieService.findById(id); }

    @PostMapping("/upload")
    public Movie uploadMovieWithMedia(@RequestParam("title") String title,
                                      @RequestParam("alt") String alt,
                                      @RequestParam("photo") MultipartFile photo,
                                      @RequestParam("video") MultipartFile video,
                                      @RequestParam("actors") Set<ActorRequestDto> actors){
        Movie movie = new Movie();
        movie.setTitle(title);
        movie.setAlt(alt);

        movie = movieService.saveMovie(movie);

        movie = movieMediaService.uploadMedia(movie.getId(), photo, video);

        for (ActorRequestDto actorRequestDto : actors) {
            String name = actorRequestDto.getName();
            MultipartFile avatar = actorRequestDto.getAvatar();
            actorService.addActor(name, avatar);
        }

        return movie;
    }

    @PutMapping
    public Movie updateMovie(@RequestBody Movie movie){ return movieService.updateMovie(movie); }

    @DeleteMapping("/{id}")
    public void deleteMovie(@PathVariable UUID id){ movieService.deleteMovie(id); }
}
