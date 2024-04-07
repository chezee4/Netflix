package com.example.netflixapi.controller;

import com.example.netflixapi.model.Comment;
import com.example.netflixapi.service.CommentService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService) {this.commentService = commentService;}

    @PostMapping("/comment")
    public Comment addComment(@RequestBody Comment comment) {return commentService.addComment(comment);}
}
