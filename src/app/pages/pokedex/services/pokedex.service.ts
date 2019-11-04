import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { PokedexInterface, Pokemon } from '../interfaces/pokedex.interface';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  constructor(private apiService: ApiService, private spinner: NgxSpinnerService) { }

  public async getPokedex(options?: any): Promise<PokedexInterface> {
    this.spinner.show();
    return await this.apiService.get<PokedexInterface>('pokemon', options).then((response) => {
      let result: PokedexInterface = null;
      let pokeArray: Pokemon[] = [];

      if (response) {
        for (let i in response.results) {
          let pokemon: Pokemon = {
            name: response.results[i].name,
            url: response.results[i].url,
          }

          pokeArray.push(pokemon);
        }

        result = {
          count: response.count,
          previous: response.previous,
          next: response.next,
          results: pokeArray
        }
      }

      return result;
    });
  }

  public async getPokemon(options?: any): Promise<any> {

  }
}
