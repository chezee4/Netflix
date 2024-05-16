package com.example.netflixapi.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Data
public class UserDTO {
    private UUID id;
    private String username;
    private String password;
    private String email;
    private String telNumber;
    private String role;
    private String bio;
    private String avatar;
    private List<MovieResponseListDTO> favoriteMovies;
}