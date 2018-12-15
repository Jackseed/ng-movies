import { Component, OnInit } from '@angular/core';
import { AuthService } from '../+state/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  btnClick() {
    this.router.navigateByUrl('/new');
  }
}
