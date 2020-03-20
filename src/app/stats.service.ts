import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StatsService {
  countryList =[];
  constructor(private _http: HttpClient) { }
  salesStats(){
    return this._http.get("assets/financialStats.json");
  }
}
