import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngkx-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent implements OnInit {

  @Input("pokemonName") pokemonName: string;
  @Input("pokemonUrl") pokemonUrl: string;

  public pokemonId: string = "0";

  constructor(private router: Router) { }

  ngOnInit() {
    this.pokemonId = this.pokemonUrl.split('/')[6];
  }

  public viewPokemon($event: Event): void {
    $event.preventDefault();
    this.router.navigateByUrl('/pokemon');
  }
}
