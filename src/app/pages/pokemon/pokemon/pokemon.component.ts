import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

const spriteBasePath = environment.SPRITE_BASE_PATH;

@Component({
  selector: 'ngkx-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public spritePic: string;
  public flavorText: string;
  
  @Input("pokemonName") pokemonName: string;
  @Input("pokemonId") pokemonId: string;

  constructor() { }

  ngOnInit() {
    //TODO: REMOVE, MOCKED DATA
    this.pokemonId = "1"; 
    this.pokemonName = "Bulbasaur"
    this.flavorText = "Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s rays,\nthe seed grows progressively larger."
    
    this.spritePic = spriteBasePath + this.pokemonId + ".png";
  }

}
