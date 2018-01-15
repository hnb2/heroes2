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

  private worlds:World[];
  private currentAdventureIndex:number = 0;
  private currentWorldIndex:number = 0;

  constructor(private heroService:HeroService,
              private dataService:DataService) {
  }

  public ngOnInit():void {
    this.worlds = this.dataService.getWorlds();
    this.currentAdventure = this.worlds[0].adventures[0];
  }

  public act(action:Action, adventure:Adventure):void {
    switch (action) {
      case Action.Attack:
        this.heroService.getHero().attack(adventure.creature);
        if (! adventure.creature.isDead()) {
          adventure.creature.attack(this.heroService.getHero());
        }
        break;
      case Action.Next:
        this.currentAdventureIndex ++;
        this.currentAdventure = this.worlds[this.currentWorldIndex].adventures[this.currentAdventureIndex];
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

  public canNext():boolean {
    const canGoNext:boolean = ! this.currentAdventure.creature ||
      this.currentAdventure.creature.isDead();

    const hasNextLevel:boolean = this.currentAdventureIndex < this.worlds[this.currentWorldIndex].adventures.length - 1;

    return canGoNext && hasNextLevel;
  }

  public canTake():boolean {
    return this.currentAdventure.item !== undefined;
  }

}
