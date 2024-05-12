package com.example.netflixapi.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "coment_id")
    private UUID id;
    @Column(name = "name")
    private String name;
    @Column(name = "comment")
    private String comment;
    @Column(name = "country")
    private String country;
    @Column(name = "rating")
    private Integer rating;
}
