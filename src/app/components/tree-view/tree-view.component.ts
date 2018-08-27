import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit, OnDestroy {
  

  @Input() data: any;
  @Input() root: boolean;
  @Input() collapse: Observable<boolean>;

  collapseSubscription: Subscription;

  collapseSubject: BehaviorSubject<boolean>;

  dataList: any[] = [];

  constructor() { }

  ngOnInit() {
    this.dataAnalysis(this.data, this.dataList);

    // Must check that we specifically mean false.
    // Tree-view's children will be explicitly told they are not the root
    // tslint:disable-next-line:triple-equals
    if (this.root != false) {
      // We will allow (prefer) the user of a tree view not specify that it is the root
      // aka if root not specified, we are the root.
      this.root = true

      //
      this.collapseSubject = new BehaviorSubject<boolean>(false);

      this.collapse = this.collapseSubject.asObservable();

    }
    
    this.collapseSubscription = this.collapse.subscribe(c => {
      console.log('collapse all')
      this.dataList.forEach(x => {
        x.show = false;
      });
    });
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

  collapseAll() {
    this.collapseSubject.next(true);
  }

  ngOnDestroy(): void {
    this.collapseSubscription.unsubscribe();
  }
}
