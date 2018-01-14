import {Component, OnInit} from '@angular/core';
import {Creature} from '../creature';
import {HeroService} from '../hero.service';
import {DataService, Action, Adventure} from '../data.service';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {

  public currentAdventure:Adventure;

  private adventures:Adventure[];
  private currentIndex:number = 0;

  constructor(private heroService:HeroService,
              private dataService:DataService) {
  }

  public ngOnInit():void {
    this.adventures = this.dataService.getAdventures();
    this.currentAdventure = this.adventures[0];
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
        this.currentIndex ++;
        this.currentAdventure = this.adventures[this.currentIndex];
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

    const hasNextLevel:boolean = this.currentIndex < this.adventures.length - 1;

    return canGoNext && hasNextLevel;
  }

  public canTake():boolean {
    return this.currentAdventure.item !== undefined;
  }

}
