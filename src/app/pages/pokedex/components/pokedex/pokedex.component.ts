import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { faAngleDoubleLeft, faAngleDoubleRight, IconDefinition } from '@fortawesome/free-solid-svg-icons'

import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from '../../interfaces/pokedex.interface';
import { AlertService } from 'src/app/shared/services/alert/alert.service';

@Component({
  selector: 'ngkx-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  public nextPgUrl: string;
  public prevPgUrl: string;
  public pokemon: Pokemon[];
  public countedPokemon: number;

  public prevPgIcon: IconDefinition;
  public nextPgIcon: IconDefinition;

  constructor(
    private pokedexService: PokedexService, 
    private alertService: AlertService, 
    private spinner: NgxSpinnerService
  ) {
    this.prevPgIcon = faAngleDoubleLeft;
    this.nextPgIcon = faAngleDoubleRight;
  }

  ngOnInit() {
    this.loadPokedex();
  }

  public doNavigate($event: Event, isNext: boolean): void {
    $event.preventDefault();
    if (isNext) {
      let params = new HttpParams({
        fromString: this.nextPgUrl.split('?')[1]
      });
      this.loadPokedex({params});
    } else {
      let params = new HttpParams({
        fromString: this.prevPgUrl.split('?')[1]
      });
      this.loadPokedex({params});
    }
  }

  private loadPokedex(options?: any): void {
    this.spinner.show();
    this.pokedexService.getPokedex(options).then((response) => {
      if(response) {
        this.pokemon = response.results;
        this.countedPokemon = response.count;
        this.nextPgUrl = response.next;
        this.prevPgUrl = response.previous;
        this.spinner.hide();
      } else {
        this.alertService.error("An error occurred while loading the Pokédex.");
      }
    });
  }
}
