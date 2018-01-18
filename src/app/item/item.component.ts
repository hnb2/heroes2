import {Component, Input} from '@angular/core';
import {Item} from '../item';
import {Creature} from '../creature';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input()
  public item:Item;

  @Input()
  public hero:Creature;

}
