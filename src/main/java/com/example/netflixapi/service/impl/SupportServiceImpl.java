package com.example.netflixapi.service.impl;

import com.example.netflixapi.service.SupportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SupportServiceImpl implements SupportService{

    @Autowired
    private JavaMailSender emailSender;

    @Override
    public String sendMessage(String firstName, String lastName, String email, String phoneNumber, String message) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo("baran.maksym@student.uzhnu.edu.ua");
        mailMessage.setSubject("New Support Message");
        mailMessage.setText("You have received a new support message:\n\n" +
                "Name: " + firstName + " " + lastName + "\n" +
                "Email: " + email + "\n" +
                "Phone: " + phoneNumber + "\n" +
                "Message: " + message);
        emailSender.send(mailMessage);

        return "Message sent successfully";
    }
}
