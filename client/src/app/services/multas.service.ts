import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Multa } from '../models/Multa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getMultas(): Observable<Multa[]> {
    return this.http.get<Multa[]>(`${this.API_URI}/multas`);
  }

  getMulta(idMulta: string): Observable<Multa> {
    return this.http.get<Multa>(`${this.API_URI}/multas/${idMulta}`);
  }

  deleteMulta(idMulta: string): Observable<any> {
    return this.http.delete(`${this.API_URI}/multas/${idMulta}`);
  }

  saveMulta(multa: Multa): Observable<Multa> {
    return this.http.post<Multa>(`${this.API_URI}/multas`, multa);
  }

  updateMulta(idMulta: string, updatedMulta: Multa): Observable<Multa> {
    return this.http.put<Multa>(`${this.API_URI}/multas/${idMulta}`, updatedMulta);
  }
}

