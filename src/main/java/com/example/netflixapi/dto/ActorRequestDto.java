package com.example.netflixapi.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ActorRequestDto {
    private String name;
    private MultipartFile avatar;
}
