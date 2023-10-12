import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/Usuario'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URI = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(`${this.API_URI}/usuarios`); 
  }

  getUsuario(idUsuario: string): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${this.API_URI}/usuarios/${idUsuario}`); 
  }

  deleteUsuario(idUsuario: string): Observable<any> {
    return this.http.delete(`${this.API_URI}/usuarios/${idUsuario}`); 
  }

  saveUsuario(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(`${this.API_URI}/usuarios`, usuario); 
  }

  updateUsuario(idUsuario: string, updatedUsuario: Usuarios): Observable<Usuarios> {
    return this.http.put<Usuarios>(`${this.API_URI}/usuarios/${idUsuario}`, updatedUsuario); 
  }
}

