import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-navigation-u',
  templateUrl: './navigation-u.component.html',
  styleUrls: ['./navigation-u.component.css']
})
export class NavigationUComponent {
  isLoggedIn: boolean = true;
  
  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isAuthenticated(); // Inicializa isLoggedIn al estado de autenticación
  }

  ngOnInit() {
    console.log('Valor de isLoggedIn:', this.isLoggedIn);
  }
}