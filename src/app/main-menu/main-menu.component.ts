import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  changeColor = false;

  constructor(public viewPortScroller: ViewportScroller) { }

  @HostListener('window:scroll', ['$event.target'])

  ngOnInit(): void {
    this.addClassByScroll();
  }

  scrollToPosition(id: string){
    this.viewPortScroller.scrollToAnchor(id);
  }

  addClassByScroll() {
    if(window.scrollY > 150) {
      document.querySelector('.nav')?.classList.add('bg-scroll');
    }else{
      document.querySelector('.nav')?.classList.remove('bg-scroll');
    }
  }

}
