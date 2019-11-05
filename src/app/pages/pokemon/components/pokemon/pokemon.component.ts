import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { NavigationService } from 'src/app/shared/services/navigation/navigation.service';
import { PokemonService } from '../../services/pokemon.service';

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
    private navigationService: NavigationService,
    private spinner: NgxSpinnerService,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.spinner.show();
    
    // retrieving passed parameters from navigation service
    if (this.navigationService.paramsData) {
      this.pokemonId = this.navigationService.paramsData['pokemonId'];
      this.pokemonName = this.navigationService.paramsData['pokemonName'];

      // resetting variable for safety
      this.navigationService.paramsData = null;
    }
    
    this.spritePic = spriteBasePath + this.pokemonId + ".png";
    this.spinner.hide();
  }
}
