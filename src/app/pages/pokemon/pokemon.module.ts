import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { pokemonRoutes } from './routes';
import { BasePropCardComponent } from './components/base-prop-card/base-prop-card.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { TypesCardComponent } from './components/types-card/types-card.component';



@NgModule({
  declarations: [PokemonComponent, BasePropCardComponent, StatsCardComponent, TypesCardComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
