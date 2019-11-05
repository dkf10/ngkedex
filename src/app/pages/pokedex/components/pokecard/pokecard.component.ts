import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NavigationService } from 'src/app/shared/services/navigation/navigation.service';

const spriteBasePath = environment.SPRITE_BASE_PATH;

@Component({
  selector: 'ngkx-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent implements OnInit {
  public spritePic: string;

  @Input("pokemonName") pokemonName: string;
  @Input("pokemonUrl") pokemonUrl: string;

  public pokemonId: string = "0";

  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.pokemonId = this.pokemonUrl.split('/')[6];
    this.spritePic = spriteBasePath + this.pokemonId + ".png";
  }

  public viewPokemon($event: Event): void {
    $event.preventDefault();

    // preparing parameters to be passed to the pokemon detail page
    this.navigationService.paramsData = {};
    this.navigationService.paramsData['pokemonId'] = this.pokemonId;
    this.navigationService.paramsData['pokemonName'] = this.pokemonName;

    this.router.navigate(['pokemon']);
  }
}
