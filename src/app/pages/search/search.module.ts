import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { searchRoutes } from './routes';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    RouterModule.forChild(searchRoutes)
  ]
})
export class SearchModule { }
