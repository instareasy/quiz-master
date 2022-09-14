import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { loginUrl } from './helper';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  // current user : which is loggedin
  public getCurrentUser() {
    return this.http.get(`${loginUrl}/current-user`);
  }

  // generate token
  public generateToken(loginData: any) {
    return this.http.post(`${loginUrl}/generate-token`, loginData);
  }

  // login user : set token in LocalStorage
  public loginUser(token: string) {
    localStorage.setItem('token', token);
    return true;
  }

  // checks whether user is logged in or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null)
      return false;
    else return true;
  }

  // logging out the user : remove token from local storage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  // retrieve token from localStorage
  public getToken() {
    return localStorage.getItem('token');
  }

  // set user details in localStorage
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // get user from localStorage
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  // get user role
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
