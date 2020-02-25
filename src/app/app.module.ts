import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import {MaterialModule} from './material-module';
import { AddMovieFormComponent } from './components/movie/add-movie-form/add-movie-form.component';
import { ViewMovieComponent } from './components/movie/view-movie/view-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { MovieBadgeComponent } from './components/movie-badge/movie-badge.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMovieFormComponent,
    ViewMovieComponent,
    TableComponent,
    MovieFormComponent,
    ListViewComponent,
    MovieBadgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
