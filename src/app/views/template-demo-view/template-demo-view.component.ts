import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-demo-view',
  templateUrl: './template-demo-view.component.html',
  styleUrls: ['./template-demo-view.component.css']
})
export class TemplateDemoViewComponent implements OnInit {

  collection = [{
    key: 'a'
  },
  {
    key: 'b'
  },
  {
    key: 'c'
  },
  {
    key: 'd'
  },
  {
    key: 'e'
  }];

  constructor() { }

  ngOnInit() {
  }

}
