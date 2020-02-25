import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-badge',
  templateUrl: './movie-badge.component.html',
  styleUrls: ['./movie-badge.component.sass']
})
export class MovieBadgeComponent implements OnInit {

  constructor(public _movieService:MovieService) {
    
   }

  ngOnInit() {
  }

}
