import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './users/login.component';
import {RegisterComponent} from './users/register.component'
import {MoviesComponent} from './movies/movies.component';
import {MoviesDetailsComponent} from './movies/movies-details/movies-details.component'
const routes: Routes = [
  { path: '', redirectTo: 'users/login', pathMatch: 'full'} ,
  { path: 'users/login', component: LoginComponent},
  { path: 'users/signup', component: RegisterComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'movies/:id', component: MoviesDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
