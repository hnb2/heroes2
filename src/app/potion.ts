import {Item} from './item';

export class Potion extends Item {

  public hpEffect:number;

  constructor(name:string, hpEffect:number) {
    super(name);
    this.hpEffect = hpEffect;
  }

}
