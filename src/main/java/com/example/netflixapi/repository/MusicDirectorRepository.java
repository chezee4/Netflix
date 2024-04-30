package com.example.netflixapi.repository;

import com.example.netflixapi.model.MusicDirector;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MusicDirectorRepository extends JpaRepository<MusicDirector, UUID> {
}
