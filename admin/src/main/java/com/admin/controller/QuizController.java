package com.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.admin.model.Category;
import com.admin.model.Quiz;
import com.admin.service.QuizService;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {

	@Autowired
	private QuizService quizService;

	// POST - add quiz
	@PostMapping("/")
	public ResponseEntity<Quiz> add(@RequestBody Quiz quiz) {
		return ResponseEntity.ok(this.quizService.addQuiz(quiz));
	}

	// PUT - update quiz
	@PutMapping("/")
	public ResponseEntity<Quiz> update(@RequestBody Quiz quiz) {
		return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
	}

	// GET - get all quizzes
	@GetMapping("/")
	public ResponseEntity<?> quizzes() {
		return ResponseEntity.ok(this.quizService.getQuizzes());
	}

	// GET - get quiz by ID
	@GetMapping("/{quizId}")
	public Quiz quiz(@PathVariable("quizId") Long quizId) {
		return this.quizService.getQuiz(quizId);
	}
	
	// GET - get quiz by category
	@GetMapping("/category/{cid}")
	public List<Quiz> getQuizzesOfCategory(@PathVariable("cid") Long cid) {
		Category cat = new Category();
		cat.setCid(cid);
		return this.quizService.getQuizzesOfCategory(cat);
	}
	
	// GET - 
	@GetMapping("/active")
	public List<Quiz> getActiveQuizzes() {
		return this.quizService.getActiveQuizzes();
	}
	
	// GET - 
		@GetMapping("/category/active/{cid}")
		public List<Quiz> getActiveQuizzes(@PathVariable("cid") Long cid) {
			Category cat = new Category();
			cat.setCid(cid);
			return this.quizService.getActiveQuizzesOfCategory(cat);
		}

	// DELETE - delete quiz
	@DeleteMapping("/{quizId}")
	public void delete(@PathVariable("quizId") Long quizId) {
		this.quizService.deleteQuiz(quizId);
	}
}
