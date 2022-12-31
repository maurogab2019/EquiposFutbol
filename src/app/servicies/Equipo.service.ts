import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from '../Models/Equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  resourceUrl:string;
  constructor(private http:HttpClient) { 
    this.resourceUrl="https://pedidosbackend.azurewebsites.net/api/EQUIPO/";
  }

  getEquipos():Observable<Equipo[]>{
      return this.http.get<Equipo[]>(this.resourceUrl);
  }
}
