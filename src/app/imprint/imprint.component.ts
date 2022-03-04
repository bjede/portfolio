import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {

  constructor(public viewPortScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.viewPortScroller.scrollToPosition([0,0]);
  }

}
