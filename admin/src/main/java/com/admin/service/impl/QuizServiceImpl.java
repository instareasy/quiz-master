package com.admin.service.impl;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.admin.model.Category;
import com.admin.model.Quiz;
import com.admin.repo.QuizRepo;
import com.admin.service.QuizService;

@Service
public class QuizServiceImpl implements QuizService {

	@Autowired
	private QuizRepo quizRepo;
	
	@Override
	public Quiz addQuiz(Quiz quiz) {
		return this.quizRepo.save(quiz);
	}

	@Override
	public Quiz updateQuiz(Quiz quiz) {
		return this.quizRepo.save(quiz);
	}

	@Override
	public Set<Quiz> getQuizzes() {
		return new HashSet<>(this.quizRepo.findAll());
	}

	@Override
	public Quiz getQuiz(Long quizId) {
		
		return this.quizRepo.findById(quizId).get();
	}
	
	@Override
	public List<Quiz> getQuizzesOfCategory(Category cat) {
		
		return this.quizRepo.findByCategory(cat);
	}

	@Override
	public void deleteQuiz(Long quizId) {
		this.quizRepo.deleteById(quizId);
	}

	@Override
	public List<Quiz> getActiveQuizzes() {
		return this.quizRepo.findByActive(true);
	}

	@Override
	public List<Quiz> getActiveQuizzesOfCategory(Category c) {
		return this.quizRepo.findByCategoryAndActive(c, true);
	}

}
