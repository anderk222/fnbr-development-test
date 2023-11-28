import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResApp } from '@app/model/ResApp';
import { environment } from 'src/environments/environment.development';
import { City } from '../model/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private url = environment.url+'/city';
  private headers = environment.headers;

  constructor(private http : HttpClient) { }

  findByCountry(id:number){

    return this.http.post<ResApp<City[]>>(this.url+'/findByState', {id}, {headers:this.headers});

  }
}