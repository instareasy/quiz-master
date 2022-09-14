package com.exam.service.impl;


import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.exam.exception.UserFoundException;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.repo.RoleRepo;
import com.exam.repo.UserRepo;
import com.exam.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	UserDetails userDetails;
	
	@Autowired
	private RoleRepo roleRepo;
	
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		
		User local = this.userRepo.findByUsername(user.getUsername());
		if(local != null) {
			System.out.println("User already exists with username: "+local.getUsername());
			throw new UserFoundException();
		}
		else {
			for(UserRole ur:userRoles)
			{
				roleRepo.save(ur.getRole());
			}
			user.getUserRoles().addAll(userRoles);
			local = this.userRepo.save(user);
		}
		return local;
	}

	
	// getting user by user name
	@Override
	public User getUser(String username) {
		return this.userRepo.findByUsername(username);
	}
	
	@Override
	public User updateUser(User user) {
		return this.userRepo.save(user);
	}

	// deleting user by id
	@Override
	public void deleteUser(Long userId) {
		this.userRepo.deleteById(userId);
	}

}
