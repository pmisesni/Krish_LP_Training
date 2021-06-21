package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Student;
import com.example.demo.service.StudentService;


@RestController
public class HelloController {
	
	@Autowired
	private StudentService studentService;
	
	@RequestMapping(value = "/hello" ,method=RequestMethod.POST)
	public String welcomeGreetings() {
		return "Welcome to Spring Boot";
	}
	
	@RequestMapping(value = "/hello" ,method=RequestMethod.GET)
	public String greetings() {
		return "Hello";
	}
	
	@RequestMapping(value="/student", method=RequestMethod.POST)
	public Student save(@RequestBody Student student) {
		return studentService.save(student);
	}

}
