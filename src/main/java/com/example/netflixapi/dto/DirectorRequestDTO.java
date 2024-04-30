package com.example.netflixapi.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class DirectorRequestDTO {
    private String name;
    private String country;
    private MultipartFile avatar;
}