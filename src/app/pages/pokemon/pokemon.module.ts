import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { pokemonRoutes } from './routes';



@NgModule({
  declarations: [PokemonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
