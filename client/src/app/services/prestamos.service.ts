import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prestamo } from '../models/Prestamo';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPrestamos() {
    return this.http.get(`${this.API_URI}/prestamos`);
  }

  getPrestamo(id: string) {
    return this.http.get(`${this.API_URI}/prestamos/${id}`);
  }

  deletePrestamo(id: string) {
    return this.http.delete(`${this.API_URI}/prestamos/${id}`);
  }

  savePrestamo(prestamo: Prestamo) {
    return this.http.post(`${this.API_URI}/prestamos`, prestamo);
  }

  updatePrestamo(id: string|number, updatedPrestamo: Prestamo): Observable<Prestamo> {
    return this.http.put(`${this.API_URI}/prestamos/${id}`, updatedPrestamo);
  }

  // Obtención real de usuarios desde el servidor
  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URI}/usuarios`);
  }

  // Obtención real de libros desde el servidor
  getLibros(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URI}/books`);
  }
}
