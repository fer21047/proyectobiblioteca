import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'; // Importa AuthService

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedIn: boolean; // Agrega la propiedad isLoggedIn

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isAuthenticated(); // Inicializa isLoggedIn al estado de autenticación
  }

  ngOnInit() {
    console.log('Valor de isLoggedIn:', this.isLoggedIn);
  }
}

