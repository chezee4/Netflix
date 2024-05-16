package com.example.netflixapi.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class UserRequestDTO {
    private String username;
    private String password;
    private String email;
    private String telNumber;
    private String role;
    private String bio;
    private UUID favoriteMovieId;
}
