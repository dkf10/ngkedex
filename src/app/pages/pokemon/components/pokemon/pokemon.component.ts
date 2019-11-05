import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NavigationService } from 'src/app/shared/services/navigation/navigation.service';

const spriteBasePath = environment.SPRITE_BASE_PATH;

@Component({
  selector: 'ngkx-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public pokemonName: string = "-";
  public pokemonId: string = "0";
  public flavorText: string = "No Pokémon selected.";
  public spritePic: string;

  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    if (this.navigationService.paramsData) {
      this.pokemonId = this.navigationService.paramsData['pokemonId'];
      this.pokemonName = this.navigationService.paramsData['pokemonName'];
    }
    
    this.spritePic = spriteBasePath + this.pokemonId + ".png";
  }

}
