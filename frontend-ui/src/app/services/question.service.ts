import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminUrl } from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http: HttpClient) { }

// for admin use
  public getQuestionOfQuiz(qid: any) {
      return this._http.get(`${adminUrl}/question/quiz/all/${qid}`);
  }


  // for normal user user
  public getQuestionOfQuizForTest(qid: any) {
    return this._http.get(`${adminUrl}/question/quiz/${qid}`);
}

  public addQuestion(question: any) {
      return this._http.post(`${adminUrl}/question/`, question);
  }

  public deleteQuestion(questionId: any) {
    return this._http.delete(`${adminUrl}/question/${questionId}`);
  }

}
