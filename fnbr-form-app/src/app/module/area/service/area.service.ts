import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResApp } from '@app/model/ResApp';
import { environment } from 'src/environments/environment.development';
import { Area } from '../model/area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private url = environment.url + '/area';
  private headers = environment.headers;


  constructor(private http: HttpClient) { };

  getAreas() {

    return this.http.get<ResApp<Area[]>>(this.url);

  }

  search(name: string) {

    return this.http.post<ResApp<Area[]>>(`${this.url}/search`, { name }, {
      headers: this.headers
    });

  }

}
