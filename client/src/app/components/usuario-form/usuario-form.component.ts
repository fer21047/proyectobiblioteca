import { Component, OnInit, HostBinding } from '@angular/core';
import { Usuarios } from 'src/app/models/Usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  usuario: Usuarios = {
    IdUsuario: 0,
    Nombre: '',
    Correo: '',
    FechaNac: '',
    Direccion: '',
    Telefono: '',
    Password: '',
    IdTipoUsuario: null // Asume que 'normal' se traduce a algún ID específico en la tabla TipoUsuario.
};


  confirmPassword: string = ''; // Añadir propiedad para confirmar contraseña

  edit: boolean = false;

  constructor(private UsuarioService: UsuariosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['idUsuarios']) {
      this.UsuarioService.getUsuario(params['idUsuarios'])
        .subscribe(
          res => {
            console.log(res);
            this.usuario = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewUser() {
    this.UsuarioService.saveUsuario(this.usuario)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/usuarios']);
        },
        err => console.error(err)
      )
  }

  updateUser() {
    if (this.usuario.IdUsuario) {
      this.UsuarioService.updateUsuario(this.usuario.IdUsuario.toString(), this.usuario)
        .subscribe(
          res => { 
            console.log(res);
            this.router.navigate(['/usuarios']);
          },
          err => console.error(err)
        );
    } else {
      console.error('IdUsuario es undefined.');
    }
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if(this.edit) {
      this.updateUser();
    } else {
      this.saveNewUser();
    }
  }
}
