import { Routes } from '@angular/router';

import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';


export const appRoutes: Routes = [
  { path: '', component: WeatherForecastComponent }             
  //{ path: '', redirectTo: <<path>> , pathMatch: 'full' },
  //{ path: '**', component: <<notfound>> }
];

