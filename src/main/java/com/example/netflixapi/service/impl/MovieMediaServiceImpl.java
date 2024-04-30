package com.example.netflixapi.service.impl;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.example.netflixapi.config.AmazonS3Config;
import com.example.netflixapi.model.Movie;
import com.example.netflixapi.repository.MovieRepository;
import com.example.netflixapi.service.MovieMediaService;
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

        try {
            if (photo != null && !photo.isEmpty()) {
                String photoUrl = saveFile(photo, "photo/");
                movie.setImageUrl(photoUrl);
            }

            if (video != null && !video.isEmpty()) {
                String videoUrl = saveFile(video, "video/");
                movie.setVideoUrl(videoUrl);
            }

            return movieRepository.save(movie);
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to upload media files");
        }
    }

    private String saveFile(MultipartFile file, String keyName) throws IOException {
        String bucketName = amazonS3Config.getBucketName();
        String fileName = file.getOriginalFilename();
        String key = keyName + fileName;

        try (InputStream inputStream = file.getInputStream()) {
            s3Client.putObject(new PutObjectRequest(bucketName, key, inputStream, null));
            return s3Client.getUrl(bucketName, key).toString();
        } catch (IOException e) {
            throw new IOException("Could not save file " + fileName + " to Amazon S3", e);
        }
    }
}