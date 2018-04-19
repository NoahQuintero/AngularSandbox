import { Component, OnInit, Input } from '@angular/core';
import { Thing } from 'app/models/thing';
import { ThingService } from 'app/services/thing.service';


@Component({
  selector: 'app-things-table',
  templateUrl: './things-table.component.html',
  styleUrls: ['./things-table.component.css']
})
export class ThingsTableComponent implements OnInit {

  things;
  selectedThing;
  update = false;

  constructor(private thingService: ThingService) { }

  ngOnInit() {
    this.things = this.thingService.getThings();
    this.selectedThing = this.things[0];
  }

  deleteThing(thing, i) {
    // console.log(thing);
    this.thingService.deleteThing(thing, i);
    if (this.update) {
      this.update = !this.update;
    }
  }

  updateThing(thing) {
    this.selectedThing = thing;
    this.update = !this.update;
    // console.log(this.update);
    // console.log(this.selectedThing);
  }
}
