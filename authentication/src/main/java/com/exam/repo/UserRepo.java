package com.exam.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.model.User;

public interface UserRepo extends JpaRepository<User, Long> {

	public User findByUsername(String username);

}
