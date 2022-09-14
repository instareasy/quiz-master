import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  qId!: null;
  questions: any;
  user: any;
  marksGot = 0;
  correctAnswer = 0;
  attempted = 0;

  isSubmit = false;
  timer: any;

  constructor(
    private locationStrategy: LocationStrategy, 
    private _route: ActivatedRoute, 
    private _question: QuestionService,
    private _login: LoginService
    ) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.qId = this._route.snapshot.params['qid'];    
    this.loadQuestions();
    this.user = this._login.getUser();
    console.log(this.qId);
    console.log(this.user);
  }


  loadQuestions() {
    this._question.getQuestionOfQuizForTest(this.qId).subscribe(
      (data: any) => {  
        this.questions = data;

        this.timer = this.questions?.length * 2.5 * 60; // timer in seconds

        this.questions.forEach((q: any) => {
          q['givenAnswer'] = '';
        });

        console.log(this.questions);
        this.startTimer();
       },
      (error: any) => { 
        console.log(error); 
        Swal.fire("Error", "error in loading data", 'error');
      }
    )
  }


  preventBackButton() {
    history.pushState(null, '', location.href);
    this.locationStrategy.onPopState(
      () => { history.pushState(null, '', location.href); } 
    );
  }

  submitQuiz() {
    Swal.fire({
      title: 'Do you want to submit the quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      denyButtonText: `Don't Save`,
      icon: 'info',
    }).then((e: any) => {
      if (e.isConfirmed) {
        this.evaluateQuiz()
      }
    });
  }


  evaluateQuiz() {
    // calculation of marks
    this.isSubmit = true;
    this.questions.forEach((q:any) => {
      if(q.givenAnswer == q.answer) {
        this.correctAnswer++;
        let marksSingle = this.questions[0].quiz.maxMarks / this.questions.length;
        this.marksGot += marksSingle;
      }

      if(q.givenAnswer.trim() != '') {
        this.attempted++;
      }
    });
    
  }

  startTimer() {
    let t = window.setInterval(() => {
      if(this.timer <= 0) {
        this.evaluateQuiz()
        clearInterval(t);
      } else {
        this.timer--;
      }
    },1000);
  }

  getFormattedTime() {
    let min = Math.floor(this.timer/60);
    let sec = this.timer - min * 60;
    return `${min} : ${sec} Min`;
  }

  printResult() {
    window.print();
  }

}
