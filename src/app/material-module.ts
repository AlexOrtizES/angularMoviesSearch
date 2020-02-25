
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule, MatTableModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule, MatBadgeModule} from '@angular/material';
@NgModule({
  declarations: [
    
  ],
  imports: [
      BrowserAnimationsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatCardModule,
      MatMenuModule,
      MatIconModule,
      MatBadgeModule,
      MatTableModule,
      MatSortModule
    ],
  exports: [
      BrowserAnimationsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatCardModule,
      MatMenuModule,
      MatIconModule,
      MatBadgeModule,
      MatTableModule,
      MatSortModule
    ]
})
export class MaterialModule { }
