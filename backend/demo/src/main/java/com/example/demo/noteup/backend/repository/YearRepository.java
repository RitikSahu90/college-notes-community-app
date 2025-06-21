package com.example.demo.noteup.backend.repository;

import com.example.demo.noteup.backend.model.Year;
import org.springframework.data.jpa.repository.JpaRepository;

public interface YearRepository extends JpaRepository<Year,Integer> {
}
