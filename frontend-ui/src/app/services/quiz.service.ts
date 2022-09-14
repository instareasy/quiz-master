import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http: HttpClient) { }

  // get all quiz from server
  public quizzes() {
    return this._http.get(`${baseUrl}/quiz/`);
  }

    // get a quiz by its id
    public getQuiz(qId: any) {
      return this._http.get(`${baseUrl}/quiz/${qId}`);
    }

  // add quiz to server 
  public addQuiz(quiz: any) {
    console.log('from Quiz service');
    console.log(quiz);
    return this._http.post(`${baseUrl}/quiz/`, quiz);
  }

  // update a quiz
  public updateQuiz(quiz: any) {
    return this._http.put(`${baseUrl}/quiz/`, quiz);
  }

  // get quizzes of category
  public getQuizzesOfCategory(cid: any) {
    return this._http.get(`${baseUrl}/quiz/category/${cid}`);
  }

  // get active quizzes
  public getActiveQuizzes() {
    return this._http.get(`${baseUrl}/quiz/active`);
  }

  // get active quizzes of category
  public getActiveQuizzesOfCategory(cid: any) {
    return this._http.get(`${baseUrl}/quiz/category/active/${cid}`);
  }

  // delete a quiz
  public deleteQuiz(qid: any) {
    return this._http.delete(`${baseUrl}/quiz/${qid}`);
  }



}