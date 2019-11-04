import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './components/news/news.component';
import { RouterModule } from '@angular/router';
import { newsRoutes } from './routes';



@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(newsRoutes)
  ]
})
export class NewsModule { }
