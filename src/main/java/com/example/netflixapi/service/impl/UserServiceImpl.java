package com.example.netflixapi.service.impl;

import com.amazonaws.services.s3.AmazonS3;
import com.example.netflixapi.config.AmazonS3Config;
import com.example.netflixapi.dto.UserDTO;
import com.example.netflixapi.dto.UserRequestDTO;
import com.example.netflixapi.model.Movie;
import com.example.netflixapi.model.Role;
import com.example.netflixapi.model.UserEntity;
import com.example.netflixapi.repository.MovieRepository;
import com.example.netflixapi.repository.RoleRepository;
import com.example.netflixapi.repository.UserRepository;
import com.example.netflixapi.service.UserService;
import com.example.netflixapi.util.FileUploadUtil;
import com.example.netflixapi.util.UserEntityToUserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    private final PasswordEncoder passwordEncoder;
    private final AmazonS3 s3Client;
    private final AmazonS3Config amazonS3Config;
    private final RoleRepository roleRepository;
    UserRepository userRepository;
    UserEntityToUserDTO userEntityToUserDTO;
    MovieRepository movieRepository;

    @Value("${DEFAULT_AVATAR_URL}")
    private String avatarUrl;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, AmazonS3 s3Client, AmazonS3Config amazonS3Config,
                           PasswordEncoder passwordEncoder, RoleRepository roleRepository,
                           UserEntityToUserDTO userEntityToUserDTO, MovieRepository movieRepository) {
        this.userRepository = userRepository;
        this.s3Client = s3Client;
        this.amazonS3Config = amazonS3Config;
        this.passwordEncoder = passwordEncoder;
        this.roleRepository = roleRepository;
        this.userEntityToUserDTO = userEntityToUserDTO;
        this.movieRepository = movieRepository;
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

    @Override
    public ResponseEntity<?> uploadAvatar(UUID id, MultipartFile avatar) {
        Optional<UserEntity> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            UserEntity userEntity = userOptional.get();
            try {
                String avatarUrl = FileUploadUtil.saveFile(s3Client, amazonS3Config, avatar, "users_avatars/");
                userEntity.setAvatar(avatarUrl);
                userRepository.save(userEntity);
                return ResponseEntity.ok(userEntityToUserDTO.mapToDTO(userEntity));
            } catch (IOException e) {
                e.printStackTrace();
                return ResponseEntity.badRequest().body("Failed to upload avatar");
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Override
    public UserDTO createUser(String username, String password, String email, String role) {
        UserEntity user = new UserEntity();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        user.setEmail(email);
        user.setRoles(Collections.singletonList(roleRepository.findByName(role)));

        user.setAvatar(avatarUrl);

        UserEntity savedUser = userRepository.save(user);
        return userEntityToUserDTO.mapToDTO(savedUser);
    }

    @Override
    public ResponseEntity<?> updateUser(UUID id, UserRequestDTO user) {
        Optional<UserEntity> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            UserEntity userEntity = userOptional.get();
            Optional.ofNullable(user.getUsername()).ifPresent(userEntity::setUsername);
            Optional.ofNullable(user.getTelNumber()).ifPresent(userEntity::setTelNumber);
            Optional.ofNullable(user.getPassword()).ifPresent(p -> userEntity.setPassword(passwordEncoder.encode(p)));
            Optional.ofNullable(user.getEmail()).ifPresent(userEntity::setEmail);
            Optional.ofNullable(user.getBio()).ifPresent(userEntity::setBio);

            if(user.getFavoriteMovieId() != null) {
                Optional<Movie> movieOptional = movieRepository.findById(user.getFavoriteMovieId());
                if (movieOptional.isPresent()) {
                    Movie movie = movieOptional.get();
                    if (userEntity.getFavoriteMovies().contains(movie)) {
                        userEntity.getFavoriteMovies().remove(movie);
                    } else {
                        userEntity.getFavoriteMovies().add(movie);
                    }
                } else {
                    return ResponseEntity.badRequest().body("Movie not found");
                }
            }

            if(user.getRole() != null) {
                Role newRole = roleRepository.findByName(user.getRole());
                if(newRole != null) {
                    userEntity.getRoles().clear();
                    userEntity.getRoles().add(newRole);
                } else {
                    return ResponseEntity.badRequest().body("Role not found");
                }
            }

            userRepository.save(userEntity);
            return ResponseEntity.ok(userEntityToUserDTO.mapToDTO(userEntity));
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @Override
    public String deleteUser(UUID id) {
        Optional<UserEntity> userOptional = userRepository.findById(id);

        if (userOptional.isPresent()) {
            UserEntity user = userOptional.get();
            user.getRoles().clear();
            userRepository.save(user);
            userRepository.delete(user);
            return "User deleted successfully!";
        } else {
            return "User not found!";
        }
    }
}
