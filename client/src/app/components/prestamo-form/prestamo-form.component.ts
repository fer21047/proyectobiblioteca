import { Component, OnInit, HostBinding } from '@angular/core';
import { Prestamo } from 'src/app/models/Prestamo';

import { PrestamosService } from 'src/app/services/prestamos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prestamo-form',
  templateUrl: './prestamo-form.component.html',
  styleUrls: ['./prestamo-form.component.css']
})
export class PrestamoFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  prestamo: Prestamo = {
    FechaPres: '',
    FechaDev: '',
    IdUsuario: 0,
    id: 0
  };

  usuarios: any[] = [];
  libros: any[] = [];
  edit: boolean = false;

  constructor(private prestamoService: PrestamosService, private router: Router, private activatedRoute: ActivatedRoute) {
  }
  
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.prestamoService.getPrestamo(params['id'])
        .subscribe(
          (res: Prestamo) => {
            console.log(res);
            this.prestamo = res;
            this.edit = true;
          },
          err => console.log(err)
        );
    }

    this.prestamoService.getUsuarios().subscribe(
      usuarios => {
        this.usuarios = usuarios;
      },
      err => console.error(err)
    );

    this.prestamoService.getLibros().subscribe(
      libros => {
        this.libros = libros;
      },
      err => console.error(err)
    );
  }

  saveNewPrestamo() {
    delete this.prestamo.IdPrestamo;
  
    this.prestamoService.savePrestamo(this.prestamo)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/prestamos']);
        },
        err => console.error(err)
      );
  }
  
  updatePrestamo() {
    if (this.edit && this.prestamo.IdPrestamo !== undefined) {
      this.prestamoService.updatePrestamo(this.prestamo.IdPrestamo, this.prestamo)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/prestamos']);
          },
          err => console.error(err)
        );
    } else if (!this.edit) {
      this.saveNewPrestamo();
    }
  }
  
}
