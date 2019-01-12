import { Component, OnInit } from '@angular/core';
import { AuthService } from '../+state/auth.service';
import { Router } from '@angular/router';
import { User } from '../+state/auth.model';
import { AuthQuery } from '../+state';

@Component({
  selector: 'movie-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(
    public auth: AuthService,
    private query: AuthQuery,
    private router: Router
    ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user);
  }

  btnClick() {
    this.router.navigateByUrl('/new');
  }

  googleLogin() {
    this.auth.googleLogin().then(res => {
      this.router.navigateByUrl('/dashboard');
    });
  }


}
