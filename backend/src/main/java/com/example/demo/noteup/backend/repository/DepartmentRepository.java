package com.example.demo.noteup.backend.repository;

import com.example.demo.noteup.backend.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department,Integer> {
}
