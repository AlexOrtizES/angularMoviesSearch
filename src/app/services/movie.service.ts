import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  listMovies = [];
  idMovie = 0;

  constructor() { }
}
