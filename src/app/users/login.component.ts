import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { UserLogin } from '../models/UserLogin.model';
import { AlertsService } from 'angular-alert-module';
// import * as sha256 from 'sha256';
// import * as bcrypt from 'bcryptjs';
// import * as salt from 'salt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private userLogin: UserLogin,
    private alerts: AlertsService) { }

  ngOnInit() {
    // Add the delay after which alert hides out
    // 0 - It won't hide at all
    // number greater than 0 will hide it after the mentioned seconds
    this.alerts.setDefaults('timeout', 5);
  }

  login() {

    if (this.userLogin.username != null && this.userLogin.password != null) {

      this.userLogin.password = this.userLogin.password; //hashPass;
      this.loginService.loginUser(this.userLogin).subscribe(
        success => {
          localStorage.setItem('accessToken', success.accessToken);
          localStorage.setItem('loggedIn', "True");
          this.router.navigate(['/movies']);
        },
        (err) => {
          this.alerts.setMessage('Invalid username or password', 'error');
        }
      );

    } else {
      this.alerts.setMessage('Please enter username or password', 'warn');
    }
  }
}