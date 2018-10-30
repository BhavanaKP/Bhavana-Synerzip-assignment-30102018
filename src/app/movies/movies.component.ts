import { Component, OnInit} from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';
import { PopoverModule } from 'ngx-bootstrap';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  data: any;
  movies: any;
  id:string;
  compare: any;
  popOvercompare:any;
  languages: any[] = [{ language: 'Hindi' }, { language: 'English' }];
  langFilter: any = { language: '' };

  years: any[] = [{year: '2018'}, {year: '2017'}];
  yearFilter: any = {year: '' };
  compActor: any;
  getIdMovie: any;
  loggedIn: string;

  constructor(
    private moviesservice:MoviesService,
    private router: Router,
    private filterPipe: FilterPipe,
    private popoverModule:PopoverModule
  ) {
    //console.log(filterPipe.transform(this.languages, { language: 'M'}));
   }

  ngOnInit() {

    if( localStorage.getItem('accessToken')==null || localStorage.getItem('accessToken')==""){
      this.router.navigate(['/users/login']);
    }
    this.loggedIn = localStorage.getItem('loggedIn');


    this.moviesservice.getMoviesList().subscribe(success => {
    this.movies = success;

    this.id = this.movies._id;
    });

    
  }

//To redirect to external URL/
   goToUrl(){
    window.open(
      'https://www.synerzip.com/',
      '_blank' // <- This is what makes it open in a new window.
    );
  }
 
//To view the details of movie by ID
  viewMovieDetails(id){
    if (id != null) {
      this.router.navigate(['/movies/', id]);
    }
  }
  getMovieId(id){
    this.moviesservice.getMovieById(id).
    subscribe(
      success => {
         this.compare = success;
         //alert( this.compare.rating);
         console.log(success);
    });
    
   // this.compActor = this.compare.actors;
   // let compareActor = this.compare.actors;
    //console.log("HEREEE--"+this.compare);
  }
 
  // this.moviesservice.getMoviesList().subscribe(success => {
  //   this.movies = success;
  //   });

}
