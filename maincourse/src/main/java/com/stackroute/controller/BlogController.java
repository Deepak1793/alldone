package com.stackroute.controller;


import com.stackroute.domain.Blog;
import com.stackroute.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/* Add annotation to declare this class as REST Controller */

@RestController
public class BlogController {

    @Autowired
    private BlogService blogService;

    /* Provide implementation code for these methods */

    /*This method should save blog and return savedBlog Object */
    @PostMapping("/api/v1/blogs")
    public ResponseEntity<Blog> saveBlog(@RequestBody Blog blog) {
        Blog addedBlog = this.blogService.saveBlog(blog);
        return new ResponseEntity<>(addedBlog, HttpStatus.CREATED);
    }

    /*This method should fetch all blogs and return the list of all blogs */
    @GetMapping("/api/v1/blogs")
    public ResponseEntity<List<Blog>> getAllBlogs() {
        List<Blog> blogList = this.blogService.getAllBlogs();
        return new ResponseEntity<>(blogList, HttpStatus.OK);
    }

    /*This method should fetch the blog taking its id and return the respective blog */
    @GetMapping("/api/v1/blog/{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable int id) {
        Blog blogById = this.blogService.getBlogById(id);
        return new ResponseEntity<>(blogById, HttpStatus.OK);
    }

    /*This method should delete the blog taking its id and return the deleted blog */
//    @DeleteMapping("/api/v1/blog/{id}")
//    public ResponseEntity<Blog> getBlogAfterDeleting(@PathVariable int id) {
//            this.blogService.deleteBlog(id);
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }

   /*This method should delete the blog taking its id and return the deleted blog */
    @DeleteMapping("/api/v1/blog/{id}")
    public ResponseEntity<Blog> getBlogAfterDeleting(@PathVariable int id){
        Blog deletedBlog = this.blogService.getBlogById(id);
        this.blogService.deleteBlog(id);
        return new ResponseEntity<>(deletedBlog, HttpStatus.OK);
    }

    /*This method should update blog and return the updatedBlog */
    @PutMapping("/api/v1/blog")
    public ResponseEntity<Blog> updateBlog(@RequestBody Blog blog){
        Blog newBlog = this.blogService.updateBlog(blog);
        return new ResponseEntity<>(newBlog, HttpStatus.OK);
    }

}