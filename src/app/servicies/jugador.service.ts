import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from '../Models/Jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  resourceUrl:string;
  constructor(private httpClient:HttpClient) { 
    this.resourceUrl="https://pedidosbackend.azurewebsites.net/api/JUGADOR1/";
  }

  getJugadorxEquipo(idEquipo:number|undefined):Observable<Jugador[]>{
    return this.httpClient.get<Jugador[]>(this.resourceUrl+idEquipo);
  }

}
