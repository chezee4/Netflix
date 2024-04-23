package com.example.netflixapi.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "comment")
public class Comment {
    @Id
    @Column(name = "coment_id")
    private String id;
    @Column(name = "name")
    private String name;
    @Column(name = "comment")
    private String comment;
    @Column(name = "country")
    private String country;
    @Column(name = "rating")
    private Integer rating;
}
