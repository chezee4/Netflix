package com.example.netflixapi.controller;

import com.example.netflixapi.model.UserEntity;
import com.example.netflixapi.repository.UserRepository;
import com.example.netflixapi.security.CustomUserDetailsServiceImpl;
import com.example.netflixapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@RestController
@RequestMapping("/api/user")
public class UserController {

    UserRepository userRepository;
    CustomUserDetailsServiceImpl userDetails;
    UserService userService;



    @PreAuthorize(value = "hasRole('USER') or hasRole('ADMIN')")
    @GetMapping("/me")
    public ResponseEntity<Object> getMe(@AuthenticationPrincipal UserEntity user) {
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return userService.getUser(user.getId());
    }

    @PreAuthorize(value = "hasRole('ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<Object> getUser(@PathVariable("id") UUID id) {
        return userService.getUser(id);
    }

    @PreAuthorize(value = "hasRole('USER') or hasRole('ADMIN')")
    @PatchMapping("/me")
    public ResponseEntity<Object> updateMe(@AuthenticationPrincipal UserEntity user,
                                           @RequestParam(name = "avatar", required = false) MultipartFile avatar) {
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return userService.updateUser(user.getId(), user, avatar);
    }

    @PreAuthorize(value = "hasRole('ADMIN')")
    @PatchMapping("/{id}")
    public ResponseEntity<Object> updateUser(@PathVariable("id") UUID id, @RequestBody UserEntity user,
                                             @RequestParam(name = "avatar", required = false) MultipartFile avatar) {
        return userService.updateUser(id, user, avatar);
    }

    @PreAuthorize(value = "hasRole('USER') or hasRole('ADMIN')")
    @DeleteMapping("/me")
    public ResponseEntity<Object> deleteMe(@AuthenticationPrincipal UserEntity user) {
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        userRepository.deleteById(user.getId());
        return ResponseEntity.ok().build();
    }

    @PreAuthorize(value = "hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable("id") UUID id) {
        userRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
