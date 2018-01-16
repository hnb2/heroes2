import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from '../item';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent {

  @Input()
  public rewards:Item[];

  @Output()
  public onChosen:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private heroService:HeroService) {
  }

  public choose(item:Item):void {
    this.heroService.getHero().addToInventory(item);
    this.onChosen.emit(true);
  }

}
