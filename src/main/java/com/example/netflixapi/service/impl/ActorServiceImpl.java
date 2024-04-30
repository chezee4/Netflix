package com.example.netflixapi.service.impl;

import com.amazonaws.services.s3.AmazonS3;
import com.example.netflixapi.config.AmazonS3Config;
import com.example.netflixapi.model.Actor;
import com.example.netflixapi.repository.ActorRepository;
import com.example.netflixapi.service.ActorService;
import com.example.netflixapi.util.FileUploadUtil;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class ActorServiceImpl implements ActorService {
    private final ActorRepository actorRepository;
    private final AmazonS3 s3Client;
    private final AmazonS3Config amazonS3Config;

    public ActorServiceImpl(ActorRepository actorRepository, AmazonS3 s3Client, AmazonS3Config amazonS3Config) {
        this.actorRepository = actorRepository;
        this.s3Client = s3Client;
        this.amazonS3Config = amazonS3Config;
    }

    public Actor addActor(String name, MultipartFile avatar) {
        Actor actor = new Actor();
        try {
            if (avatar != null && !avatar.isEmpty()) {
                String avatarUrl = FileUploadUtil.saveFile(s3Client, amazonS3Config, avatar, "actors_avatars/");
                actor.setAvatar(avatarUrl);
            }
            actor.setName(name);

            return actorRepository.save(actor);
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to upload actor");
        }
    }
}
