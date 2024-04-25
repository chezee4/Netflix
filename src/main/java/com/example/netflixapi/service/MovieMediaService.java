package com.example.netflixapi.service;

import com.example.netflixapi.model.Movie;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

public interface MovieMediaService {
    Movie uploadPhoto(UUID movieId, MultipartFile image);
    Movie uploadVideo(UUID movieId, MultipartFile video);
}
