import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { NavigationService } from 'src/app/shared/services/navigation/navigation.service';
import { PokemonService } from '../../services/pokemon.service';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { PokemonBaseInterface, PokemonAbilityInterface, PokemonSpeciesInterface, PokemonStatInterface } from '../../interfaces/pokemon.interface';

const spriteBasePath = environment.SPRITE_BASE_PATH;

@Component({
  selector: 'ngkx-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public pokemonName: string = "No Pokémon selected.";
  public pokemonId: string = "0";

  public loadedPokemonBase: PokemonBaseInterface = null;
  public loadedPokemonSpecies: PokemonSpeciesInterface = null;
  public loadedPokemonAbilities: PokemonAbilityInterface[] = [];
  public loadedPokemonStats: PokemonStatInterface[] = [];
  public loadedPokemonTypes: string[] = [];
  
  public spritePic: string;
  
  constructor(
    private navigationService: NavigationService,
    private pokemonService: PokemonService,
    private spinner: NgxSpinnerService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.spinner.show();
    
    if (this.navigationService.paramsData) {
      this.pokemonId = this.navigationService.paramsData['pokemonId'];
      this.pokemonName = this.navigationService.paramsData['pokemonName'];
      this.loadPokemon();
    }
    
    this.spritePic = spriteBasePath + this.pokemonId + ".png";
    this.spinner.hide();
  }

  private loadPokemon() {
    this.pokemonService.getPokemonBase(this.pokemonId).then((response) => {
      if(response) {
        console.log(response);
        this.loadedPokemonBase = {
          baseExperience: response.base_experience,
          height: response.height/10,
          name: response.name,
          weight: response.weight/10
        };

        this.loadPokemonAbilities(response.abilities);
        this.loadPokemonSpecies(response.species);
        this.loadPokemonStats(response.stats);
        this.loadPokemonTypes(response.types);
      } else {
        this.alertService.error("An error occurred while loading this Pokémon.");
      }
    });
  }

  
  private loadPokemonAbilities (abilities: any): void {
    for (let i: number = 0; i < abilities.length; i++) {
      this.pokemonService.getPokemonAbility(abilities[i].ability.url).then((resp) => {
        if (resp) {
          resp.isHidden = abilities[i].is_hidden;
          this.loadedPokemonAbilities.push(resp);
        }
      });
    }
  }

  private loadPokemonSpecies (species: any): void {
    this.pokemonService.getPokemonSpecies(species.url).then((resp) => {
      if (resp) {
        this.loadedPokemonSpecies = resp;
      }
    });    
  }

  private loadPokemonStats (stats: any): void {
    for (let i: number = 0; i < stats.length; i++) {
      let stat: PokemonStatInterface = null;

      stat = {
        baseStat: stats[i].base_stat,
        effort: stats[i].effort,
        name: stats[i].stat.name
      }

      this.loadedPokemonStats.push(stat);
    }
  }

  private loadPokemonTypes (types: any): void {
    for (let i: number = 0; i < types.length; i++) {
      let currType = types[i];

      this.pokemonService.getPokemonType(currType.type.url).then((resp) => {
        if (resp) {
          this.loadedPokemonTypes.push(resp);
        }
      });
    }
  }
}
