import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = null;
  
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    // fetch data from localstorage
    this.user = this.loginService.getUser();

    // OR

    // fetch data directly from server on requesting
/*
    this.loginService.getCurrentUser().subscribe(
      (user: any) => {
        this.user = user;
      },
      (error) => {
        alert("error");
      }
    );
*/

  }

}
