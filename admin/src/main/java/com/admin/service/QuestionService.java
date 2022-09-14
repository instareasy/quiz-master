package com.admin.service;

import java.util.Set;

import com.admin.model.Question;
import com.admin.model.Quiz;

public interface QuestionService {

	public Question addQuestion(Question question);
	
	public Question updateQuestion(Question question);
	
	public Set<Question> getQuestions();
	
	public Question getQuestion(Long quesId);
	
	public Set<Question> getQuestionOfQuiz(Quiz quiz);
	
	public void deleteQuestion(Long quesId);
}
