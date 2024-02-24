package com.example.netflixapi.service.impl;

import com.example.netflixapi.model.Movie;
import com.example.netflixapi.repository.MovieRepository;
import com.example.netflixapi.service.MovieMediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class MovieMediaServiceImpl implements MovieMediaService {

    private final MovieRepository movieRepository;

    @Autowired
    public MovieMediaServiceImpl(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @Override
    public Movie uploadPhoto(Integer movieId, MultipartFile image) {
        Movie movie = movieRepository.findById(movieId).orElseThrow(() -> new RuntimeException("Movie not found"));
        try {
            String imageUrl = saveFile(image);
            movie.setImage(imageUrl);
            return movieRepository.save(movie);
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to upload photo");
        }
    }

    @Override
    public Movie uploadVideo(Integer movieId, MultipartFile video) {
        Movie movie = movieRepository.findById(movieId).orElseThrow(() -> new RuntimeException("Movie not found"));
        try {
            String videoUrl = saveFile(video);
            movie.setVideo(videoUrl);
            return movieRepository.save(movie);
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to upload video");
        }
    }

    private String saveFile(MultipartFile file) throws IOException {
        String uploadDir = "/uploads/";
        String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
        Path uploadPath = Paths.get(uploadDir);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        try {
            Path filePath = uploadPath.resolve(fileName);
            Files.copy(file.getInputStream(), filePath);
            return uploadDir + fileName;
        } catch (IOException e) {
            throw new IOException("Could not save file " + fileName, e);
        }
    }
}