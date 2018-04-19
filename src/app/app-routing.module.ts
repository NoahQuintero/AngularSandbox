import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from 'app/components/dash/dash.component';
import { ThingsViewComponent } from 'app/views/things-view/things-view.component';
import { BlueThingsViewComponent } from 'app/views/blue-things-view/blue-things-view.component';
import { GroceryViewComponent } from 'app/views/grocery-view/grocery-view.component';
import { TemplateDemoViewComponent } from 'app/views/template-demo-view/template-demo-view.component';

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
    path: 'grocery-view',
    component: GroceryViewComponent,
  },
  {
    path: 'template-demo-view',
    component: TemplateDemoViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
