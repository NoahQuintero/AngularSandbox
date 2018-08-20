import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from 'app/components/dash/dash.component';
import { ThingsViewComponent } from 'app/views/things-view/things-view.component';
import { BlueThingsViewComponent } from 'app/views/blue-things-view/blue-things-view.component';
import { TemplateDemoViewComponent } from 'app/views/template-demo-view/template-demo-view.component';
import { TreeViewExampleViewComponent } from './views/tree-view-example-view/tree-view-example-view.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'things-view'
  },
  {
    path: 'dash',
    component: DashComponent,
  },
  {
    path: 'things-view',
    component: ThingsViewComponent,
  },
  {
    path: 'blue-things-view',
    component: BlueThingsViewComponent,
  },
  {
    path: 'template-demo-view',
    component: TemplateDemoViewComponent,
  },
  {
    path: 'tree-view',
    component: TreeViewExampleViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
