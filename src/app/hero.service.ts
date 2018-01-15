import {Injectable} from '@angular/core';
import {Creature} from './creature';

@Injectable()
export class HeroService {

  private hero:Creature;

  constructor() {
    this.hero = new Creature('Sir Drinkalot', 20, 20, 2);
  }

  public getHero():Creature {
    return this.hero;
  }

}
