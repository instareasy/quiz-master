package com.admin.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.admin.model.Category;

public interface CategoryRepo extends JpaRepository<Category, Long>{

}
