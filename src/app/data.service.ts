import { Injectable } from '@angular/core';
import {Creature} from './creature';
import {Item} from './item';
import {Potion} from './potion';

export enum Action {
  Attack = 'Attack',
  Next = 'Next',
  Take = 'Take'
}

export interface Adventure {
  level:number;
  text:string;
  creature?:Creature;
  item?:Item;
}

@Injectable()
export class DataService {

  private adventures:Adventure[] = [
    {level: 1, text: 'You encounter a wild rabbit', creature: new Creature('Wild Rabbit', 1, 1)},
    {level: 2, text: 'You encounter an even wilder rabbit', creature: new Creature('Wilder Rabbit', 2, 2)},
    {level: 3, text: 'You hear some noise coming from behind that bush'},
    {level: 4, text: 'It\'s the Rabbit Prince !', creature: new Creature('Rabbit Prince', 5, 5, 1)},
    {level: 5, text: 'Well, well, well... Isn\'t it the Rabbit King ?!', creature: new Creature('Rabbit King', 10, 10, 2)},
    {level: 6, text: 'You see a bunch of rabbits crying over their deceased monarchs...'},
    {level: 7, text: 'You were about to leave when you found what you where looking for', item: new Item('Holy Carrot')},
    {level: 8, text: 'Oh noes ! Another tiny rabbit', creature: new Creature('Tiny Rabbit', 1, 1)},
    {level: 9, text: 'Maybe a delicious carrot juice before leaving ?', item: new Potion('Carrot Juice', 5)},
    {level: 10, text: 'You take the way back home with the Holy Carrot, and you know things will never be the same...'}
  ];

  public getAdventures():Adventure[] {
    return this.adventures;
  }

}
