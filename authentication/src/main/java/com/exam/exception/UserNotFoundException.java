package com.exam.exception;

public class UserNotFoundException extends Exception{

	public UserNotFoundException() {
		super("User with this username cannot be found. Try with some other username.");
	}
	
	public UserNotFoundException(String msg) {
		super(msg);
	}
}
