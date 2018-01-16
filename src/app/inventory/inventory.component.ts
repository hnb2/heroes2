import {Component, OnInit} from '@angular/core';
import {HeroService} from '../hero.service';
import {Creature} from '../creature';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public hero:Creature;

  constructor(private heroService:HeroService) {
  }

  public ngOnInit():void {
    this.hero = this.heroService.getHero();
  }

}
