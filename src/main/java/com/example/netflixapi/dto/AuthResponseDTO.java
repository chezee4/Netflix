package com.example.netflixapi.dto;

import lombok.Data;

@Data
public class AuthResponseDTO {
    private String accessToken;

    public AuthResponseDTO(String accessToken) {
        this.accessToken = accessToken;
    }
}
