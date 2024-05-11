package com.example.netflixapi.dto;

import lombok.Data;

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
}