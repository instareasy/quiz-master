import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginUrl } from './helper';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private _http: HttpClient) {}

   // add user
   public addUser(user: any) {
      return this._http.post(`${loginUrl}/user/`, user);
   }

   public updateUser(user: any) {
    return this._http.put(`${loginUrl}/user/`, user);
   }
}
