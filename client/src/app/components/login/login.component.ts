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
        this.authService.setCurrentUser(response.usuario);

        // Verifica si response.usuario y response.usuario.IdTipoUsuario están definidos
        if (response.usuario && response.usuario.IdTipoUsuario) {
          const userRole = response.usuario.IdTipoUsuario;

          if (userRole === 1) {
            // Administrador
            this.router.navigate(['/admin-component']);
          } else if (userRole === 2) {
            // Bibliotecario
            this.router.navigate(['/bibliotecario-component']);
          } else if (userRole === 3) {
            // Usuario Normal
            this.router.navigate(['/usuario-normal-component']);
          } else {
            // Maneja otros roles si es necesario
          }
        } else {
          // Maneja el caso en el que la estructura de response.usuario no es la esperada
          alert('Error en la respuesta del servidor. Por favor, inténtalo de nuevo.');
        }
      } else {
        // Aquí puedes mostrar un mensaje de error si el inicio de sesión no es exitoso.
        alert('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      }
    });
  }
}
