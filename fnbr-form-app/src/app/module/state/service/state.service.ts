import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResApp } from '@app/model/ResApp';
import { environment } from 'src/environments/environment.development';
import { State } from '../model/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private url = environment.url+'/state';
  private headers = environment.headers;

  constructor(private http : HttpClient) { }

  findByCountry(id:number){

    return this.http.post<ResApp<State[]>>(this.url+'/findByCountry', {id}, {headers:this.headers});

  }


}
