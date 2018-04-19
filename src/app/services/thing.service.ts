import { Injectable } from '@angular/core';
import { Thing } from 'app/models/thing';

@Injectable()
export class ThingService {

  things = [new Thing('a13', 'thing1'), new Thing('b13', 'thing2'), new Thing('c13', 'thing3')];

  constructor() { }

  getThings() {
    return this.things;
  }

  postThing(newThingName) {
    this.things.push(new Thing(this.generateId(), newThingName));
  }

  putThing(updatedThing) {
    return;
  }

  deleteThing(thing, i) {
    return this.things.splice(i, 1);
  }

  private generateId() {
    return 'x' +  Math.floor(Math.random() * 1000);
  }

}
