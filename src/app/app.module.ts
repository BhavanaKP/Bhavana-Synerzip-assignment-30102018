import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  Http, HttpModule } from '@angular/http';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './users/login.component';
import {RegisterComponent} from './users/register.component'
import { MoviesComponent } from './movies/movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service'
import { UserLogin } from './models/UserLogin.model';
import { UserRegister } from './models/UserRegister.model';
import { UserService } from './services/user.service';
import { GenservicesService } from './services/genservices.service';
import { MoviesService } from './services/movies.service';
import { TokenInterceptor } from './services/token.interceptor';

import { MoviesDetailsComponent } from './movies/movies-details/movies-details.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { PopoverModule } from 'ngx-bootstrap';
import { AuthService } from './services/auth.service';
// Import your library
import { AlertsModule } from 'angular-alert-module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesComponent,
    RegisterComponent,
    MoviesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    FilterPipeModule,
    PopoverModule.forRoot(),
    AlertsModule.forRoot()
  ],
  providers: [
    UserLogin,
    UserRegister, 
    GenservicesService, 
    LoginService, 
    UserService,  
    TokenInterceptor, 
    MoviesService,
    AuthService,
    PopoverModule,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { 

}