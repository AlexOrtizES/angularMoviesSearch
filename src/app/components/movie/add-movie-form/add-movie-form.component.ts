import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/Movie';
import { Movies } from 'src/app/interfaces/Movies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.sass']
})
export class AddMovieFormComponent implements OnInit {

  constructor(public _movieService:MovieService) { 
   
  }

  ngOnInit() {
  }

  movie : Movie;
  totalMovies = 0;
    
  addMovie(Title : string, type: string){
    this._movieService.idMovie ++;
    var newMovie = <Movie>{};
    newMovie.Title = Title;
    newMovie.ID = this._movieService.idMovie;
    newMovie.Type = type;
    console.log(name);
    this._movieService.listMovies.push(newMovie);
    this.totalMovies = this._movieService.listMovies.length;
  }
}
