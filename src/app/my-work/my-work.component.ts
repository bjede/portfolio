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
      description: 'A small game programmed in Javascript (OOP).',
      img: 'assets/images/ellpolloloco.jpg',
      link: 'http://aldin-bijedic.developerakademie.net/el_pollo_loco/',
      category: 'javascript'
    }, {
      title: 'Pokedex',
      description: 'The Pokédex is an encyclopedic hi-tech encyclopedia about Pokémon species.',
      img: 'assets/images/pokedex.jpg',
      link: 'http://aldin-bijedic.developerakademie.net/pokeapi/pokedex/',
      category: 'javascript'
    }, {
      title: 'Instagram',
      description: 'Instagram clone.',
      img: 'assets/images/instagram.jpg',
      link: 'http://aldin-bijedic.developerakademie.net/instagram/',
      category: 'javascript'
    }, {
      title: 'Lieferando',
      description: 'Lieferando clone.',
      img: 'assets/images/lieferando.jpg',
      link: 'http://aldin-bijedic.developerakademie.net/lieferando/',
      category: 'javascript'
    }, {
      title: 'Tic tac toe',
      description: 'Tic-tac-toe is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O.',
      img: 'assets/images/tictactoe.jpg',
      link: 'http://aldin-bijedic.developerakademie.net/tictactoe/',
      category: 'javascript'
    }, {
      title: 'Quizapp',
      description: 'A small quiz app. See how many questions you can answer.',
      img: 'assets/images/quizapp.jpg',
      link: 'http://aldin-bijedic.developerakademie.net/Quizapp/',
      category: 'javascript'
    }, {
      title: 'Portfolio',
      description: 'My portfolio page.',
      img: 'assets/images/portfolio.jpg',
      link: 'http://aldin-bijedic.developerakademie.net/portfolio/',
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
