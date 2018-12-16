import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '../../../movie/src';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { CreationComponent } from './creation/creation.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthModule } from 'projects/auth/auth.module';
import { AuthGuard } from 'projects/auth/auth.guard';
import { CanWriteGuard } from 'projects/auth/can-write.guard';


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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AuthModule,
  ],
  providers: [AuthGuard, CanWriteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
