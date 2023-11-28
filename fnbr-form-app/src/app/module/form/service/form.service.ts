import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResApp } from '@app/model/ResApp';
import { environment } from 'src/environments/environment.development';
import { Form, FormSave } from '../model/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private url = environment.url+'/form';
  private headers = environment.headers;

  constructor(private http : HttpClient) { }

  save(form : Partial<FormSave>){

    return this.http.post<ResApp<Form>>(this.url, form, {headers: this.headers})
    
  }
}
