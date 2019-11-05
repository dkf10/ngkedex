import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private apiService: ApiService, private spinner: NgxSpinnerService) { }

  public async getPokemonDetail(id: string, options: any): Promise <any> {
    this.spinner.show();
    return await null;
  }
}
