package com.example.demo.noteup.backend.repository;

import com.example.demo.noteup.backend.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note,Integer> {
    long countByUserId(int userId);
}
