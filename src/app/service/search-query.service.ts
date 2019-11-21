import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchQueryService {

  private searchObserver = new Subject<string>();                 //observer
  public searchObservable = this.searchObserver.asObservable();  //observable

  constructor() { }

  public sendSearchQuery(searchQuery: string) {
    this.searchObserver.next(searchQuery);
  }
}
