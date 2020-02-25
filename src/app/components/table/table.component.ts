import { Component, OnInit, Input, EventEmitter, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTable} from '@angular/material';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})

export class TableComponent implements OnInit {
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  displayedColumns = ['imdbID','Title','Poster'];
  dataSource = new MatTableDataSource(this._movieService.listMovies);

  constructor(public _movieService:MovieService) {
    
  }

  refresh(){
    this.table.renderRows();
  }

  ngOnInit() {
    
  }

  

}
