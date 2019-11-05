import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './alert/alert.component';
import { CollapseModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, AlertComponent, FooterComponent],
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    AlertComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
