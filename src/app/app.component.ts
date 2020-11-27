import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tutorial';

  constructor(private router : Router){
    
  }

  goToMovies(){
    console.log('aaaaaaaaaaaaaaaaaaa');
    this.router.navigate(['/movies']);
  }
}


