import {Component, OnInit} from '@angular/core';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  constructor(private heroService:HeroService) {
    this.heroService.resetHero();
  }

}
