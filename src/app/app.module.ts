import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeroComponent} from './hero/hero.component';
import {AdventureComponent} from './adventure/adventure.component';
import {HeroService} from './hero.service';

const routes:Routes = [
  {path: '', component: HeroComponent},
  {path: 'adventure', component: AdventureComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AdventureComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {enableTracing:false}),
    BrowserModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
