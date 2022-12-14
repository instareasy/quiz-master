import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private snack: MatSnackBar) { }

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void {} 


  formSubmit() { 
  
    if(this.user.username == '' || this.user.username == null) {
      //alert('User is required !!');
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
        verticalPosition: 'top'
      });
      return;
    }
    if (this.user.password == '' || this.user.password == null) {
      // alert('User is required !!');
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }
    
    // validate 

    // addUser: userservice
    this.userService.addUser(this.user).subscribe(
       // success
      (data: any) => {
       
       //alert('success');
      Swal.fire("Registered !!", "User registration id: "+data.id, 'success');
      this.user.username='';
      this.user.password='';
      this.user.firstName='';
      this.user.lastName='';
      this.user.email='';
      this.user.phone='';
      },
      // error
      (error) => {
        console.log(error);
        // alert('something went wrong');
        this.snack.open(error.error.text,'', {
          duration: 3000,
        });
      }
    );
  }


}
