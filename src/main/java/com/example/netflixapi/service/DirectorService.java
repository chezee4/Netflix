package com.example.netflixapi.service;

import com.example.netflixapi.model.Director;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface DirectorService {
    Director addDirector(String name, MultipartFile avatar, String country);
}
