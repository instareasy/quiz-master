package com.admin.repo;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.admin.model.Question;
import com.admin.model.Quiz;

public interface QuestionRepo extends JpaRepository<Question, Long>{

	Set<Question> findByQuiz(Quiz quiz);
}
