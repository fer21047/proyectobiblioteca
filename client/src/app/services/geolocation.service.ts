
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  private baseUrl = 'http://www.mapquestapi.com/directions/v2/route';
  private consumerKey = '156tHMZ5qRDawtbXsG846rfkZABsnaJI';

  constructor(private http: HttpClient) { }

  getRoute(): Observable<any> {
    // Obtener la ubicación actual del usuario.
    return new Observable(observer => {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        
        // Define un destino fijo 
        const toLat = 21.16736; 
        const toLng = -100.93033; 

        const url = `${this.baseUrl}?key=${this.consumerKey}&from=${lat},${lng}&to=${toLat},${toLng}`;

      
        this.http.get(url).subscribe(response => {
          console.log(response);
          observer.next(response);
          observer.complete();
        }, error => {
          observer.error(error);
        });
      });
    });
  }
}
