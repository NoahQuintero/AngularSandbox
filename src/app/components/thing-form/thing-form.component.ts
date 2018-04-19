import { Component, OnInit, Output } from '@angular/core';
import { Thing } from 'app/models/thing';
import { ThingService } from 'app/services/thing.service';


@Component({
  selector: 'app-thing-form',
  templateUrl: './thing-form.component.html',
  styleUrls: ['./thing-form.component.css']
})


export class ThingFormComponent implements OnInit {

  name = '';

  constructor(private thingService: ThingService) { }

  ngOnInit() {
  }

  onSubmit(newThing) {
    // console.log('testing form submit');
    // console.log(this.name);
    // console.log(newThing);
    this.thingService.postThing(this.name);
    newThing.reset('');
  }

}
