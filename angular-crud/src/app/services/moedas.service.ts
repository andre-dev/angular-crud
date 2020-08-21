import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from 'src/environments/endpoint';

@Injectable({
  providedIn: 'root'
})
export class MoedasService {

  constructor(
    private http: HttpClient
  ) { }

  public getCoins(type: string) {
    console.log(`${Endpoints.coins}${type}/ticker/`);
    return this.http.get<any>(`${Endpoints.coins}${type}/ticker/`);
  }
}
