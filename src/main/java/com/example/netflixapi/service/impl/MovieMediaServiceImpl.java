package com.example.netflixapi.service.impl;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.example.netflixapi.model.Movie;
import com.example.netflixapi.repository.MovieRepository;
import com.example.netflixapi.service.MovieMediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.io.InputStream;

@Service
public class MovieMediaServiceImpl implements MovieMediaService {

    private final MovieRepository movieRepository;
    private final AmazonS3 s3Client;

    @Autowired
    public MovieMediaServiceImpl(MovieRepository movieRepository, AmazonS3 s3Client) {
        this.movieRepository = movieRepository;
        this.s3Client = s3Client;
    }

    @Override
    public Movie uploadPhoto(String movieId, MultipartFile image) {
        Movie movie = movieRepository.findById(movieId).orElseThrow(() -> new RuntimeException("Movie not found"));
        try {
            String imageUrl = saveFile(image, "photo/");
            movie.setImage(imageUrl);
            return movieRepository.save(movie);
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to upload photo");
        }
    }

    @Override
    public Movie uploadVideo(String movieId, MultipartFile video) {
        Movie movie = movieRepository.findById(movieId).orElseThrow(() -> new RuntimeException("Movie not found"));
        try {
            String videoUrl = saveFile(video, "video/");
            movie.setVideo(videoUrl);
            return movieRepository.save(movie);
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to upload video");
        }
    }

    private String saveFile(MultipartFile file, String keyName) throws IOException {
        String bucketName = "makshon-netflix-api-bucket";
        String fileName = file.getOriginalFilename();
        String key = keyName + fileName;

        try {
            InputStream inputStream = file.getInputStream();
            s3Client.putObject(new PutObjectRequest(bucketName, key, inputStream, null));
            return s3Client.getUrl(bucketName, key).toString();
        } catch (IOException e) {
            throw new IOException("Could not save file " + fileName + " to Amazon S3", e);
        }
    }
}