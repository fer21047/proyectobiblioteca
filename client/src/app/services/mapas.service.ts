import { Component, AfterViewInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements AfterViewInit {

  ngAfterViewInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.mostrarMapa(position.coords.latitude, position.coords.longitude);
      });
    } else {
      alert("La geolocalización no es soportada por este navegador.");
    }
  }

  mostrarMapa(lat: number, lng: number) {
    const coord = { lat: lat, lng: lng };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: coord
    });
    const marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  }
}


