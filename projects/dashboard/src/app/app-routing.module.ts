import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationComponent } from './creation/creation.component';
import { AuthGuard } from 'projects/auth/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'new', component: CreationComponent,  canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
