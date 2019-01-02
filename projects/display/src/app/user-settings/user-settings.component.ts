import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'projects/auth/+state';

@Component({
  selector: 'movie-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  user: User;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user);
  }

}
