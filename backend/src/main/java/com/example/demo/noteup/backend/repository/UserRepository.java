package com.example.demo.noteup.backend.repository;

import com.example.demo.noteup.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsername(String username);
}
