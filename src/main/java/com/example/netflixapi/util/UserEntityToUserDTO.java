package com.example.netflixapi.util;

import com.example.netflixapi.dto.MovieResponseListDTO;
import com.example.netflixapi.dto.UserDTO;
import com.example.netflixapi.model.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserEntityToUserDTO {
    private final MovieToMovieResponseDTO movieToMovieResponseDTO;

    @Autowired
    public UserEntityToUserDTO(MovieToMovieResponseDTO movieToMovieResponseDTO) {
        this.movieToMovieResponseDTO = movieToMovieResponseDTO;
    }

    public UserDTO mapToDTO(UserEntity userEntity) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(userEntity.getId());
        userDTO.setUsername(userEntity.getUsername());
        userDTO.setPassword(userEntity.getPassword());
        userDTO.setEmail(userEntity.getEmail());
        userDTO.setTelNumber(userEntity.getTelNumber());
        userDTO.setBio(userEntity.getBio());
        userDTO.setAvatar(userEntity.getAvatar());

        if(userEntity.getFavoriteMovies() != null && !userEntity.getFavoriteMovies().isEmpty()) {
            List<MovieResponseListDTO> favoriteMoviesDTO = userEntity.getFavoriteMovies().stream()
                    .map(movieToMovieResponseDTO::convert)
                    .collect(Collectors.toList());
            userDTO.setFavoriteMovies(favoriteMoviesDTO);
        }
        if (userEntity.getRoles().stream().anyMatch(role -> role.getName().equals("ADMIN"))) {
            userDTO.setRole("ADMIN");
        } else if (userEntity.getRoles().stream().anyMatch(role -> role.getName().equals("USER"))) {
            userDTO.setRole("USER");
        }

        return userDTO;
    }
}
