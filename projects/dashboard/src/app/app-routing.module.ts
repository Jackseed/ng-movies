import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationComponent } from './creation/creation.component';
import { AuthGuard } from 'projects/auth/auth.guard';
import { LoginComponent } from 'projects/auth/login/login.component';
import { CanWriteGuard } from 'projects/auth/can-write.guard';
import { MovieSearchComponent } from 'projects/display/src/app/movie-search/movie-search.component';
import { MoviesDashboardComponent } from 'projects/display/src/app/movies-dashboard/movies-dashboard.component';
import { MoviePageComponent } from 'projects/display/src/app/movie-page/movie-page.component';
import { NavbarComponent } from 'projects/display/src/app/navbar/navbar.component';
import { UserSettingsComponent } from 'projects/display/src/app/user-settings/user-settings.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'new', component: CreationComponent,  canActivate: [AuthGuard, CanWriteGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: MovieSearchComponent },
  { path: 'dashboard', component: MoviesDashboardComponent },
  { path: 'movie/:id', component: MoviePageComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'settings', component: UserSettingsComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
