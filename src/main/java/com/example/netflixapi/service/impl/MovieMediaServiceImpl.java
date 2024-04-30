package com.example.netflixapi.service.impl;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.example.netflixapi.config.AmazonS3Config;
import com.example.netflixapi.model.Movie;
import com.example.netflixapi.model.MovieMedia;
import com.example.netflixapi.repository.MovieRepository;
import com.example.netflixapi.service.MovieMediaService;
import com.example.netflixapi.util.FileUploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

@Service
public class MovieMediaServiceImpl implements MovieMediaService {

    private final MovieRepository movieRepository;
    private final AmazonS3 s3Client;
    private final AmazonS3Config amazonS3Config;

    @Autowired
    public MovieMediaServiceImpl(MovieRepository movieRepository, AmazonS3 s3Client, AmazonS3Config amazonS3Config) {
        this.movieRepository = movieRepository;
        this.s3Client = s3Client;
        this.amazonS3Config = amazonS3Config;
    }

    @Override
    public Movie uploadMedia(UUID movieId, MultipartFile photo, MultipartFile video) {
        Movie movie = movieRepository.findById(movieId).orElseThrow(() -> new RuntimeException("Movie not found"));
        MovieMedia movieMedia = new MovieMedia();
        try {
            if (photo != null && !photo.isEmpty()) {
                String photoUrl = FileUploadUtil.saveFile(s3Client, amazonS3Config, photo, "photo/");
                movieMedia.setImageUrl(photoUrl);
            }

            if (video != null && !video.isEmpty()) {
                String videoUrl = FileUploadUtil.saveFile(s3Client, amazonS3Config, video, "video/");
                movieMedia.setVideoUrl(videoUrl);
            }

            return movieRepository.save(movie);
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to upload video or photo");
        }
    }
}