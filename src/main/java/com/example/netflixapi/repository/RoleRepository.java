package com.example.netflixapi.repository;

import com.example.netflixapi.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, String> {
    <Optional>Role findByName(String name);
}
