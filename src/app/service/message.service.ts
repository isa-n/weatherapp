import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageObserver = new Subject<string>();                 //observer
  public messageObservable = this.messageObserver.asObservable();  //observable

  constructor() { }

  public sendMsg(msg: string) {
    this.messageObserver.next(msg);
  }

  public clearMsg(){
    this.messageObserver.next("");
  }

}