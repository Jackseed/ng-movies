import { Component, OnInit } from '@angular/core';
import { AuthService } from '../+state/auth.service';

@Component({
  selector: 'movie-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
