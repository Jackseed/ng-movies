import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './+state/auth.service';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { AppModule as DisplayModule} from 'projects/display/src/app/app.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    CommonModule,
    DisplayModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [AuthService]
})
export class AuthModule { }


