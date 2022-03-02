import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-srcroll-top',
  templateUrl: './srcroll-top.component.html',
  styleUrls: ['./srcroll-top.component.scss']
})
export class SrcrollTopComponent implements OnInit {

  constructor(public scroll: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0,0]);
  }

}
