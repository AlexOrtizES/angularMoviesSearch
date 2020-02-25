import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/interfaces/Movie';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.sass']
})
export class ListViewComponent implements OnInit {

  constructor(public _movieService:MovieService) { }

  selectedMovie : Movie;
  selected : Boolean = false;

  ngOnInit() {
  }

  selectMovie(movie : Movie){
    this.selectedMovie = movie;
    this.selected = true;
  }

  remove(movie : Movie){
    this._movieService.listMovies = this._movieService.listMovies.filter(obj => obj.ID != movie.ID);
    this.selectedMovie = <Movie>{};
    this.selected = false;
  }

  closeView(){
    this.selected = false;
  }
}
