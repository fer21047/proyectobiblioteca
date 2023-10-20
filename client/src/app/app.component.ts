import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service'; // Asegúrate de reemplazar 'path-to-auth-service' con la ruta real a tu servicio de autenticación

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  isLoggedIn = false;
  userRole: number | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
    if (this.isLoggedIn) {
      this.userRole = this.authService.getUserType();

    }
  }
}
