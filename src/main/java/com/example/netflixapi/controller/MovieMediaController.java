package com.example.netflixapi.controller;

import com.example.netflixapi.model.Movie;
import com.example.netflixapi.service.MovieMediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/movies/{movieId}/media")
public class MovieMediaController {
    private final MovieMediaService movieMediaService;

    @Autowired
    public MovieMediaController(MovieMediaService movieMediaService) {
        this.movieMediaService = movieMediaService;
    }

    @PostMapping("/photo")
    public Movie uploadPhoto(@PathVariable String movieId, @RequestParam("photo") MultipartFile photo) {
        return movieMediaService.uploadPhoto(movieId, photo);
    }

    @PostMapping("/video")
    public Movie uploadVideo(@PathVariable String movieId, @RequestParam("video") MultipartFile video) {
        return movieMediaService.uploadVideo(movieId, video);
    }
}