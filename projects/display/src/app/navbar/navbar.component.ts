import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'projects/auth/+state';

@Component({
  selector: 'movie-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user);
  }

}
