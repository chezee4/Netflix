package com.example.netflixapi.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
@Table(name = "movie_media")
public class MovieMedia {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "movie_media_id")
    private UUID id;
    @Column(name = "image_url")
    private String imageUrl;
    @Column(name = "video_url")
    private String videoUrl;
}
