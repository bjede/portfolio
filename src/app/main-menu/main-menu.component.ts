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

  scrollToTop() {
    this.viewPortScroller.scrollToPosition([0,0]);
  }

  addClassByScroll() {
    if(window.scrollY > 150) {
      document.querySelector('.nav')?.classList.add('bg-scroll');
    }else{
      document.querySelector('.nav')?.classList.remove('bg-scroll');
    }
  }

  burgerMenuToggle() {
    document.getElementById('menu-toggle')?.classList.toggle('active');
    document.getElementById('menu-mobile')?.classList.toggle('active');
  }

}
