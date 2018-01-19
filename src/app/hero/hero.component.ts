import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public heroName:string;

  constructor(private heroService:HeroService,
              private router:Router) {
    this.heroService.resetHero();
  }

  public onSubmit():void {
    this.heroService.getHero().name = this.heroName;
    this.router.navigate(['/adventure']);
  }
}
