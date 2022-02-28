import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  currentProjects: any[] = [];

  projects = [
    {
      title: 'El pollo loco',
      description: 'Some quick example text to build on the card title and make up the bulk of the card',
      img: '/assets/images/ellpolloloco.jpg',
      link: 'http://aldin-bijedic.developerakademie.net/el_pollo_loco/',
      category: 'javascript'
    }, {
      title: 'Pokedex',
      description: 'Some quick example text to build on the card title and make up the bulk of the card',
      img: '/assets/images/pokedex.jpg',
      link: 'http://aldin-bijedic.developerakademie.net/pokeapi/pokedex/',
      category: 'javascript'
    }, {
      title: 'Instagram',
      description: 'Some quick example text to build on the card title and make up the bulk of the card',
      img: '/assets/images/instagram.jpg',
      link: 'http://aldin-bijedic.developerakademie.net/instagram/',
      category: 'javascript'
    }, {
      title: 'Lieferando',
      description: 'Some quick example text to build on the card title and make up the bulk of the card',
      img: '/assets/images/lieferando.jpg',
      link: 'http://aldin-bijedic.developerakademie.net/lieferando/',
      category: 'javascript'
    }, {
      title: 'Tic tac toe',
      description: 'Some quick example text to build on the card title and make up the bulk of the card',
      img: '/assets/images/tictactoe.jpg',
      link: 'http://aldin-bijedic.developerakademie.net/tictactoe/',
      category: 'angular'
    }, {
      title: 'Quizapp',
      description: 'Some quick example text to build on the card title and make up the bulk of the card',
      img: '/assets/images/quizapp.jpg',
      link: 'http://aldin-bijedic.developerakademie.net/Quizapp/',
      category: 'angular'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.showAllProjects();
  }

  showCurrentProjects(category: string): void {
    this.currentProjects = this.projects.filter(project => project.category == category);
  }

  showAllProjects() {
    this.currentProjects = [];
    this.projects.forEach((project) => {
      this.currentProjects.push(project);
    });
  }

}
