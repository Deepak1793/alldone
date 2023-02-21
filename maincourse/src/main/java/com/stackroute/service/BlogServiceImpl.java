package com.stackroute.service;


import com.stackroute.domain.Blog;
import com.stackroute.exception.ResourceNotFoundException;
import com.stackroute.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/* Add annotation to declare this class as Service class.
 * Also it should implement BlogService Interface and override all the implemented methods.*/
@Service
public class BlogServiceImpl implements BlogService {

    @Autowired
    private BlogRepository blogRepository;

    @Override
    public Blog saveBlog(Blog blog) {
        return blogRepository.save(blog);
    }

    @Override
    public List<Blog> getAllBlogs() {
        return (List<Blog>) this.blogRepository.findAll();
    }

    @Override
    public Blog getBlogById(int id) {
        Optional<Blog> blogDb = this.blogRepository.findById(id);
        if (blogDb.isPresent()) {
            return blogDb.get();
        } else {
            return null;
        }
    }

    @Override
    public void deleteBlog(int id) {
        blogRepository.deleteById(id);
    }

    @Override
    public Blog updateBlog(Blog blog) {
        //Finding existing blog
        Blog existingBlog = blogRepository.findById(blog.getBlogId()).orElse(null);

        //Updating existing blog
        existingBlog.setBlogId(blog.getBlogId());
        existingBlog.setBlogTitle(blog.getBlogTitle());
        existingBlog.setAuthorName(blog.getAuthorName());
        existingBlog.setBlogContent(blog.getBlogContent());

        return blogRepository.save(existingBlog);
    }
}
