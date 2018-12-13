import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '../../../movie/src';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from 'projects/dashboard/src/environments/environment';
import { CreationComponent } from './creation/creation.component';
import { AppRoutingModule } from './app-routing.module';


const Akita = environment.production
? []
: [ AkitaNgDevtools.forRoot(), AkitaNgRouterStoreModule.forRoot() ];


@NgModule({
  declarations: [
    AppComponent,
    CreationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiModule,
    ...Akita,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
