import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GenservicesService } from './genservices.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  ip: string;
  logAPI:string;
  constructor(
      private http: Http, 
      genService: GenservicesService,
      private router: Router,) {
      this.ip = genService.ip;
      this.logAPI = genService.loginAPI;
  }

  loginUser(user){
    return this.http.post(this.logAPI, user)
    .map(data => data.json());
  }
 
  logOut(){
    localStorage.removeItem('accessToken');
    localStorage.removeItem('loggedIn')
    //sessionStorage.clear;
    //alert(localStorage.getItem('loggedIn'));
    this.router.navigate([this.logAPI]);
  }
  
}
