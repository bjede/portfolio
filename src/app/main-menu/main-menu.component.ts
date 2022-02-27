import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(public viewPortScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToPosition(id: string){
    this.viewPortScroller.scrollToAnchor(id);
  }

}
