package com.exam.service;

import java.util.Set;

import com.exam.model.User;
import com.exam.model.UserRole;

public interface UserService {

	// creating user
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;
	
	
	// get user
	public User getUser(String username);
	
	// update user
	public User updateUser(User user);
	
	// delete user by userId
	public void deleteUser(Long userId);
	
}
