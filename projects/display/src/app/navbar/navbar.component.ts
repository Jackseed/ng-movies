import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'projects/auth/+state';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user);
  }

  goToSettings() {
    this.router.navigateByUrl('/settings');
  }

}
