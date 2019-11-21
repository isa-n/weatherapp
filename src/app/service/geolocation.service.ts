import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {
  getGeoLocation() {
    if(!navigator.geolocation) {
      alert("Geolocation is not supported by this browser.");
    }
    return new Promise((resolve,reject) => {
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          resolve({     
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        }
      ,reject);
    });
  }
}
