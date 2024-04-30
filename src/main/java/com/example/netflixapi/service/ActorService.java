package com.example.netflixapi.service;

import com.example.netflixapi.model.Actor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
public interface ActorService {
    Actor addActor(String name, MultipartFile avatar);
}
