import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; 
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', // <app-heroes></app-heroes>
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = HEROES; 

  // the question mark says that this property
  // may have a value someday, but not right away
  selectedHero?: Hero;

  constructor(/* dependency injection happens here! */) { }

  ngOnInit(): void {
    console.log('Hello, we are initd');
  }

  doSomethingCrazy() {
    console.log('Something crazy');
  }

  selectChampion(hero: Hero) {
    this.selectedHero = hero;
  }

  changeHeroToThor() {
    this.selectedHero = {
      id: 2000000,
      name: 'Thor',
      alias: 'Thor Odenson'
    };
  }

}
