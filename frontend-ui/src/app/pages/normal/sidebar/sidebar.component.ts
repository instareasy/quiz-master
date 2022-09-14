import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

categories: any;
isLoggedIn: any;

  constructor(
    public loginService: LoginService,
    private _cat: CategoryService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    
    this._cat.categories().subscribe(
      (data: any) => { 
        this.categories = data; 
      },
      (error: any) => {   
        Swal.fire("Error!!", "Error in loading categories.", 'error');  
      }
    );
  }

  public logout() {
    this.loginService.logout();
    window.location.reload();
  }

}
