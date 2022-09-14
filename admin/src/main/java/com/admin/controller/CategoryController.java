package com.admin.controller;

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
import com.admin.service.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;
	
	// POST - add category
	@PostMapping("/")
	public ResponseEntity<?> addCategory(@RequestBody Category category) {
		Category cat1 = this.categoryService.addCategory(category);
		return ResponseEntity.ok(cat1);
	}
	
	// GET - get category by ID
	@GetMapping("/{categoryId}")
	public Category getCategory(@PathVariable("categoryId") Long categoryId) {
		return this.categoryService.getCategory(categoryId);
	}
	
	// GET - get all categories
	@GetMapping("/")
	public ResponseEntity<?> getCategories() {
		return ResponseEntity.ok(this.categoryService.getCategories());
	}
	
	// PUT - update category 
	@PutMapping("/")
	public Category updateCategory(@RequestBody Category category) {
		return this.categoryService.updateCategory(category);
	}
	
	// DELETE - delete category
	@DeleteMapping("/{categoryId}")
	public void deleteCategory(@PathVariable("categoryId") Long catgeoryId) {
		this.categoryService.deleteCategory(catgeoryId);
	}
	
	
}

