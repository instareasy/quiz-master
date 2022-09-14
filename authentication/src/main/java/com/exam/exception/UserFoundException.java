package com.exam.exception;

public class UserFoundException extends Exception{

	public UserFoundException() {
		super("User already exists !! Try with some other username.");
	}
	
	public UserFoundException(String msg) {
		super(msg);
	}
}
