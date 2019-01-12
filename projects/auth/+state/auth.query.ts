import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AuthStore, AuthState } from './auth.store';
import { User } from './auth.model';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends QueryEntity<AuthState, User> {

  constructor(protected store: AuthStore) {
    super(store);
  }
}
