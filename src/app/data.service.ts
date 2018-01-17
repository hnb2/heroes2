import { Injectable } from '@angular/core';
import {Creature} from './creature';
import {Item} from './item';
import {Potion, PotionType} from './potion';
import {Weapon} from './weapon';

export enum Action {
  Attack = 'Attack',
  SpecialAttack = 'SpecialAttack',
  Next = 'Next',
  Take = 'Take'
}

export interface Adventure {
  level:number;
  text:string;
  creature?:Creature;
  item?:Item;
}

export interface World {
  level:number;
  adventures:Adventure[];
  rewards:Item[];
}

@Injectable()
export class DataService {

  public getWorlds():World[] {
    return [
      {
        level: 1,
        adventures: [
          {level: 1, text: 'You encounter a wild rabbit', creature: new Creature('Wild Rabbit', 1, 1)},
          {level: 2, text: 'You encounter an even wilder rabbit', creature: new Creature('Wilder Rabbit', 2, 2)},
          {level: 3, text: 'You hear some noise coming from behind that bush'},
          {level: 4, text: 'It\'s the Rabbit Prince !', creature: new Creature('Rabbit Prince', 5, 5, 1)},
          {level: 5, text: 'Well, well, well... Isn\'t it the Rabbit King ?!', creature: new Creature('Rabbit King', 10, 10, 2)},
          {level: 6, text: 'You see a bunch of rabbits crying over their deceased monarchs...'},
          {level: 7, text: 'You were about to leave when you found what you where looking for', item: new Item('Holy Carrot')},
          {level: 8, text: 'Oh noes ! Another tiny rabbit', creature: new Creature('Tiny Rabbit', 1, 1)},
          {level: 9, text: 'Maybe a delicious carrot juice before leaving ?', item: new Potion('Carrot Juice', 5, PotionType.Health)},
          {level: 10, text: 'You take the way back home with the Holy Carrot, and you know things will never be the same...'}
        ],
        rewards: [
          new Potion('Minor Health Potion', 10, PotionType.Health),
          new Potion('Minor Mana Potion', 5, PotionType.Mana),
          new Weapon('Training Sword', 2)
        ]
      },
      {
        level: 2,
        adventures: [
          {level: 1, text: 'You encounter a wounded bandit', creature: new Creature('Wounded Bandit', 8, 10, 1)},
          {level: 2, text: 'You can see the end of the forest, finally'},
          {level: 3, text: 'Oh, oh...It\'s actually a bandit camp', creature: new Creature('Forest Bandit', 10, 10, 1)},
          {level: 4, text: 'More are coming !', creature: new Creature('Forest Bandit', 10, 10, 1)},
          {level: 5, text: 'Archers !', creature: new Creature('Bandit Archer', 6, 6, 3)},
          {level: 6, text: 'Good thing you took cover, wait, what\'s this on the ground ?', item: new Potion('Minor Health Potion', 10, PotionType.Health)},
          {level: 7, text: 'You raise your head and see the chief of the bandits looking at you straight in the eyes. Then he said: "Gimme the Carrot."'},
          {level: 8, text: '"Over my dead body !" you shout, before rushing into him', creature: new Creature('Chief of the Bandits', 15, 15, 2)},
          {level: 9, text: 'The bandit camp is now a pool of blood, you grab whatever you find and leave the place', item: new Potion('Old Mana Potion', 3, PotionType.Mana)},
          {level: 10, text: 'You are finally past the dread forest and can see the castle from here.'},
        ],
        rewards: []
      }
    ];
  }

}
