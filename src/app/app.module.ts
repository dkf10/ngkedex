import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './shared/components/components.module';
import { PokedexModule } from './pages/pokedex/pokedex.module';
import { NewsModule } from './pages/news/news.module';
import { AboutModule } from './pages/about/about.module';
import { ServicesModule } from './shared/services/services.module';
import { PokemonModule } from './pages/pokemon/pokemon.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    AppRoutingModule,
    ComponentsModule,
    PokedexModule,
    NewsModule,
    AboutModule,
    ServicesModule,
    PokemonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }