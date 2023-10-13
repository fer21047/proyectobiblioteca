import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, AfterViewInit {

  route: any;
  private map: L.Map | undefined;

  constructor(private geolocationService: GeolocationService) { }

  ngOnInit(): void {
    this.getRouteToDestination();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
        this.initMap();
    }, 0);
  }

  private initMap(): void {
    this.map = L.map('map').setView([0, 0], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    }).addTo(this.map!);

    // Añadir señal para la ubicación del usuario
    navigator.geolocation.getCurrentPosition((position) => {
      L.marker([position.coords.latitude, position.coords.longitude]).addTo(this.map!).bindPopup('Tu ubicación').openPopup();
    });

    // Añadir señal para una ubicación fija (ajustar estas coordenadas a tus necesidades)
    const fixedLocation: L.LatLngTuple = [21.16736, -100.93033];
    L.marker(fixedLocation).addTo(this.map!).bindPopup('Ubicación fija').openPopup();
  }

  private showRoute(): void {
    if (this.route && this.route.route && this.route.route.legs) {
      this.route.route.legs.forEach((leg: any) => {
        const latlngs = leg.maneuvers.map((maneuver: any) => [maneuver.startPoint.lat, maneuver.startPoint.lng]);
        L.polyline(latlngs, { color: 'blue' }).addTo(this.map!);
      });
    }
  }

  getRouteToDestination(): void {
    this.geolocationService.getRoute().subscribe(route => {
      this.route = route;
      this.showRoute();
    });
  }
}

