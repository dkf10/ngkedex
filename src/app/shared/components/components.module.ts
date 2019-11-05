import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './alert/alert.component';
import { CollapseModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, AlertComponent],
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    AlertComponent
  ]
})
export class ComponentsModule { }