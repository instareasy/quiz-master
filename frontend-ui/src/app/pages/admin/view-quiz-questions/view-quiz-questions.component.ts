import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  qId: any;
  qTitle: any;
  questions: any;

  constructor(private _route: ActivatedRoute,
      private _question: QuestionService 
    ) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['qtitle'];
    console.log('this.qid: ' + this.qId);
    console.log('this.qTitle: ' + this.qTitle);

    this._question.getQuestionOfQuiz(this.qId).subscribe(
      (data: any) => { console.log(data); this.questions = data;  },
      (error: any) => { console.log(error);  }
    )
  }

}
