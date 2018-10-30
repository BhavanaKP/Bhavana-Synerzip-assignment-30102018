import { Injectable } from '@angular/core';

@Injectable()
export class GenservicesService {

  constructor() { }

  ip = "http://103.19.39.28:3000";
  loginAPI = "http://103.19.39.28:3000/users/login";
}
