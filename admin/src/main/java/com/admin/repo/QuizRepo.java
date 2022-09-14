package com.admin.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.admin.model.Category;
import com.admin.model.Quiz;

public interface QuizRepo extends JpaRepository<Quiz, Long>{

	public List<Quiz> findByCategory(Category category);
	
	public List<Quiz> findByActive(boolean b);
	
	public List<Quiz> findByCategoryAndActive(Category c, boolean b);
	
	
	
}
