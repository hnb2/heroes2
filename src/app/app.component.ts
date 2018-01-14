import {Component} from '@angular/core';
import {HeroService} from './hero.service';
import {Creature} from './creature';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'Heroes';
  public hero:Creature;

  constructor(private heroService:HeroService) {
    this.hero = this.heroService.getHero();
  }

}
