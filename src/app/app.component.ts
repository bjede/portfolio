import { Component, OnInit } from '@angular/core';
import 'aos/dist/aos.css';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'portfolio';

  ngOnInit(): void {
    Aos.init();
  }
}
