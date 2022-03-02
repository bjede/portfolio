import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
// @ts-ignore
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['bg1', 'bg2', 'bg3', 'bg4'];
  currentImage = 0;

  constructor(public scroll: EventsService) { }

  ngOnInit(): void {
    this.slideShow();

    const target1 = document.querySelector('.tw1');
    const target2 = document.querySelector('.tw2')

    const writer1 = new Typewriter(target1, {
      loop: false,
      typeSpeed: 60,
      typeColor: 'white',
      cursorColor: 'white'
    })

    const writer2 = new Typewriter(target2, {
      loop: false,
      typeSpeed: 60,
      typeColor: 'white',
      cursorColor: 'white'
    })

    writer1
      .rest(1500)
      .type('i\'am a frontend ')
      .removeCursor()
      .then(writer2.start.bind(writer2))
      .start()

    writer2
      .changeTypeColor('var(--c-primary)')
      .type("developer.")
      .rest(2000)
      .removeCursor()
  }

  slideShow() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
    }, 7000);
  }

  scrollToPosition(id: string){
    this.scroll.scrollToPosition(id);
  }

}
