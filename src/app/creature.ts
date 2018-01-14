export class Creature {
  public name:string;
  public hp:number;
  public hpMax:number;
  public atk:number;

  constructor(name:string, hp:number, hpMax:number, atk:number = 0) {
    this.name = name;
    this.hp = hp;
    this.hpMax = hpMax;
    this.atk = atk;
  }

  public takeDamage(damage:number):void {
    console.log(`${this.name} takes ${damage} dmg`);
    this.hp = Math.max(0, this.hp - damage);
  }

  public attack(target:Creature):void {
    console.log(`${this.name} attack ${target.name}`);
    target.hp = Math.max(0, target.hp - this.atk);
  }

  public isDead():boolean {
    return this.hp === 0;
  }

  public hpInPercent():string {
    return `${this.hp / this.hpMax * 100}%`;
  }
}
