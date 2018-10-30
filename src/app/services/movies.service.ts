import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { GenservicesService } from './genservices.service';


@Injectable()
export class MoviesService {

  ip: string;
  ipurl: string;
  loginAPI:string;
  movies: any;
  constructor(private http: HttpClient, genService: GenservicesService) {
      this.ip = genService.ip;
      this.loginAPI = genService.loginAPI;
  }

  //Get list of all movies
  getMoviesList(){
    return this.http.get(this.ip + '/movies')
    .map(data => data);
  }

  //Get movie detail by ID
  getMovieById(id){
  return this.http.get(this.ip + '/movies/'+id)
  .map(data => data);
 
  /* return this.http.get(this.vendorIp+"/vendoraddress/getvendoraddbyid/"+id)
    .map(data =>data.json()); */
  }

}
