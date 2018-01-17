import {Component, OnInit} from '@angular/core';
import {HeroService} from '../hero.service';
import {Creature} from '../creature';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.css']
})
export class GearComponent implements OnInit {

  public hero:Creature;

  constructor(private heroService:HeroService) {
  }

  public ngOnInit():void {
    this.hero = this.heroService.getHero();
  }
}
