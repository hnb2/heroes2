import {Item} from './item';

export enum PotionType {
  Health = 'Health',
  Mana = 'Mana'
}

export class Potion extends Item {

  public effect:number;
  public type:PotionType;

  constructor(name:string, effect:number, type:PotionType) {
    super(name);
    this.effect = effect;
    this.type = type;
  }

}
