import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResApp } from '@app/model/ResApp';
import { environment } from 'src/environments/environment.development';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url = environment.url+'/country';
  private headers = environment.headers;

  constructor(private http : HttpClient) { }

  search(name: string){

    return this.http.post<ResApp<Country[]>>(this.url+'/search', {name}, {headers:this.headers});

  }

}