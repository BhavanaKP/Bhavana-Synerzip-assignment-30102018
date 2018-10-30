import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserRegister } from '../models/UserRegister.model';
import 'rxjs';
@Injectable()
export class UserService {
    apiUrl: string;
    
    constructor(private http: HttpClient) { }

    // getAll() {
    //     return this.http.get<User[]>(`${config.apiUrl}/users`);
    // }

    // getById(id: number) {
    //     return this.http.get(`${config.apiUrl}/users/` + id);
    // }

    // register(data) {
        
    //     this.apiUrl = 'http://103.19.39.28:3000/users/signup';
    //     return this.http.post(this.apiUrl, data);
    // }
    create(data) {

        return this.http.post("http://103.19.39.28:3000/users/signup",data)
        .map(data => data);
        
    }
  
    // update(user: User) {
    //     return this.http.put(`${config.apiUrl}/users/` + user.id, user);
    // }

    // delete(id: number) {
    //     return this.http.delete(`${config.apiUrl}/users/` + id);
    // }
}