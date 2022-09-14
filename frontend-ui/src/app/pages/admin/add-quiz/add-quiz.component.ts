import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  categories: any;

  quizData = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category: {
      cid: '',
    },
  };

  constructor(private _category: CategoryService, private _quiz: QuizService, private _snack: MatSnackBar ) { }

  ngOnInit(): void {
    this._category.categories().subscribe(
      (data: any) => {
        this.categories = data;
        console.log(this.categories);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', "Server error", 'error');
      });
  }
  
  
  // add quiz
  addQuiz() {
    // validation
      if(this.quizData.title.trim() == '' &&  this.quizData.title == null ) {
        this._snack.open('Title required !!', '', {
          duration: 3000,
        });
        return;
      }

    // after validation
    // call server 
    this._quiz.addQuiz(this.quizData).subscribe(
      (data: any) => {
        Swal.fire('Success', 'quiz is added successfully', 'success');
        console.log(data)
        this.quizData = {
          title: '',
          description: '',
          maxMarks: '',
          numberOfQuestions: '',
          active: true,
          category: {
            cid: '',
          }
        };
      },
      (error: any) => {
        console.log(error);
        Swal.fire('Error !!', 'Server error', 'error');
      });
  }

}
