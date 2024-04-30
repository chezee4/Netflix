package com.example.netflixapi.controller;

import com.example.netflixapi.dto.ActorRequestDTO;
import com.example.netflixapi.dto.DirectorRequestDTO;
import com.example.netflixapi.model.Movie;
import com.example.netflixapi.service.ActorService;
import com.example.netflixapi.service.DirectorService;
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
    private final DirectorService directorService;

    public MovieController(MovieService movieService, MovieMediaService movieMediaService, ActorService actorService, DirectorService directorService) {
        this.movieMediaService = movieMediaService;
        this.movieService = movieService;
        this.actorService = actorService;
        this.directorService = directorService;
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
                                      @RequestParam("actors") Set<ActorRequestDTO> actors,
                                      @RequestParam("director") DirectorRequestDTO directors){
        for (ActorRequestDTO actorRequestDto : actors) {
            String name = actorRequestDto.getName();
            MultipartFile avatar = actorRequestDto.getAvatar();
            actorService.addActor(name, avatar);
        }

        String directorsName = directors.getName();
        String directorsCountry = directors.getCountry();
        MultipartFile directorsAvatar = directors.getAvatar();
        directorService.addDirector(directorsName, directorsAvatar, directorsCountry);

        Movie movie = new Movie();
        movie.setTitle(title);
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
