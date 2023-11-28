import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResApp } from '@app/model/ResApp';
import { environment } from 'src/environments/environment.development';
import { Program } from '../model/program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private url = environment.url+'/area-program'
  private headers = environment.headers;

  constructor(private http: HttpClient) { }


  findByArea(id: number){

    return this.http.post<ResApp<Program[]>>(this.url+'/findByArea', { id }, 
    {headers: this.headers});

  }

}
