import { Injectable } from '@angular/core';
import {Creature} from './creature';
import {Item} from './item';

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
  ];

  public getAdventures():Adventure[] {
    return this.adventures;
  }

}
