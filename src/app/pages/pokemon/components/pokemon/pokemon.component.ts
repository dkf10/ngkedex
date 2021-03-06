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
  public pokemonName: string;
  public pokemonId: string;

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
    this.pokemonId = this.navigationService.paramsData['pokemonId'];
    this.pokemonName = this.navigationService.paramsData['pokemonName'];
    this.spritePic = spriteBasePath + this.pokemonId + ".png";
    this.loadPokemon();
  }

  private async loadPokemon(): Promise<void> {
    await this.pokemonService.getPokemonBase(this.pokemonId).then((response) => {
      if (response) {
        this.loadedPokemonBase = {
          baseExperience: response.base_experience,
          height: String(response.height / 10) + "m",
          name: response.name,
          weight: String(response.weight / 10) + "kg"
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


  private async loadPokemonAbilities(abilities: any): Promise<void> {
    for (let i: number = 0; i < abilities.length; i++) {
      await this.pokemonService.getPokemonAbility(abilities[i].ability.url).then((resp) => {
        if (resp) {
          resp.isHidden = abilities[i].is_hidden;
          this.loadedPokemonAbilities.push(resp);
        }
      });
    }
  }

  private async loadPokemonSpecies(species: any): Promise<void> {
    await this.pokemonService.getPokemonSpecies(species.url).then((resp) => {
      if (resp) {
        this.loadedPokemonSpecies = resp;
      }
    });
  }

  private loadPokemonStats(stats: any): void {
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

  private async loadPokemonTypes(types: any): Promise<void> {
    for (let i: number = 0; i < types.length; i++) {
      let currType = types[i];

      return this.pokemonService.getPokemonType(currType.type.url).then((resp) => {
        if (resp) {
          this.loadedPokemonTypes.push(resp);
        }
      });
    }
  }
}
