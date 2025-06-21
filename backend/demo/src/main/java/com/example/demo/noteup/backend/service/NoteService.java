package com.example.demo.noteup.backend.service;

import com.example.demo.noteup.backend.model.Department;
import com.example.demo.noteup.backend.model.Note;
import com.example.demo.noteup.backend.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class NoteService {
    @Autowired
    private NoteRepository noteRepository;

    public Note getNoteById(Integer id) {
        return noteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Note not found"));
    }

    public Note saveNote(Note note) {
        note.setUploadTime(new Timestamp(System.currentTimeMillis()));
        return noteRepository.save(note);
    }

    public void deleteNoteById(int id) {
        noteRepository.deleteById(id);
    }

    public List<Note> getAllNotes(String year, String dep) {
        List<Note> notes = noteRepository.findAll();
        System.out.println("Filtering Department: " + dep);

        if (dep != null && !dep.equalsIgnoreCase("All Departments")) {
            String depTrimmed = dep.trim();
            System.out.println("Filtering for department: '" + depTrimmed + "'");

            for (Note n : notes) {
                System.out.println("Note ID: " + n.getId());
                if (n.getDept() != null) {
                    for (Department d : n.getDept()) {
                        System.out.println(" -> Department: '" + d.getName() + "'");
                    }
                } else {
                    System.out.println(" -> No department assigned");
                }
            }

            notes = notes.stream()
                    .filter(note -> note.getDept() != null &&
                            note.getDept().stream()
                                    .anyMatch(d -> d.getName() != null &&
                                            d.getName().trim().equalsIgnoreCase(depTrimmed)))
                    .collect(Collectors.toList());
        }


        if (year != null && !year.equalsIgnoreCase("All Years")) {
            notes = notes.stream()
                    .filter(notesItem -> notesItem.getYear().stream()
                            .anyMatch(y -> String.valueOf(y.getId()).equals(year)))
                    .collect(Collectors.toList());
        }

        return notes;
    }

}