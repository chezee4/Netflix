package com.example.netflixapi.service;

import com.example.netflixapi.model.Movie;
import org.springframework.web.multipart.MultipartFile;

public interface MovieMediaService {
    Movie uploadPhoto(String movieId, MultipartFile image);
    Movie uploadVideo(String movieId, MultipartFile video);
}
