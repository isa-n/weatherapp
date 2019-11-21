import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location-data',
  templateUrl: './location-data.component.html',
  styleUrls: ['./location-data.component.css']
})
export class LocationDataComponent implements OnInit {

  @Input() now : any;
  @Input() list : any;

  constructor() { }

  ngOnInit() {
  }

}
