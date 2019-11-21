import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NowData } from './res-weather-data';
import { environment } from '../.././environments/environment'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NowWeatherService {

  constructor(private http: HttpClient) { }

  public getNowData(url : string): Observable<NowData>{
    const NOW_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
    const NowReqUrl = NOW_URL + url + "&appid=" + environment.API_KEY;
    return this.http.get<NowData>(NowReqUrl);
  }
}
