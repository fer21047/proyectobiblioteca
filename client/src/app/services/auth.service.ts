import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/Usuario';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private currentUser: Usuarios | null = null;
  
  constructor(private http: HttpClient) {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        this.currentUser = JSON.parse(storedUser);
      } catch (error) {
        console.error('Error al analizar JSON:', error);
        
        localStorage.removeItem('currentUser'); 
      }
    }
  }
  loginToServer(correo: string, Password: string) {
    return this.http.post<Usuarios>('http://localhost:3000/api/auth', { correo, Password }).pipe(
      tap((usuario: Usuarios) => {
        if (usuario && usuario.IdTipoUsuario !== undefined) {
          this.setLoggendInStatus(true);
          this.setCurrentUser(usuario);
        }
      })
    );
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  setLoggendInStatus(status: boolean) {
    this.isLoggedIn = status;
    localStorage.setItem('isLoggedIn', status.toString());
  }

  logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
  }

  setCurrentUser(usuario: Usuarios) {
    this.currentUser = usuario;
    localStorage.setItem('currentUser', JSON.stringify(usuario));
  }

  getCurrentUser(): Usuarios | null {
    return this.currentUser;
  }

  getUserType(): number | null {
    if (this.currentUser) {
      return this.currentUser.IdTipoUsuario;
    }
    return null;
  }
}
