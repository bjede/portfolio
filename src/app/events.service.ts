import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(public viewPortScroller: ViewportScroller) { }

  scrollToTop(x: number, y: number){
    this.viewPortScroller.scrollToPosition([x,y]);
  }
}
