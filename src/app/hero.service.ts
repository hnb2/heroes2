import {Injectable} from '@angular/core';
import {Creature} from './creature';

@Injectable()
export class HeroService {

  private hero:Creature;

  constructor() {
    this.hero = new Creature('', 20, 20, 2, 10, 10);
  }

  public getHero():Creature {
    return this.hero;
  }

  /**
   * TODO: rework this
   */
  public resetHero():void {
    this.hero.hp = 20;
    this.hero.hpMax = 20;
    this.hero.atk = 2;
    this.hero.mp = 10;
    this.hero.mpMax = 10;
    this.hero.inventory.clear();
    this.hero.weapon = null;
  }

}
