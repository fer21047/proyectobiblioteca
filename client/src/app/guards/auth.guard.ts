import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Asegúrate de importar tu servicio de autenticación real

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
      const userType = this.authService.getUserType(); // Asume que el servicio de autenticación retorna el tipo de usuario (1, 2, o 3)

      const expectedRoles = route.data['roles'];

      // Si el tipo de usuario está entre los roles esperados, permitir el acceso
      if (expectedRoles.includes(userType)) {
        return true;
      }

      // Si no tiene el rol necesario, redirigir a una página de error o inicio
      this.router.navigate(['/some-error-page']); // Reemplaza '/some-error-page' por la ruta de tu página de error o inicio
      return false;
  }
}
