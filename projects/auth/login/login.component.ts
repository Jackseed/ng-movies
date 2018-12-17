import { Component, OnInit } from '@angular/core';
import { AuthService } from '../+state/auth.service';
import { Router } from '@angular/router';
import { User } from '../+state/auth.model';

@Component({
  selector: 'movie-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(
    public auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user);
  }

  btnClick() {
    this.router.navigateByUrl('/new');
  }

  editMovie() {
    if (this.auth.canEdit(this.user)) {
      alert('Congratz you have the good accreditation.');
    } else {
      console.error('you are not allowed to do that!');
    }
  }
}
