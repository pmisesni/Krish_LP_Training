package com.example.demo;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import org.springframework.boot.actuate.endpoint.annotation.*;
import org.springframework.stereotype.Component;

@Component
@Endpoint(id="stage")
public class StageEndPoint {
	
	Map<String,Stage> stages = new ConcurrentHashMap<>();
	
@ReadOperation
public Map<String, Stage> getAllStages() {
		return stages;
	}

@ReadOperation
public Stage getStage(@Selector String name) {
	return stages.get(name);
}

@WriteOperation
	public void setStages(@Selector String name, int stage) {
		stages.put(name, new Stage(stage));
	}


static class Stage{
	int value;

	public Stage(int value) {
		this.value = value;
	}
	
	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}
	
}
}