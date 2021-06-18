package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	
	@RequestMapping(value = "/hello" ,method=RequestMethod.POST)
	public String welcomeGreetings() {
		return "Welcome to Spring Boot";
	}
	
	@RequestMapping(value = "/hello" ,method=RequestMethod.GET)
	public String greetings() {
		return "Hello";
	}

}
