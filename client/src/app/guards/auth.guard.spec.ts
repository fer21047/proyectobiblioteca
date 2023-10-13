import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // Suponiendo que tienes un servicio de autenticación donde almacenas la información del usuario logueado
  // constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      // Supongamos que tu servicio de autenticación tiene un método que retorna el tipo de usuario
       const IdTipoUsuario = this.authService.IdTipoUsuario();

      // Por ahora, para el ejemplo, lo haré estático:
      const userType = 1; // Puedes cambiar este valor para probar

      const expectedRoles = route.data.roles;

      // Si el tipo de usuario está entre los roles esperados, permitir el acceso
      if (expectedRoles.includes(userType)) {
        return true;
      }

      // Si no tiene el rol necesario, redirigir a una página de error o inicio
      // this.router.navigate(['/some-error-page']);
      return false;
  }
}

