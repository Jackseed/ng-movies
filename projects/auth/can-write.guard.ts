import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './+state/auth.service';
import { take, map, tap } from 'rxjs/operators';

@Injectable()
export class CanWriteGuard implements CanActivate {

  constructor(private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.auth.user$.pipe(
      take(1),
      map(user => user && this.auth.canEdit(user) ? true : false), // <-- important line
      tap(canWrite => {
        if (!canWrite) {
          console.error('Access denied. Must have permission to write content');
        }
      })
    );
  }
}
