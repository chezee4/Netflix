package com.example.netflixapi.util;

import com.example.netflixapi.dto.MovieResponseListDTO;
import com.example.netflixapi.model.Movie;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class MovieToMovieResponseDTO {
    public MovieResponseListDTO convert(Movie movie) {
        MovieResponseListDTO movieResponseListDTO = new MovieResponseListDTO();
        movieResponseListDTO.setId(movie.getId());
        movieResponseListDTO.setTitle(movie.getTitle());
        movieResponseListDTO.setAlt(movie.getAlt());
        movieResponseListDTO.setBanner(movie.getMovieMedia().getBannerUrl());
        movieResponseListDTO.setDuration(movie.getDuration());
        movieResponseListDTO.setViewsNumber(movie.getViewsNumber());
        return movieResponseListDTO;
    }

    public List<MovieResponseListDTO> convert(List<Movie> movies) {
        return movies.stream()
                .map(this::convert)
                .collect(Collectors.toList());
    }
}