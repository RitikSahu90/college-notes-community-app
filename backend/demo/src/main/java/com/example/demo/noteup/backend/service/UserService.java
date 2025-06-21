package com.example.demo.noteup.backend.service;

import com.example.demo.noteup.backend.model.User;
import com.example.demo.noteup.backend.repository.NoteRepository;
import com.example.demo.noteup.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
@Service
public class UserService {
    @Autowired
    private NoteRepository noteRepository;
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
    public User getUserById(int id){
        return userRepository.findById(id).orElse(null);
    }
    public Optional<User> getUserWithNotes(int id) {
        return userRepository.findById(id);
    }
    public User saveUser(User user) {
        Optional<User> existing = userRepository.findByUsername(user.getUsername());
        if (existing.isPresent()) {
            throw new RuntimeException("Username already exists");
        }
        return userRepository.save(user);
    }

    public long getUploadCountByUserId(int id) {
        return noteRepository.countByUserId(id);
    }


    public Optional<User> findByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }
}
