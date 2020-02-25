import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/interfaces/Movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styles: []
})
export class MovieFormComponent implements OnInit {

  @Output() viewForm = new EventEmitter<boolean>();
  constructor(public _movieService:MovieService, private _builder : FormBuilder) { 
    this.movieForm = this._builder.group({
      formMovieTitle: ['', Validators.required],
      formMovieId: ['', Validators.required]
    });
  }
    
  movieForm : FormGroup;
  ngOnInit() {
  }

  addMovie(){
    var movie = <Movie>{};
    this._movieService.idMovie = this._movieService.idMovie + 1;
    movie.ID = this._movieService.idMovie;
    movie.Title = this.movieForm.get('formMovieTitle').value;
    movie.imdbID = this.movieForm.get('formMovieId').value;
    this._movieService.listMovies.push(movie);
  }

  closeForm(){
    this.viewForm.emit(false);
  }
}
