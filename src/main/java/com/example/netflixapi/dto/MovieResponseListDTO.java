package com.example.netflixapi.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class MovieResponseListDTO {
    private UUID id;
    private String title;
    private String alt;
    private String banner;
    private int duration;
    private int viewsNumber;
}
