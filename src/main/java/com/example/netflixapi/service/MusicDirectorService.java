package com.example.netflixapi.service;

import com.example.netflixapi.model.MusicDirector;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface MusicDirectorService {
    MusicDirector addMusicDirector(String name, String country, MultipartFile avatar);
}
