import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  @Input() collection: any[];
  @Input() itemTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.collection)
  }



}
