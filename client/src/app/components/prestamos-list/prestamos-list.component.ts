import { Component, OnInit, HostBinding } from '@angular/core';

import { PrestamosService } from '../../services/prestamos.service';
import { Prestamo } from 'src/app/models/Prestamo';

@Component({
  selector: 'app-prestamos-list',
  templateUrl: './prestamos-list.component.html',
  styleUrls: ['./prestamos-list.component.css'],
})
export class PrestamosListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  prestamos: Prestamo[] = [];

  constructor(private prestamoService: PrestamosService) { }

  ngOnInit() {
    this.getPrestamos();
  }

  getPrestamos() {
    this.prestamoService.getPrestamos()
      .subscribe(
        (prestamos: any) => { // Utilizar any en lugar de Prestamo[]
          this.prestamos = prestamos;
        },
        err => console.error(err)
      );
  }

  deletePrestamo(id: number) {
    this.prestamoService.deletePrestamo(id.toString())
      .subscribe(
        res => {
          console.log(res);
          this.getPrestamos();
        },
        err => console.error(err)
      );
  }
}


