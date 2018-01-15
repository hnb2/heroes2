import {Component, OnInit} from '@angular/core';
import {Creature} from '../creature';
import {HeroService} from '../hero.service';
import {DataService, Action, Adventure, World} from '../data.service';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {

  public currentAdventure:Adventure;
  public currentWorld:World;

  private worlds:World[];
  private currentAdventureIndex:number = 0;
  private currentWorldIndex:number = 0;

  constructor(private heroService:HeroService,
              private dataService:DataService) {
  }

  public ngOnInit():void {
    this.worlds = this.dataService.getWorlds();
    this.currentWorld = this.worlds[0];
    this.currentAdventure = this.currentWorld.adventures[0];
  }

  public act(action:Action, adventure:Adventure):void {
    switch (action) {
      case Action.Attack:
        this.heroService.getHero().attack(adventure.creature);
        if (! adventure.creature.isDead()) {
          adventure.creature.attack(this.heroService.getHero());
        }
        break;
      case Action.SpecialAttack:
        this.heroService.getHero().specialAttack(adventure.creature);
        if (! adventure.creature.isDead()) {
          adventure.creature.attack(this.heroService.getHero());
        }
        break;
      case Action.Next:
        if (this.currentAdventureIndex < this.currentWorld.adventures.length - 1) {
          this.currentAdventureIndex ++;
          this.currentAdventure = this.currentWorld.adventures[this.currentAdventureIndex];
        } else {
          this.currentAdventureIndex ++;
          this.currentWorldIndex ++;
          this.currentWorld = this.worlds[this.currentWorldIndex];
          this.currentAdventureIndex = 0;
          this.currentAdventure = this.currentWorld.adventures[0];
        }
        break;
      case Action.Take:
        this.heroService.getHero().addToInventory(adventure.item);
        adventure.item = undefined;
        break;
      default:
        console.log('Is broken sir');
    }
  }

  public canAttack():boolean {
    return this.currentAdventure.creature &&
      ! this.currentAdventure.creature.isDead();
  }

  public canSpecialAttack():boolean {
    return this.currentAdventure.creature &&
      ! this.currentAdventure.creature.isDead() &&
      this.heroService.getHero().canSpecialAttack();
  }

  public canNext():boolean {
    const canGoNext:boolean = ! this.currentAdventure.creature ||
      this.currentAdventure.creature.isDead();

    const hasNextLevel:boolean = this.currentAdventureIndex < this.currentWorld.adventures.length - 1;

    const hasNextWorld:boolean = ! hasNextLevel && (this.currentWorldIndex < this.worlds.length - 1);

    return canGoNext && (hasNextLevel || hasNextWorld);
  }

  public canTake():boolean {
    return this.currentAdventure.item !== undefined;
  }

}
