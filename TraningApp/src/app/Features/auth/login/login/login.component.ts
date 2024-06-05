import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthServiceService } from 'src/app/Features/Services/auth-service.service';
import { LoginRequest } from 'src/app/Features/models/LoginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: LoginRequest;

  constructor(private authService: AuthServiceService,    private cookieService: CookieService,
      private router: Router) {
    this.model = {
      Email: '',
      Password: ''
    };


  }
  
  onFormSubmit(): void {
    this.authService.login(this.model)
    .subscribe({
      next: (response) => {
        // Set Auth Cookie
        this.cookieService.set('Authorization', `Bearer ${response.token}`,
        undefined, '/', undefined, true, 'Strict');

        // Set User in local storage befor rediect 
        this.authService.setuser({
          Email: response.email,
          roles: response.roles
        });

        // Redirect back to Home
         this.router.navigateByUrl('/');

      }
    });
  }

}
