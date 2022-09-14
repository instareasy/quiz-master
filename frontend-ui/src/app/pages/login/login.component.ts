import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };

  constructor(
    private snack: MatSnackBar,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginSubmit() {
    console.log('login btn clicked ');

    // username checking
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.snack.open('Username is required !!', '', {
        duration: 4000,
      });
      return;
    }

    // password checking
    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snack.open('Password is required !! ', '', {
        duration: 4000,
      });
      return;
    }

    // request to server to generate token
    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log('success');
        console.log(data);

        // login...
        this.loginService.loginUser(data.token); // sets token in localstorage
        this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUser(user);
          console.log(user);
          // redirect... ADMIN: admin-dashboard
          // redirect... NORMAL: normal-dashboard
          if (this.loginService.getUserRole() == 'ADMIN') {
            //window.location.href='/admin';
            this.router.navigate(['admin']);
            this.loginService.loginStatusSubject.next(true);
          } else if (this.loginService.getUserRole() == 'NORMAL') {
            // window.location.href = '/user-dashboard';
            this.router.navigate(['user-dashboard/0']);
            this.loginService.loginStatusSubject.next(true);
          } else {
            this.loginService.logout();
          }
        });
      },
      (error) => {
        console.log('error');
        console.log(error);
        this.snack.open('Invalid Credentials provided ! Try again.', '', {
          duration: 3000,
        });
      }
    );
  }
}
