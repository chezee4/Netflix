package com.example.netflixapi.service;

import com.example.netflixapi.model.UserEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@Service
public interface UserService {
    ResponseEntity<Object> getUser(UUID id);

    ResponseEntity<Object> updateUser(UUID id, UserEntity user, MultipartFile avatar);
}
