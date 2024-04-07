package com.example.netflixapi.service;

import com.example.netflixapi.model.Comment;
import org.springframework.stereotype.Service;

@Service
public interface CommentService {
    Comment addComment(Comment comment);
}
