import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Movie } from 'src/app/interfaces/Movie';
import { MovieService } from 'src/app/services/movie.service';
import { TableComponent } from '../../table/table.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.sass']
})

export class ViewMovieComponent implements OnInit {
  @ViewChild(TableComponent,{static:true}) table : TableComponent;
  @Input() public newMovie: boolean = false;

  constructor(private _apiService:ApiService, public _movieService:MovieService, private _builder : FormBuilder) { 
    this.searchForm = this._builder.group({
      searchTitle: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  searchForm : FormGroup;
  movie: Movie;
  selected: boolean = false;
  selectedMovie : Movie;
  totalMovies = 0;
  
  clearForm(){
    this.selected = false;
    this.newMovie = false;
    this.searchForm.reset();
  }

  submitSearch(){
    var movieTitle = this.searchForm.get('searchTitle').value;
    this.searchMovie(movieTitle);
  }

  viewForm(value:boolean){
    this.newMovie = value;
  }

  viewMovieForm(){
    this.newMovie = true;
    this.selectedMovie = <Movie>{};
    this.selected = false;
  }
  
  searchMovie(title:string){
    var titleForm = title.replace(/\s/g, "+");
    this._apiService.search(titleForm).subscribe(response =>{
      this.movie = response;
      this.selected = true;
      this.newMovie = false;
    });
  }

  addMovie(movie : Movie){
    this.selectedMovie = <Movie>{};
    this.selectedMovie = movie;
    this._movieService.idMovie = this._movieService.idMovie + 1;
    this.selectedMovie.ID = this._movieService.idMovie;
    this._movieService.listMovies.push(this.selectedMovie);
    this.totalMovies = this._movieService.listMovies.length;
    this.selected = false;
  }

  closeView(){
    this.selected = false;
  }

  clearList(){
    this._movieService.listMovies = [];
    this.totalMovies = this._movieService.listMovies.length;
  }

}
