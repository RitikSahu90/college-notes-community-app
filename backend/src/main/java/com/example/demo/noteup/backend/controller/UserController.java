package com.example.demo.noteup.backend.controller;

import com.example.demo.noteup.backend.model.User;
import com.example.demo.noteup.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000/")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }
    @PostMapping
    public User createUser(@RequestBody User user){
        return userService.saveUser(user);
    }
    @GetMapping("/{id}/uploads")
    public long getUploadedCount(@PathVariable int id){
        return userService.getUploadCountByUserId(id);
    }
}
