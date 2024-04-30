package com.example.netflixapi.service.impl;

import com.amazonaws.services.s3.AmazonS3;
import com.example.netflixapi.config.AmazonS3Config;
import com.example.netflixapi.model.Director;
import com.example.netflixapi.repository.DirectorRepository;
import com.example.netflixapi.service.DirectorService;
import com.example.netflixapi.util.FileUploadUtil;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class DirectorServiceImpl implements DirectorService {
    private final DirectorRepository directorRepository;
    private final AmazonS3 s3Client;
    private final AmazonS3Config amazonS3Config;

    public DirectorServiceImpl(DirectorRepository directorRepository, AmazonS3 s3Client, AmazonS3Config amazonS3Config) {
        this.directorRepository = directorRepository;
        this.s3Client = s3Client;
        this.amazonS3Config = amazonS3Config;
    }

    public Director addDirector(String name, MultipartFile avatar, String country) {
        Director director = new Director();
        try {
            if (avatar != null && !avatar.isEmpty()) {
                String avatarUrl = FileUploadUtil.saveFile(s3Client, amazonS3Config, avatar, "directors_avatars/");
                director.setAvatar(avatarUrl);
            }
            director.setName(name);
            director.setCountry(country);

            return directorRepository.save(director);
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to upload director");
        }
    }
}
