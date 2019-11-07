import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { PokedexInterface, Pokemon } from '../interfaces/pokedex.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  constructor(private apiService: ApiService) { }

  public async getPokedex(options?: any): Promise<PokedexInterface> {
    return await this.apiService.get<PokedexInterface>(`${environment.BASE_URL}/pokemon`, options).then((response) => {
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
}
