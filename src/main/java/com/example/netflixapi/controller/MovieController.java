package com.example.netflixapi.controller;

import com.example.netflixapi.dto.ActorRequestDTO;
import com.example.netflixapi.dto.DirectorRequestDTO;
import com.example.netflixapi.dto.MovieResponseListDTO;
import com.example.netflixapi.dto.MusicDirectorRequestDTO;
import com.example.netflixapi.model.Comment;
import com.example.netflixapi.model.Movie;
import com.example.netflixapi.service.*;
import com.example.netflixapi.util.MovieToMovieResponseDTO;
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
    private MovieService movieService;
    private UploadMovieForm uploadMovieForm;
    private MovieToMovieResponseDTO movieToMovieResponseDTO;

    @Autowired
    public MovieController(MovieService movieService, UploadMovieForm uploadMovieForm,
                           MovieToMovieResponseDTO movieToMovieResponseDTO) {
        this.movieService = movieService;
        this.uploadMovieForm = uploadMovieForm;
        this.movieToMovieResponseDTO = movieToMovieResponseDTO;
    }

    @GetMapping
    public List<MovieResponseListDTO> findAllMovie(){
        List<Movie> movies = movieService.findAllMovie();
        return movieToMovieResponseDTO.convert(movies);
    }

    @GetMapping("/{id}")
    public Optional<Movie> findById(@PathVariable UUID id){
        return movieService.findById(id);
    }

    @GetMapping("/genre/{genre}")
    public List<MovieResponseListDTO> findMoviesByGenre(@PathVariable String genre) {
        List<Movie> movies = movieService.findMoviesByGenre(genre);
        return movieToMovieResponseDTO.convert(movies);
    }

    @GetMapping("/category/{category}")
    public List<MovieResponseListDTO> findMoviesByCategory(@PathVariable String category) {
        List<Movie> movies = movieService.findMoviesByCategory(category);
        return movieToMovieResponseDTO.convert(movies);
    }

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
