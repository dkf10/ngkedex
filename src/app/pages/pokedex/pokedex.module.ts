import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { PokedexComponent } from './components/pokedex/pokedex.component';
import { pokedexRoutes } from './routes';
import { PokecardComponent } from './components/pokecard/pokecard.component';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [PokedexComponent, PokecardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(pokedexRoutes),
    FontAwesomeModule,
    NgxSpinnerModule
  ]
})
export class PokedexModule { }
