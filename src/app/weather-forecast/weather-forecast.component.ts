import { Component } from '@angular/core';
import { ThreeHoursWeatherService } from '../service/three-hours-weather.service';
import { NowWeatherService } from '../service/now-weather.service';
import { SearchQueryService } from '../service/search-query.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent {

  public nowWeather: any = [];
  public tHoursForecast: any = [];
  
  public active :number = 0;

  

  constructor(
    private queryService :SearchQueryService,
    private thService :ThreeHoursWeatherService,
    private nowService :NowWeatherService,
    private msgService :MessageService
    ) {
  }

  ngOnInit(){

    this.queryService.searchObservable.subscribe((url) => {
      this.getNowWeather(url);
      this.getThreeHoursForecast(url);
    }
    ,(err) =>{
      
    }
    ,() =>{
      
    });

  }

  private getNowWeather(url : string){
    this.nowService.getNowData(url).subscribe((res)=>{
      this.nowWeather.push({
        location: res.name,
        country: res.sys.country,
        nowtime: new Date(1000 * (res.dt)),
        weather: res.weather[0].main,
        description: res.weather[0].description,
        icon: "http://openweathermap.org/img/wn/" +  res.weather[0].icon + "@2x.png",
        humidity: res.main.humidity,
        pressure: res.main.pressure,
        temp_max: res.main.temp_max,
        temp_min: res.main.temp_min,
        wind_speed:res.wind.speed
      });
    },
    (err) =>{
      this.msgService.sendMsg("入力された都市名での取得に失敗しました。");
      console.log(err);
    },
    () => {
      this.msgService.clearMsg();
      this.active = this.nowWeather.length - 1;
    });
  }

  private getThreeHoursForecast(url : string){
    this.thService.getThreeHoursData(url).subscribe((res)=>{
      let list = [];
      for(var i = 0; i < 5 ; i++ ){
        list.push({
          datetime: new Date(1000 * (res.list[i].dt)),
          description: res.list[i].weather[0].description,
          icon: "http://openweathermap.org/img/wn/"+ res.list[i].weather[0].icon + "@2x.png",
          humidity: res.list[i].main.humidity,
          pressure: res.list[i].main.pressure,
          temp_max: res.list[i].main.temp_max,
          temp_min: res.list[i].main.temp_min,
        });
      };
      this.tHoursForecast.push(list);
    },
    (err) =>{
      this.msgService.sendMsg("入力された都市名での取得に失敗しました。");
      console.log(err);
    },
    () => {
      this.msgService.clearMsg();
      this.active = this.tHoursForecast.length - 1;
    });
  }



  public chooseTab(i:any){
    const index = this.nowWeather.indexOf(i);
    this.active = index;
  }

  public deleteTab(i:any){
    const index = this.nowWeather.indexOf(i);
    if(index <= this.active && this.active != 0) this.active = this.active - 1;
    this.nowWeather.splice(index,1);
    this.tHoursForecast.splice(index,1);
  }


}
