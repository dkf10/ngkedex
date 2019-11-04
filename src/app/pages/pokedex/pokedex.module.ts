import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { RouterModule } from '@angular/router';
import { pokedexRoutes } from './routes';
import { PokecardComponent } from './components/pokecard/pokecard.component';



@NgModule({
  declarations: [PokedexComponent, PokecardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(pokedexRoutes)
  ]
})
export class PokedexModule { }
