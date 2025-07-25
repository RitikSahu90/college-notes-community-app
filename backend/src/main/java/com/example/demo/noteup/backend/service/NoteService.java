package com.example.demo.noteup.backend.service;

import com.example.demo.noteup.backend.model.Department;
import com.example.demo.noteup.backend.model.Note;
import com.example.demo.noteup.backend.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.sql.Timestamp;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class NoteService {
    @Autowired
    private NoteRepository noteRepository;

    public Note getNoteById(Integer id) {
        return noteRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Note not found with ID: " + id));
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

        // Filter by department
        if (dep != null && !dep.equalsIgnoreCase("All Departments")) {
            String depTrimmed = dep.trim();
            notes = notes.stream()
                    .filter(note -> note.getDept() != null &&
                            note.getDept().stream()
                                    .anyMatch(d -> d.getName() != null &&
                                            d.getName().trim().equalsIgnoreCase(depTrimmed)))
                    .collect(Collectors.toList());
        }

        // Filter by year (name or ID match)
        if (year != null && !year.equalsIgnoreCase("All Years")) {
            String yearTrimmed = year.trim();
            notes = notes.stream()
                    .filter(note -> note.getYear() != null &&
                            note.getYear().stream()
                                    .anyMatch(y -> {
                                        String yname = y.getYearName();
                                        String yid = String.valueOf(y.getId());
                                        return (yname != null && yname.trim().equalsIgnoreCase(yearTrimmed)) ||
                                                yid.equals(yearTrimmed);
                                    }))
                    .collect(Collectors.toList());
        }

        return notes;
    }


}