package com.admin.service.impl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.admin.model.Question;
import com.admin.model.Quiz;
import com.admin.repo.QuestionRepo;
import com.admin.service.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	private QuestionRepo questionRepo;
	
	@Override
	public Question addQuestion(Question question) {
		return this.questionRepo.save(question);
	}

	@Override
	public Question updateQuestion(Question question) {
		return this.questionRepo.save(question);
	}

	@Override
	public Set<Question> getQuestions() {
		return new HashSet<>(this.questionRepo.findAll());
	}

	@Override
	public Question getQuestion(Long quesId) {
		return this.questionRepo.findById(quesId).get();
	}

	@Override
	public Set<Question> getQuestionOfQuiz(Quiz quiz) {
		return this.questionRepo.findByQuiz(quiz);
	}

	@Override
	public void deleteQuestion(Long quesId) {
		this.questionRepo.deleteById(quesId);

	}

}
