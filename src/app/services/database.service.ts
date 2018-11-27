import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private _dbUrl = "https://swapi.co/api"

  constructor(private _http: HttpClient) { }

  getPeople(searchTerm: string) : Observable<any> {
    console.log(`${this._dbUrl}/people/?format=json&search=${searchTerm}`)
    return this._http.get<any>(`${this._dbUrl}/people/?format=json&search=${searchTerm}`)
  }

  getStarShips(searchTerm: string) : Observable<any> {
    return this._http.get<any>(`${this._dbUrl}/starships/?format=json&search=${searchTerm}`)
  }

  getFilms(searchTerm: string) : Observable<any> {
    return this._http.get<any>(`${this._dbUrl}/films/?format=json&search=${searchTerm}`)
  }
}
