package com.example.netflixapi.service.impl;

import com.example.netflixapi.model.Comment;
import com.example.netflixapi.repository.CommentRepository;
import com.example.netflixapi.service.CommentService;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;

    public CommentServiceImpl(CommentRepository commentRepository) {this.commentRepository = commentRepository;}

    @Override
    public Comment addComment(Comment comment) {return commentRepository.save(comment);}
}
