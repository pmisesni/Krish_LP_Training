package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.Repository;

import com.example.demo.model.Student;

public interface StudentRepository extends JpaRepository<Student,Integer>{
	
	

}
