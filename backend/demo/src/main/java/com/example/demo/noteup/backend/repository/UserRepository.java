package com.example.demo.noteup.backend.repository;

import com.example.demo.noteup.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmailAndPassword(String email, String password);
}
