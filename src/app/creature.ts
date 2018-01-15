import {Inventory} from './inventory';
import {Item} from './item';
import {Potion} from './potion';

export class Creature {

  public name:string;
  public hp:number;
  public hpMax:number;
  public mp:number;
  public mpMax:number;
  public atk:number;
  public inventory:Inventory;

  constructor(name:string, hp:number, hpMax:number, atk:number = 0,  mp:number = 0, mpMax:number = 0) {
    this.name = name;
    this.hp = hp;
    this.hpMax = hpMax;
    this.atk = atk;
    this.mp = mp;
    this.mpMax = mpMax;
    this.inventory = new Inventory();
  }

  public takeDamage(damage:number):void {
    console.log(`${this.name} takes ${damage} dmg`);
    this.hp = Math.max(0, this.hp - damage);
  }

  public attack(target:Creature):void {
    console.log(`${this.name} attack ${target.name}`);
    target.hp = Math.max(0, target.hp - this.atk);
  }

  public canSpecialAttack():boolean {
    return this.mp > 0;
  }

  /**
   * For now, the special attack cost 1 MP and does twice the damage
   */
  public specialAttack(target:Creature):void {
    if (! this.canSpecialAttack()) {
      return;
    }

    console.log(`${this.name} special attack ${target.name}`);
    target.hp = Math.max(0, target.hp - this.atk * 2);
    this.mp --;
  }

  public isDead():boolean {
    return this.hp === 0;
  }

  public hpInPercent():string {
    return `${this.hp / this.hpMax * 100}%`;
  }

  public mpInPercent():string {
    return `${this.mp / this.mpMax * 100}%`;
  }

  public addToInventory(item:Item):void {
    this.inventory.add(item);
  }

  public usePotion(potion:Potion):void {
    this.hp = Math.min(this.hpMax, this.hp + potion.hpEffect);
    this.inventory.remove(potion);
  }
}
