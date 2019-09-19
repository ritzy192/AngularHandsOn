import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroServide: HeroService) { }

  // hero: Hero = {
  //   id: 1,
  //   name: "Aman"
  // }
  heros: Hero[];
  selectedHero: Hero;

  ngOnInit() {
    this.getHeros();
  }

  getHeros(){
    this.heros= this.heroServide.getHeros();
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

}
