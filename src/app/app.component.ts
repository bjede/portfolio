import { Component, OnInit } from '@angular/core';
import 'aos/dist/aos.css';
import * as Aos from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'portfolio';

  constructor(public router: Router) { }
  
  ngOnInit(): void {
    Aos.init();
  }
}
