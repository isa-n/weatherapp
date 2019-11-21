import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThreeHoursData } from './res-weather-data';
import { environment } from '../.././environments/environment'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThreeHoursWeatherService {

  constructor(private http: HttpClient) { }

  public getThreeHoursData(url : string): Observable<ThreeHoursData>{
    const THREE_HOURS_URL = "https://api.openweathermap.org/data/2.5/forecast?units=metric";
    const threeHoursReqUrl = THREE_HOURS_URL + url + "&appid=" + environment.API_KEY;
    return  this.http.get<ThreeHoursData>(threeHoursReqUrl);
  }
}
