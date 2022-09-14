package com.admin.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Question {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long quesId;
	
	@Column(length = 500)
	private String content;
	private String image;
	
	private String option1;
	private String option2;
	private String option3;
	private String option4;
	
	private String answer;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private Quiz quiz;
}
