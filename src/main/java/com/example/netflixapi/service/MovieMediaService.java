package com.example.netflixapi.service;

import com.example.netflixapi.model.Movie;
import org.springframework.web.multipart.MultipartFile;

public interface MovieMediaService {

    Movie uploadPhoto(Integer movieId, MultipartFile photo);

    Movie uploadVideo(Integer movieId, MultipartFile video);
}
