package com.example.netflixapi.service.impl;

import com.amazonaws.services.s3.AmazonS3;
import com.example.netflixapi.config.AmazonS3Config;
import com.example.netflixapi.model.MusicDirector;
import com.example.netflixapi.repository.MusicDirectorRepository;
import com.example.netflixapi.service.MusicDirectorService;
import com.example.netflixapi.util.FileUploadUtil;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class MusicDirectorServiceImpl implements MusicDirectorService {
    private final MusicDirectorRepository musicDirectorRepository;
    private final AmazonS3 s3Client;
    private final AmazonS3Config amazonS3Config;

    public MusicDirectorServiceImpl(MusicDirectorRepository musicDirectorRepository, AmazonS3 s3Client, AmazonS3Config amazonS3Config) {
        this.musicDirectorRepository = musicDirectorRepository;
        this.s3Client = s3Client;
        this.amazonS3Config = amazonS3Config;
    }

    @Override
    public MusicDirector addMusicDirector(String name, String country, MultipartFile avatar) {
        MusicDirector musicDirector = new MusicDirector();
        try {
            if (avatar != null && !avatar.isEmpty()) {
                String avatarUrl = FileUploadUtil.saveFile(s3Client, amazonS3Config, avatar, "music_directors_avatars/");
                musicDirector.setAvatar(avatarUrl);
            }
            musicDirector.setName(name);
            musicDirector.setCountry(country);

            return musicDirectorRepository.save(musicDirector);
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to upload music director");
        }
    }
}
