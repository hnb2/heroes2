import {Component, OnInit} from '@angular/core';
import {Creature} from '../creature';
import {HeroService} from '../hero.service';

enum Action {
  Attack = 'Attack',
  Next = 'Next'
}

interface Adventure {
  level:number;
  text:string;
  creature?:Creature;
}

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {

  public adventures:Adventure[] = [
    {level: 1, text: 'You encounter a wild rabbit', creature: new Creature('Wild Rabbit', 1, 1)},
    {level: 2, text: 'You encounter an even wilder rabbit', creature: new Creature('Wilder Rabbit', 2, 2)},
    {level: 3, text: 'You hear some noise coming from behind that bush'},
    {level: 4, text: 'It\'s the Rabbit Prince !', creature: new Creature('Rabbit Prince', 5, 5, 1)},
    {level: 5, text: 'Well, well, well... Isn\'t it the Rabbit King ?!', creature: new Creature('Rabbit King', 10, 10, 2)},
    {level: 6, text: 'You see a bunch of rabbits crying over their deceased monarchs...'},
  ];

  public currentAdventure:Adventure;
  private currentIndex:number = 0;

  constructor(private heroService:HeroService) {
  }

  public ngOnInit():void {
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

}
