import { Component, OnInit, HostBinding } from '@angular/core';
import { Usuarios } from 'src/app/models/Usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
})
export class UsuarioListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  usuarios: Usuarios[] = [];

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.getUsuarios()
      .subscribe(
        res => {
          this.usuarios = res;
        },
        err => console.error(err)
      );
  }

  deleteUsuario(idUsuario: number) { // Asumo que IdUsuario es de tipo number
    this.usuarioService.deleteUsuario(idUsuario.toString()) // Convertir a string aquí
      .subscribe(
        res => {
          console.log(res);
          this.getUsuarios();
        },
        err => console.error(err)
      );
  }

  updateUsuario(usuario: Usuarios) {
    if (usuario.IdUsuario !== undefined) { // Verifica que no sea undefined
      this.usuarioService.updateUsuario(usuario.IdUsuario.toString(), usuario)
        .subscribe(
          res => {
            console.log(res);
            this.getUsuarios();
          },
          err => console.error(err)
        );
    } else {
      console.error('IdUsuario es undefined.');
    }
  }

  saveUsuario(nuevoUsuario: Usuarios) {
    this.usuarioService.saveUsuario(nuevoUsuario)
      .subscribe(
        res => {
          console.log(res);
          this.getUsuarios();
        },
        err => console.error(err)
      );
  }
}
