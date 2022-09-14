import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  qId: any;
  qTitle: any;

  quizzes: any;

  question = {
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    quiz: {
      qid: '',
    },
  };



  constructor(private _route: ActivatedRoute, private _question: QuestionService, private _quiz: QuizService) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['qtitle'];
   
    this._quiz.getQuiz(this.qId).subscribe(
      (data: any) => {
        this.quizzes = data;
        console.log(this.quizzes);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', "Server error", 'error');
      });

  }


  formSubmit() {
    if(this.question.content.trim() =='' || this.question.content == null) {
      return;
    }

    if(this.question.option1.trim() =='' || this.question.option1 == null) {
      return;
    }
    if(this.question.option2.trim() =='' || this.question.option2 == null) {
      return;
    }
    if(this.question.answer.trim() =='' || this.question.answer == null) {
      return;
    }

    // after validation, submit
    this._question.addQuestion(this.question).subscribe(
      (data: any) => { Swal.fire("Success !!", "Question created successfully.", 'success'); },
      (error: any) => { Swal.fire("Error !!", "Error in creating question.", 'error'); }
    );

  }
}
