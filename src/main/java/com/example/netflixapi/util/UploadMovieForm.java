package com.example.netflixapi.util;

import com.example.netflixapi.dto.ActorRequestDTO;
import com.example.netflixapi.dto.DirectorRequestDTO;
import com.example.netflixapi.dto.MusicDirectorRequestDTO;
import com.example.netflixapi.model.Movie;
import com.example.netflixapi.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.Set;
import java.util.UUID;

@Component
public class UploadMovieForm {
    public ActorService actorService;
    public DirectorService directorService;
    public MusicDirectorService musicDirectorService;
    public MovieService movieService;
    public MovieMediaService movieMediaService;

    @Autowired
    public UploadMovieForm(ActorService actorService, DirectorService directorService, MusicDirectorService musicDirectorService, MovieService movieService, MovieMediaService movieMediaService) {
        this.actorService = actorService;
        this.directorService = directorService;
        this.musicDirectorService = musicDirectorService;
        this.movieService = movieService;
        this.movieMediaService = movieMediaService;
    }

    public void addActors(Set<ActorRequestDTO> actors) {
        for (ActorRequestDTO actorRequestDto : actors) {
            String name = actorRequestDto.getName();
            MultipartFile avatar = actorRequestDto.getAvatar();
            actorService.addActor(name, avatar);
        }
    }

    public void addDirector(DirectorRequestDTO directors) {
        String directorsName = directors.getName();
        String directorsCountry = directors.getCountry();
        MultipartFile directorsAvatar = directors.getAvatar();
        directorService.addDirector(directorsName, directorsAvatar, directorsCountry);
    }

    public void addMusicDirector(MusicDirectorRequestDTO musicDirectors) {
        String musicDirectorsName = musicDirectors.getName();
        String musicDirectorsCountry = musicDirectors.getCountry();
        MultipartFile musicDirectorsAvatar = musicDirectors.getAvatar();
        musicDirectorService.addMusicDirector(musicDirectorsName, musicDirectorsCountry, musicDirectorsAvatar);
    }

    public Movie saveMovie(Movie movie) {
        return movieService.saveMovie(movie);
    }

    public Movie uploadMedia(UUID movieId, MultipartFile photo, MultipartFile video) {
        return movieMediaService.uploadMedia(movieId, photo, video);
    }
}
