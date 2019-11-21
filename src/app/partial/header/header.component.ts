import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title = "WeatherForecast";
  public error_message : string;

  constructor(private msgService: MessageService) { }

  ngOnInit() {

    this.msgService.messageObservable.subscribe((msg) => {
      this.error_message = msg;
    });

    document.getElementById("pagetitle").classList.add(this.getRundomSymbolClass());
  }

  getRundomSymbolClass() : string{
    switch(Math.ceil(3 * Math.random())){
        case 1:return "sunny"; 
        case 2:return "cloudy"; 
        case 3:return "rainy";
    }
  }
}
