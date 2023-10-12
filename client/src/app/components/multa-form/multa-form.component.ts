import { Component, OnInit, HostBinding } from '@angular/core';
import { Multa } from 'src/app/models/Multa';
import { MultasService } from 'src/app/services/multas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-multa-form',
  templateUrl: './multa-form.component.html',
  styleUrls: ['./multa-form.component.css']
})
export class MultaFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  multa: Multa = {
    IdMulta: 0,
    FechaPag: '',
    Monto: 0,
    Estatus: '',
    IdPrestamo: 0
  };

  edit: boolean = false;

  constructor(private MultasService: MultasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['idMulta']) {
      this.MultasService.getMulta(params['idMulta'])
        .subscribe(
          res => {
            console.log(res);
            this.multa = res as Multa;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewMulta() {
    this.MultasService.saveMulta(this.multa)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/multas']);
        },
        err => console.error(err)
      )
  }

  updateMulta() {
    if (this.multa.IdMulta !== undefined) {
        this.MultasService.updateMulta(this.multa.IdMulta.toString(), this.multa)
            .subscribe(
                res => {
                    console.log(res);
                    this.router.navigate(['/multa']);
                },
                err => console.error(err)
            )
    } else {
        console.error('IdMulta no está definido');
    }
  }

  // Aquí está el método agregado:
  redirectToFormList() {
    this.router.navigate(['/multas']);
}

}
