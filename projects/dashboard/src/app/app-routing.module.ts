import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationComponent } from './creation/creation.component';
import { AuthGuard } from 'projects/auth/auth.guard';
import { LoginComponent } from 'projects/auth/login/login.component';
import { CanWriteGuard } from 'projects/auth/can-write.guard';
import { MovieSearchComponent } from 'projects/display/src/app/movie-search/movie-search.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'new', component: CreationComponent,  canActivate: [AuthGuard, CanWriteGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: MovieSearchComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
