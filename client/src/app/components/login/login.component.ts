import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  Password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.loginToServer(this.correo, this.Password).subscribe((response: any) => {
      if (response.success) {
        this.authService.setLoggendInStatus(true);
        this.authService.setCurrentUser(response.user); // Cambia a response.user
  
        if (response.user && response.user.IdTipoUsuario !== undefined) {
          const userRole = response.user.IdTipoUsuario;
  
          if (userRole === 1) {
            this.router.navigate(['/admin-component']);
          } else if (userRole === 2) {
            this.router.navigate(['/bibliotecario-component']);
          } else if (userRole === 3) {
            this.router.navigate(['/usuario-normal-component']);
          } else {
            // Maneja otros roles si es necesario
          }
        } else {
          alert('Error en la respuesta del servidor. Por favor, inténtalo de nuevo.');
        }
      } else {
        alert('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      }
    });
  }
}  
