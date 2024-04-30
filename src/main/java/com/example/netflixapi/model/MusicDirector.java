package com.example.netflixapi.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
@Table(name = "music_directors")
public class MusicDirector {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "music_director_id")
    private UUID id;
    @Column(name = "name")
    private String name;
    @Column(name = "avatar")
    private String avatar;
    @Column(name = "country")
    private String country;
}
