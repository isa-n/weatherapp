import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';

import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { ThreeHoursWeatherService } from './service/three-hours-weather.service';
import { NowWeatherService } from './service/now-weather.service';
import { GeoLocationService } from './service/geolocation.service';
import { HeaderComponent } from './partial/header/header.component';
import { SearchComponent } from './partial/search/search.component';
import { LocationDataComponent } from './weather-forecast/location-data/location-data.component';



@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    HeaderComponent,
    SearchComponent,
    LocationDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ThreeHoursWeatherService, NowWeatherService , GeoLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
