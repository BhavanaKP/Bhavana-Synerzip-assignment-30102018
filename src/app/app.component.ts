import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'SynerZip';
  loggedIn:string;
  constructor(
    private loginService: LoginService,
    ) { }

  logOut() {
    this.loginService.logOut();
  }

  ngOnInit(){
    this.loggedIn = localStorage.getItem('loggedIn');
  }
}
