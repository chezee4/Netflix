package com.example.netflixapi.service.impl;

import com.amazonaws.services.s3.AmazonS3;
import com.example.netflixapi.config.AmazonS3Config;
import com.example.netflixapi.dto.UserDTO;
import com.example.netflixapi.model.Role;
import com.example.netflixapi.model.UserEntity;
import com.example.netflixapi.repository.RoleRepository;
import com.example.netflixapi.repository.UserRepository;
import com.example.netflixapi.service.UserService;
import com.example.netflixapi.util.FileUploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Service
public class UserServiceImpl implements UserService {

    private final PasswordEncoder passwordEncoder;
    private final AmazonS3 s3Client;
    private final AmazonS3Config amazonS3Config;
    private final RoleRepository roleRepository;
    UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, AmazonS3 s3Client, AmazonS3Config amazonS3Config, PasswordEncoder passwordEncoder, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.s3Client = s3Client;
        this.amazonS3Config = amazonS3Config;
        this.passwordEncoder = passwordEncoder;
        this.roleRepository = roleRepository;
    }

    @Override
    public List<UserEntity> findAllUser() {
        return userRepository.findAll();
    }

    @Override
    public UserEntity findUserById(UUID id) {
        Optional<UserEntity> user = userRepository.findById(id);
        return user.orElse(null);
    }

    public UserEntity createUser(String username, String password, String email, String role) {
        UserEntity user = new UserEntity();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        user.setEmail(email);
        user.setRoles(Collections.singletonList(roleRepository.findByName(role)));
        return userRepository.save(user);
    }

    @Override
    public ResponseEntity<?> updateUser(UUID id, UserDTO user, MultipartFile avatar) {
        Optional<UserEntity> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            UserEntity userEntity = userOptional.get();
            Optional.ofNullable(user.getUsername()).ifPresent(userEntity::setUsername);
            Optional.ofNullable(user.getTelNumber()).ifPresent(userEntity::setTelNumber);
            Optional.ofNullable(user.getPassword()).ifPresent(p -> userEntity.setPassword(passwordEncoder.encode(p)));
            Optional.ofNullable(user.getEmail()).ifPresent(userEntity::setEmail);
            Optional.ofNullable(user.getBio()).ifPresent(userEntity::setBio);

            if(user.getRole() != null && !user.getRole().isEmpty()) {
                userEntity.setRoles(Collections.singletonList(roleRepository.findByName(user.getRole())));
            }

            if (avatar != null && !avatar.isEmpty()) {
                try {
                    String avatarUrl = FileUploadUtil.saveFile(s3Client, amazonS3Config, avatar, "users_avatars/");
                    Optional.ofNullable(avatarUrl).ifPresent(userEntity::setAvatar);
                } catch (IOException e) {
                    e.printStackTrace();
                    return ResponseEntity.badRequest().body("Failed to upload avatar");
                }
            }

            userRepository.save(userEntity);
            return ResponseEntity.ok(userEntity);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
