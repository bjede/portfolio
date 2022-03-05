import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-srcroll-top',
  templateUrl: './srcroll-top.component.html',
  styleUrls: ['./srcroll-top.component.scss']
})
export class SrcrollTopComponent implements OnInit {

  scrollToTopAnimation: boolean = false;

  constructor(public scroll: ViewportScroller) { }
  
  ngOnInit(): void {
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0,0]);
  }

  @HostListener('window:scroll', ['$event']) 
    checkIsScrollBottom(event: Window) {
      const bodyHeight = document.body.scrollHeight;
      const scrollDown = window.scrollY +  window.innerHeight;
      (scrollDown == bodyHeight ) ? this.scrollToTopAnimation = true : this.scrollToTopAnimation = false;
    }

}
