package com.example.netflixapi.service;

import com.example.netflixapi.dto.UserDTO;
import com.example.netflixapi.model.UserEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

public interface UserService {
    List<UserEntity> findAllUser();
    UserEntity findUserById(UUID id);
    ResponseEntity<?> uploadAvatar(UUID id, MultipartFile avatar);
    UserDTO createUser(String username, String password, String email, String role);
    ResponseEntity<?> updateUser(UUID id, UserDTO user);
    String deleteUser(UUID id);
}