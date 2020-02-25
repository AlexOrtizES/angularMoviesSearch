import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/Movie';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  token: string = '&apikey=1c9f9bcc';
  url: string = 'http://www.omdbapi.com/?t=';
  
  constructor(
    private _http: HttpClient) { 
    
  }

  search(title: string): Observable<Movie>{
    return this._http.get<Movie>(this.url + title + this.token);
  }
}
