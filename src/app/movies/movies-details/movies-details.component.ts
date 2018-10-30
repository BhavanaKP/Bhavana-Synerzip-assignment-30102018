import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  details: any;
  movieId: string;
  urlList: any;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private moviesservice:MoviesService
  ) {
    var getMovieId;
    getMovieId = activatedRoute.snapshot.params;
    this.urlList = JSON.parse(JSON.stringify(activatedRoute.snapshot.url));
    this.movieId = getMovieId.id;
    //alert(this.movieId);
   }

  ngOnInit() {

    this.moviesservice.getMovieById(this.movieId).subscribe(success => {
      this.details = success;
      console.log(this.details);
      });
      
      if( localStorage.getItem('accessToken')==null || localStorage.getItem('accessToken')==""){
        this.router.navigate(['/users/login']);
      }
  }
  
  goToUrl(){
    window.open(
      'https://www.synerzip.com/',
      '_blank' // <- This is what makes it open in a new window.
    );

  }
}
