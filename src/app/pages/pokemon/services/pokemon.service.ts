import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { PokemonAbilityInterface, PokemonSpeciesInterface } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private apiService: ApiService, private spinner: NgxSpinnerService) { }

  public async getPokemonBase(id: string, options?: any): Promise<any> {
    return await this.apiService.get<any>(`${environment.BASE_URL}/pokemon/` + id, options).then((response) => {
      let result: any = null;

      if (response) {
        result = response;
      }

      return result;
    });
  }

  public async getPokemonAbility(url: string, options?: any): Promise<PokemonAbilityInterface> {
    return await this.apiService.get<PokemonAbilityInterface>(url, options).then((response) => {
      let result: PokemonAbilityInterface = null;

      if (response) {
        let pAbName: string = "";

        for (let i: number = 0; i < response.names.length; i++) {
          if (response.names[i].language.name === "en") {
            pAbName = response.names[i].name;
            break;
          }
        }

        result = {
          name: pAbName,
          isHidden: false
        }
      }

      return result;
    });
  }

  public async getPokemonSpecies(url: string, options?: any): Promise<PokemonSpeciesInterface> {
    return await this.apiService.get<PokemonSpeciesInterface>(url, options).then((response) => {
      let result: PokemonSpeciesInterface = null;

      if (response) {
        let pFlavText: string = "";
        let pGenera: string = "";

        for (let i: number = 0; i < response.flavor_text_entries.length; i++) {
          if (response.flavor_text_entries[i].language.name === "en") {
            pFlavText = response.flavor_text_entries[i].flavor_text;
            break;
          }
        }

        for (let i: number = 0; i < response.genera.length; i++) {
          if (response.genera[i].language.name === "en") {
            pGenera = response.genera[i].genus;
            break;
          }
        }

        result = {
          flavorText: pFlavText,
          genera: pGenera,
          generation: response.generation.name
        }
      }

      return result;
    });
  }

  public async getPokemonType(url: string, options?: any): Promise<string> {
    return await this.apiService.get<string>(url, options).then((response) => {
      let result: string = "";

      if (response) {
        for (let i: number = 0; i < response.names.length; i++) {
          if (response.names[i].language.name === "en") {
            result = response.names[i].name;
          }
        }
      }

      return result;
    });
  }

  public async getPokemonEvolutionChain(id: string, options: any): Promise<any> {
    return await null;

    // todo: call apiservice.get<>('evolution-chain/'+id, options)
    // todo: change inner type in return type of promise
  }
}
