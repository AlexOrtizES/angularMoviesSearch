import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from '../components/list-view/list-view.component';

const routes: Routes = [
  {path: 'movies', component: ListViewComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
