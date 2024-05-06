package com.example.netflixapi.controller;

import com.example.netflixapi.dto.SupportMessageDTO;
import com.example.netflixapi.service.SupportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/support")
public class SupportController {

    private final SupportService supportService;

    @Autowired
    public SupportController(SupportService supportService) {
        this.supportService = supportService;
    }

    @PostMapping("/message")
    public String sendMessage(@RequestBody SupportMessageDTO supportMessageDTO) {
        supportService.sendMessage(supportMessageDTO.getFirstName(), supportMessageDTO.getLastName(),
                supportMessageDTO.getEmail(), supportMessageDTO.getPhoneNumber(), supportMessageDTO.getMessage());
        return "Message sent successfully";
    }
}
