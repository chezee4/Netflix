package com.example.netflixapi.service;

import org.springframework.stereotype.Service;

@Service
public interface SupportService {
    String sendMessage(String firstName, String lastName, String email, String phoneNumber, String message);
}
