import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  // hero: Hero = {
  //   id: 1,
  //   name: "Aman"
  // }

  heros = HEROS; 
  selectedHero: Hero;

  ngOnInit() {
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

}
