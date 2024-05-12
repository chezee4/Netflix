package com.example.netflixapi.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "mov_id")
    private UUID id;
    @Column(name = "title")
    private String title;
    @Column(name = "alt")
    private String alt;
    @Column(name = "description")
    private String description;
    @Column(name = "release_year")
    private int releaseYear;
    @Column(name = "duration")
    private int duration;
    @Column(name = "rating_imdb")
    private double ratingIMDb;
    @Column(name = "rating_streamvibe")
    private double ratingStreamVibe;
    @Column(name = "views_number")
    private int viewsNumber;
    @ElementCollection
    @CollectionTable(name = "movie_genres", joinColumns = @JoinColumn(name = "mov_id"))
    @Column(name = "genre")
    private List<String> genres;
    @ElementCollection
    @CollectionTable(name = "movie_languages", joinColumns = @JoinColumn(name = "mov_id"))
    @Column(name = "language")
    private List<String> availableLanguages;
    @ElementCollection
    @CollectionTable(name = "movie_category", joinColumns = @JoinColumn(name = "mov_id"))
    @Column(name = "category")
    private List<String> category;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "movie_actors",
            joinColumns = @JoinColumn(name = "mov_id"),
            inverseJoinColumns = @JoinColumn(name = "actor_id"))
    private Set<Actor> actors = new HashSet<>();

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "director_id")
    private Director director;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "music_director_id")
    private MusicDirector musicDirector;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "movie_comments",
            joinColumns = @JoinColumn(name = "mov_id"),
            inverseJoinColumns = @JoinColumn(name = "comment_id"))
    private Set<Comment> comments = new HashSet<>();

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "movie_media_id")
    private MovieMedia movieMedia;
}
