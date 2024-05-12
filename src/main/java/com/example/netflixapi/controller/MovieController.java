package com.example.netflixapi.controller;

import com.example.netflixapi.dto.ActorRequestDTO;
import com.example.netflixapi.dto.DirectorRequestDTO;
import com.example.netflixapi.dto.MusicDirectorRequestDTO;
import com.example.netflixapi.model.Movie;
import com.example.netflixapi.service.*;
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
    private final MusicDirectorService musicDirectorService;

    public MovieController(MovieService movieService, MovieMediaService movieMediaService, ActorService actorService,
                           DirectorService directorService, MusicDirectorService musicDirectorService){
        this.movieMediaService = movieMediaService;
        this.movieService = movieService;
        this.actorService = actorService;
        this.directorService = directorService;
        this.musicDirectorService = musicDirectorService;
    }
    @GetMapping
    public List<Movie> findAllMovie(){ return movieService.findAllMovie(); }

    @GetMapping("/{id}")
    public Optional<Movie> findById(@PathVariable UUID id){ return movieService.findById(id); }

    @PostMapping("/post")
    public Movie postMovieWithUrls(@RequestBody Movie movie){
        return movieService.saveMovie(movie);
    }

    @PostMapping("/upload")
    public Movie uploadMovieWithMedia(@RequestBody Movie movie,
                                      @RequestParam("photo") MultipartFile photo,
                                      @RequestParam("video") MultipartFile video,
                                      @RequestParam("actors") Set<ActorRequestDTO> actors,
                                      @RequestParam("director") DirectorRequestDTO directors,
                                      @RequestParam("music_director") MusicDirectorRequestDTO musicDirectors){
        addActors(actors);
        addDirector(directors);
        addMusicDirector(musicDirectors);
        movie = saveMovie(movie);
        movie = uploadMedia(movie.getId(), photo, video);
        return movie;
    }

    private void addActors(Set<ActorRequestDTO> actors) {
        for (ActorRequestDTO actorRequestDto : actors) {
            String name = actorRequestDto.getName();
            MultipartFile avatar = actorRequestDto.getAvatar();
            actorService.addActor(name, avatar);
        }
    }

    private void addDirector(DirectorRequestDTO directors) {
        String directorsName = directors.getName();
        String directorsCountry = directors.getCountry();
        MultipartFile directorsAvatar = directors.getAvatar();
        directorService.addDirector(directorsName, directorsAvatar, directorsCountry);
    }

    private void addMusicDirector(MusicDirectorRequestDTO musicDirectors) {
        String musicDirectorsName = musicDirectors.getName();
        String musicDirectorsCountry = musicDirectors.getCountry();
        MultipartFile musicDirectorsAvatar = musicDirectors.getAvatar();
        musicDirectorService.addMusicDirector(musicDirectorsName, musicDirectorsCountry, musicDirectorsAvatar);
    }

    private Movie saveMovie(Movie movie) {
        return movieService.saveMovie(movie);
    }

    private Movie uploadMedia(UUID movieId, MultipartFile photo, MultipartFile video) {
        return movieMediaService.uploadMedia(movieId, photo, video);
    }

    @PutMapping
    public Movie updateMovie(@RequestBody Movie movie){ return movieService.updateMovie(movie); }

    @DeleteMapping("/{id}")
    public void deleteMovie(@PathVariable UUID id){ movieService.deleteMovie(id); }
}
