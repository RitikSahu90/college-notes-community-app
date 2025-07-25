package com.example.demo.noteup.backend.controller;

import com.example.demo.noteup.backend.model.Note;
import com.example.demo.noteup.backend.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin("http://localhost:3000/")  // Allow frontend to access
public class NoteController {

    @Autowired
    private NoteService noteService;

    @GetMapping
    public List<Note> getAllNotes(
            @RequestParam(required = false) String year,
            @RequestParam(required = false) String department
    ) {
        return noteService.getAllNotes(year,department);
    }

    @GetMapping("/{id}")
    public Note getNoteById(@PathVariable int id) {
        return noteService.getNoteById(id);
    }

    @PostMapping
    public Note uploadNote(@RequestBody Note note) {
        return noteService.saveNote(note);
    }

    @DeleteMapping("/{id}")
    public void deleteNote(@PathVariable int id) {
        noteService.deleteNoteById(id);
    }
}
