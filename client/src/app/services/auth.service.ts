import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private currentUser: Usuarios| null = null;
  
  constructor(private http: HttpClient){}

  loginToServer(correo: string, password1: string) {
    // Aquí realizas una solicitud HTTP al backend
    return this.http.post('http://localhost:3000/api/login', { correo, password1 });
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  setLoggendInStatus(status: boolean){
    this.isLoggedIn = status;
  }

  logout(){
    this.isLoggedIn = false;
  }

  setCurrentUser(usuario: Usuarios) {
    this.currentUser = usuario;
  }

  getCurrentUser(): Usuarios | null {
    return this.currentUser;
  }

  // Aquí es donde debes agregar el nuevo método:
  getUserType(): number | null {
    if (this.currentUser) {
      return this.currentUser.IdTipoUsuario;
    }
    return null; // Si no hay un usuario actual, retornamos null
  }
}
