import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { pokemonRoutes } from './routes';
import { BasePropCardComponent } from './components/base-prop-card/base-prop-card.component';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [PokemonComponent, BasePropCardComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
