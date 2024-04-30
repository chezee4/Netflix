package com.example.netflixapi.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
@Table(name = "actors")
public class Actor {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "actor_id")
    private UUID actor_id;
    @Column(name = "name")
    private String name;
    @Column(name = "avatar")
    private String avatar;
}
