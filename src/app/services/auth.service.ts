import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  public accessToken: string = 'not set';
  at:any;
  public getToken(): string {
    
    //console.log(localStorage.getItem('accessToken'));
    return localStorage.getItem('accessToken');
  
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();

    return tokenNotExpired(token);
  }

}