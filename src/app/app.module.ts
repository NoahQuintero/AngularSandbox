import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThingsTableComponent } from 'app/components/things-table/things-table.component';
import { ThingFormComponent } from 'app/components/thing-form/thing-form.component';
import { DashComponent } from 'app/components/dash/dash.component';
import { ThingsViewComponent } from 'app/views/things-view/things-view.component';
import { BlueThingsViewComponent } from 'app/views/blue-things-view/blue-things-view.component';
import { ThingService } from 'app/services/thing.service';
import { GroceryService } from 'app/services/grocery.service';
import { GroceryViewComponent } from 'app/views/grocery-view/grocery-view.component';
import { GroceryFormComponent } from './components/grocery-form/grocery-form.component';
import { TemplateDemoViewComponent } from './views/template-demo-view/template-demo-view.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    ThingsTableComponent,
    ThingFormComponent,
    DashComponent,
    ThingsViewComponent,
    BlueThingsViewComponent,
    GroceryViewComponent,
    GroceryFormComponent,
    TemplateDemoViewComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ThingService,
              GroceryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
