import { Injectable } from '@angular/core';
import {Hero} from './hero'
import {HEROS} from "../app/mock-heros"

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heros: Hero[]
  constructor() { }

  getHeros(): Hero[]{
    return HEROS;
  }
}
