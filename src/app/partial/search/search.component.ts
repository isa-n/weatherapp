import { Component, OnInit, Input } from '@angular/core';
import { GeoLocationService } from '../../service/geolocation.service';
import { SearchQueryService } from '../../service/search-query.service';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() name : string;


  private lat :number;
  private lng :number;

  public inputlocation = "";

  constructor(private queryService:SearchQueryService,
    private geoLocationService: GeoLocationService,
    private msgService: MessageService) { }

  ngOnInit() {
    this.geoLocationService.getGeoLocation().then((res)=> {
      this.lat = res['lat'];
      this.lng = res['lng'];
      this.getData();
    })
    .catch(() =>{
      this.msgService.sendMsg("現在地情報を取得できませんでした。");
    });
  }

  getData(){
    let url : string;

    if(this.inputlocation === ""){
      url = "&lat=" + this.lat + "&lon=" + this.lng ;
    }else{
      url = "&q=" + this.inputlocation ;
    }

    this.queryService.sendSearchQuery(url);
    this.inputlocation="";

  } 

}
