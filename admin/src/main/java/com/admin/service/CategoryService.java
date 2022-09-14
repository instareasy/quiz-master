package com.admin.service;

import java.util.Set;

import com.admin.model.Category;

public interface CategoryService {

	public Category addCategory(Category category);
	
	public Category updateCategory(Category catgeory);
	
	public Set<Category> getCategories();
	
	public Category getCategory(Long categoryId);
	
	public void deleteCategory(Long categoryId);
}
