import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './shared/components/components.module';
import { ServicesModule } from './shared/services/services.module';
import { PokedexModule } from './pages/pokedex/pokedex.module';
import { AboutModule } from './pages/about/about.module';
import { PokemonModule } from './pages/pokemon/pokemon.module';
import { SearchModule } from './pages/search/search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    ServicesModule,
    PokedexModule,
    AboutModule,
    PokemonModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
