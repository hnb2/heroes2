import {Item} from './item';

export class Inventory {

  private items:Item[];

  constructor() {
    this.items = [];
  }

  public getItems():Item[] {
    return this.items;
  }

  public isEmpty():boolean {
    return this.items.length === 0;
  }

  public getNumberOfItems():number {
    return this.items.length;
  }

  public add(item:Item):void {
    this.items.push(item);
  }

  public remove(item:Item):void {
    const index:number = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  public clear():void {
    for (let i:number = this.items.length; i > 0; i--) {
      this.items.pop();
    }
  }

}
