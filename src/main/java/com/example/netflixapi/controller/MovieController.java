package com.example.netflixapi.controller;

import com.example.netflixapi.dto.ActorRequestDTO;
import com.example.netflixapi.dto.DirectorRequestDTO;
import com.example.netflixapi.dto.MusicDirectorRequestDTO;
import com.example.netflixapi.model.Comment;
import com.example.netflixapi.model.Movie;
import com.example.netflixapi.service.*;
import com.example.netflixapi.util.UploadMovieForm;
import jakarta.persistence.Access;
import org.springframework.beans.factory.annotation.Autowired;
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
    @Autowired
    private MovieService movieService;

    @Autowired
    private UploadMovieForm uploadMovieForm;

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
        uploadMovieForm.addActors(actors);
        uploadMovieForm.addDirector(directors);
        uploadMovieForm.addMusicDirector(musicDirectors);
        movie = uploadMovieForm.saveMovie(movie);
        movie = uploadMovieForm.uploadMedia(movie.getId(), photo, video);
        return movie;
    }

    @PutMapping
    public Movie updateMovie(@RequestBody Movie movie){ return movieService.updateMovie(movie); }

    @DeleteMapping("/{id}")
    public void deleteMovie(@PathVariable UUID id){ movieService.deleteMovie(id); }

    @PostMapping("/{id}/comment")
    public Movie addComment(@PathVariable UUID id, @RequestBody Comment comment){
        return movieService.addComment(id, comment);
    }
}
