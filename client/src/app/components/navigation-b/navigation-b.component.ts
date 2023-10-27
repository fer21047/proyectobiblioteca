import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation-b',
  templateUrl: './navigation-b.component.html',
  styleUrls: ['./navigation-b.component.css']
})
export class NavigationBComponent implements OnInit{
  isLoggedIn: boolean; // Agrega la propiedad isLoggedIn

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isAuthenticated(); // Inicializa isLoggedIn al estado de autenticación
  }

  ngOnInit() {
    console.log('Valor de isLoggedIn:', this.isLoggedIn);
  }
}
