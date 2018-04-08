import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IUser } from './userinterface';
import { IPlanet } from './planetinterface';
@Injectable()
export class SWService {

  url1 = 'https://swapi.co/api/people/?search=';
url2 = 'https://swapi.co/api/planets/?search=';
  constructor(private http: HttpClient) { }

  checkUser(name:any) : Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url1+name)
               .map(data => {
                  return data['results'];
               });
  }
  getplanets(name:any) : Observable<IPlanet[]> {
    return this.http.get<IPlanet[]>(this.url2+name)
               .map(data => {
                  return data['results'];
               });
  }

}