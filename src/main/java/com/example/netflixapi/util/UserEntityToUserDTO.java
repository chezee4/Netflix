package com.example.netflixapi.util;


import com.example.netflixapi.dto.UserDTO;
import com.example.netflixapi.model.UserEntity;
import org.springframework.stereotype.Component;

@Component
public class UserEntityToUserDTO {
    public UserDTO mapToDTO(UserEntity userEntity) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(userEntity.getId());
        userDTO.setUsername(userEntity.getUsername());
        userDTO.setPassword(userEntity.getPassword());
        userDTO.setEmail(userEntity.getEmail());
        userDTO.setTelNumber(userEntity.getTelNumber());
        userDTO.setBio(userEntity.getBio());
        userDTO.setAvatar(userEntity.getAvatar());

        if (userEntity.getRoles().stream().anyMatch(role -> role.getName().equals("ADMIN"))) {
            userDTO.setRole("ADMIN");
        } else if (userEntity.getRoles().stream().anyMatch(role -> role.getName().equals("USER"))) {
            userDTO.setRole("USER");
        }

        return userDTO;
    }
}
