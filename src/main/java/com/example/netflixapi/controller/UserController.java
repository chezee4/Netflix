package com.example.netflixapi.controller;

import com.example.netflixapi.dto.CreateUserDTO;
import com.example.netflixapi.dto.UserDTO;
import com.example.netflixapi.dto.UserRequestDTO;
import com.example.netflixapi.model.UserEntity;
import com.example.netflixapi.service.UserService;
import com.example.netflixapi.util.UserEntityToUserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;
    private final UserEntityToUserDTO userEntityToUserDTO;

    @Autowired
    public UserController(UserService userService, UserEntityToUserDTO userEntityToUserDTO) {
        this.userService = userService;
        this.userEntityToUserDTO = userEntityToUserDTO;
    }

    @GetMapping
    public ResponseEntity<List<UserDTO>> findAllUser() {
        List<UserDTO> userDTOs = userService.findAllUser().stream()
                .map(userEntityToUserDTO::mapToDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(userDTOs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUser(@PathVariable UUID id) {
        UserEntity userEntity = userService.findUserById(id);
        if (userEntity != null) {
            UserDTO userDTO = userEntityToUserDTO.mapToDTO(userEntity);
            return ResponseEntity.ok(userDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody CreateUserDTO request) {
        return ResponseEntity.ok(userService.createUser(request.getUsername(), request.getPassword(),
                request.getEmail(), request.getRole()));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable UUID id, @RequestBody UserRequestDTO user) {
        return userService.updateUser(id, user);
    }

    @PutMapping("/{id}/avatar")
    public ResponseEntity<?> uploadAvatar(@PathVariable UUID id, @RequestParam("avatar") MultipartFile avatar) {
        return userService.uploadAvatar(id, avatar);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable UUID id) {
        return ResponseEntity.ok(userService.deleteUser(id));
    }
}
