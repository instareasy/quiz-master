import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
//   user = {
//     "username": '',
//     "password": '',
//     "firstName": '',
//     "email": "",
//     "phone": "",
//     "profile": ""
// } 
  user: any = null;

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.user = this.loginService.getUser();
    this.loginService.loginStatusSubject.asObservable().subscribe(
      (data) => {
        this.isLoggedIn = this.loginService.isLoggedIn();
        this.user = this.loginService.getUser();
        
      });
  }

  public logout() {
    this.loginService.logout();
    window.location.reload();
  }

  public isAdmin() {
    if(this.user.authorities[0].authority == 'ADMIN') 
      return true;
    else
      return false;
  }

}
