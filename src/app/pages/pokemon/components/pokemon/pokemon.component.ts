import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

const spriteBasePath = environment.SPRITE_BASE_PATH;

@Component({
  selector: 'ngkx-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public pokemonName: string;
  public pokemonId: string;
  public flavorText: string = "No Pokémon selected.";
  public spritePic: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.pokemonId = params['pokemonId'] || "0";
      this.pokemonName = params['pokemonName'] || "-";
    });

    this.spritePic = spriteBasePath + this.pokemonId + ".png";
  }

}
