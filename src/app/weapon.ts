import {Item} from './item';

export class Weapon extends Item {

  public atkModifier:number;

  constructor(name:string, atkModifier:number) {
    super(name);
    this.atkModifier = atkModifier;
  }

}
