import { Component, OnInit, HostBinding } from '@angular/core';
import { Multa } from 'src/app/models/Multa'; // Make sure you have the appropriate model imported
import { MultasService } from '../../services/multas.service'; // Make sure you have the appropriate service imported

@Component({
  selector: 'app-multa-list',
  templateUrl: './multa-list.component.html',
  styleUrls: ['./multa-list.component.css'],
})
export class MultaListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  multas: Multa[] = []; // Make sure to use the appropriate variable name

  constructor(private MultasService: MultasService) { }

  ngOnInit() {
    this.getMultas();
  }

  getMultas() {
    this.MultasService.getMultas() // Make sure to use the appropriate service method
      .subscribe(
        res => {
          this.multas = res;
        },
        err => console.error(err)
      );
  }

  deleteMulta(idMulta: string) {
    this.MultasService.deleteMulta(idMulta) // Make sure to use the appropriate service method
      .subscribe(
        res => {
          console.log(res);
          this.getMultas();
        },
        err => console.error(err)
      );
  }

  updateMulta(multa: Multa) {
    if (multa.IdMulta !== undefined) {
        this.MultasService.updateMulta(multa.IdMulta.toString(), multa)
            .subscribe(
                res => {
                    console.log(res);
                    this.getMultas();
                },
                err => console.error(err)
            );
    } else {
        console.error('IdMulta no está definido');
    }
}

  
  saveMulta(newMulta: Multa) {
    this.MultasService.saveMulta(newMulta) // Make sure to use the appropriate service method
      .subscribe(
        res => {
          console.log(res);
          this.getMultas();
        },
        err => console.error(err)
      );
  }
}