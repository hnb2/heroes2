import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {MatTabsModule, MatButtonModule, MatCardModule, MatGridListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HeroComponent} from './hero/hero.component';
import {AdventureComponent} from './adventure/adventure.component';
import {HeroService} from './hero.service';
import {DataService} from './data.service';
import { RewardComponent } from './reward/reward.component';
import { InventoryComponent } from './inventory/inventory.component';
import { GearComponent } from './gear/gear.component';

const routes:Routes = [
  {path: '', component: HeroComponent},
  {path: 'adventure', component: AdventureComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AdventureComponent,
    RewardComponent,
    InventoryComponent,
    GearComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {enableTracing:false}),
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [
    HeroService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
