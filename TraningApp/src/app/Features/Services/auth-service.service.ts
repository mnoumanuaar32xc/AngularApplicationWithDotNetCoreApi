import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponse } from '../models/LoginResponse';
import { LoginRequest } from '../models/LoginRequest';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/User';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor( private http:HttpClient, private cookieService:CookieService  ) { }

  // declare a user this will accessable through out the App so bydefault initilized undefined/null 
  $user = new BehaviorSubject<User | undefined> (undefined);

  login (request :LoginRequest): Observable<LoginResponse >
  {
    return this.http.post<LoginResponse>(`${environment.apiBaseUrl}/api/auth/login`, {
      email: request.Email,
      password: request.Password
    });
    
  }

  // any user are changed this method will get the information 
  user(): Observable<User |undefined>{
    return this.$user.asObservable();

  }
  
  getUser(): User | undefined {
    const email = localStorage.getItem('user-email');
    const roles = localStorage.getItem('user-roles');

    if (email && roles) {
      const user: User = {
        Email: email,
        roles: roles.split(',')
      };

      return user;
    }

    return undefined;
  }

  Logout (): void{
    // clear the local Storage  
    localStorage.clear();
    this.cookieService.delete('Authorization', '/');
    this.$user.next(undefined);
    
      }
    
  setuser(user :User): void{

    this.$user.next (user);

    localStorage.setItem('user-email',user.Email);
    localStorage.setItem('user-roles',user.roles.join(','));
 
  }


}
