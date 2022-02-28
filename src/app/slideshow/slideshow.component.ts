import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['bg1', 'bg2', 'bg3', 'bg4'];
  currentImage = 0;

  constructor() { }

  ngOnInit(): void {
    this.slideShow();
  }

  slideShow() {
    setInterval(()=> {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
    }, 4000);
  }

}
