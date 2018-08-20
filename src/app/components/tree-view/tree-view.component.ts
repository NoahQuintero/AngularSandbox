import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  @Input() data: any;

  dataList: any[] = [];

  constructor() { }

  ngOnInit() {
    this.dataAnalysis(this.data, this.dataList);
  }

  dataAnalysis(data: any, dataList: any[]) {
    console.log(data);

    const attrs: any[] = [];

    Object.keys(data).forEach(x => {
      attrs.push({key: x, value: data[x], show: false});
    });

    if (attrs.length) {
      this.dataList = dataList.concat(attrs);
    }

    console.log(this.dataList);
  }

  getType(x: any): string {
    return typeof x;
  }
}
