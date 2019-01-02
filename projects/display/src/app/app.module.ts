import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '../../../movie/src';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthModule } from 'projects/auth/auth.module';
import { AuthGuard } from 'projects/auth/auth.guard';
import { CanWriteGuard } from 'projects/auth/can-write.guard';

import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MoviesDashboardComponent } from './movies-dashboard/movies-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';


const Akita = environment.production
? []
: [ AkitaNgDevtools.forRoot(), AkitaNgRouterStoreModule.forRoot() ];

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    MoviesDashboardComponent,
    MoviePageComponent,
    NavbarComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiModule,
    ...Akita,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AuthModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    RouterModule,
  ],

  exports: [
    MovieSearchComponent
  ],

  providers: [AuthGuard, CanWriteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
