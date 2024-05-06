package com.example.netflixapi.dto;

import lombok.Data;

@Data
public class SupportMessageDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String message;
}
