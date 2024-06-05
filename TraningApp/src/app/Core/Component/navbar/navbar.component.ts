import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Features/Services/auth-service.service';
import { User } from 'src/app/Features/models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent   implements OnInit 
{
  user?: User;
   // create a listner to listen the Login user changes 
 
   constructor(private authService:AuthServiceService, private router:Router )
   {   }

 
  ngOnInit(): void {
    this.authService.user()
    .subscribe({
      next: (response) => {
        this.user = response;
      }
    });

    this.user = this.authService.getUser();

  }

 



  Logout() :void{
    this.authService.Logout();
    this.router.navigateByUrl('/');


  }



}
