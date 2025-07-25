package com.example.demo.noteup.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;
@Entity
@Table(name = "notes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String title;

    @Column(name = "file_url", nullable = false)
    private String fileurl;

    @JsonIgnoreProperties("notes")
    @ManyToMany(fetch =FetchType.EAGER)
    @JoinTable(
            name = "note_department",
            joinColumns = @JoinColumn(name = "note_id"),
            inverseJoinColumns = @JoinColumn(name = "dept_id")
    )
    private List<Department> dept;

    @JsonIgnoreProperties("notes")
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToMany
    @JoinTable(
            name = "note_year",
            joinColumns = @JoinColumn(name = "note_id"),
            inverseJoinColumns = @JoinColumn(name = "year_id")
    )
    private List<Year> year;

    @Column(name = "upload_time")
    private Timestamp uploadTime;
}
