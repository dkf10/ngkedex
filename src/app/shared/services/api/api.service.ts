import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../alert/alert.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, private alertService: AlertService) { }

  public async get<T>(url: string, options?: any): Promise<any> {
    try {
      return this.httpClient
        .get<any>(`${url}`, options)
        .toPromise();
    } catch (error) {
      this.alertService.error("An error occurred. " + error);
    }
  }
}
