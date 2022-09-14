import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes: any;

  constructor(private _quiz: QuizService) { }

  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
        console.log(this.quizzes);
      },
      (error) => {
        console.log(error);
        Swal.fire('Errr !!', "Server error", 'error');
      });
  }

  // delete quiz
  deleteQuiz(qid: any) {
    
    Swal.fire({
        icon: 'question',
        title: "Are you sure?",
        confirmButtonText: "Delete",
        showCancelButton: true,
    }).then(
      (result) => {
        if(result.isConfirmed) {
            // delete after confirmation
            this._quiz.deleteQuiz(qid).subscribe(
              (data: any) => {  this.quizzes =  this.quizzes.filter(
                                    (quiz: any) => quiz.qid != qid
                                );
              Swal.fire('Success', 'quiz is deleted successfully', 'success');
              },
            (error: any) => {   Swal.fire('Error !!', 'Error in deleting quiz', 'error');
              });
            }
      });
    
  }

}
