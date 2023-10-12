import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestamo } from 'src/app/models/Prestamo';
import { PrestamosService } from 'src/app/services/prestamos.service';

@Component({
  selector: 'app-prestamo-edit',
  templateUrl: './prestamo-edit.component.html',
  styleUrls: ['./prestamo-edit.component.css']
})
export class PrestamoEditComponent implements OnInit {

  prestamo: Prestamo = {
    FechaPres: '',
    FechaDev: '',
    IdUsuario: 0,
    id: 0
  };

  constructor(
    private prestamoService: PrestamosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.prestamoService.getPrestamo(id)
        .subscribe(
          (res: Prestamo) => {
            this.prestamo = res;
          },
          err => console.error(err)
        );
    }
  }
  

  updatePrestamo() {
    if (this.prestamo.IdPrestamo !== undefined) {
      this.prestamoService.updatePrestamo(this.prestamo.IdPrestamo, this.prestamo)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/prestamos']);
          },
          err => console.error(err)
        );
    } else {
      console.error("IdPrestamo is undefined");
    }
  }
}
