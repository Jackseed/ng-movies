import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';
import { User } from './auth.model';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  userCollection: AngularFirestoreCollection;
  user$: Observable<User>;

  constructor(
    private authStore: AuthStore,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
      this.userCollection = afs.collection('users');
      this.fetch();

      //// Get auth data, then get firestore user document || null
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.userCollection.doc<User>(user.uid).valueChanges();
          } else {
            return of(null);
          }
        })
      );
  }

  fetch() {
    this.userCollection.valueChanges().subscribe((users: User[]) => {
      this.authStore.set(users);
    });
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }


  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.userCollection.doc(user.uid);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      roles: {
        viewer: true
      },
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });

  }


  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
  }

  ///// Role-based Authorization //////

  canRead(user: User): boolean {
    const allowed = ['admin', 'editor', 'viewer'];
    return this.checkAuthorization(user, allowed);
  }

  canEdit(user: User): boolean {
    const allowed = ['admin', 'editor'];
    return this.checkAuthorization(user, allowed);
  }

  canCreate(user: User): boolean {
    const allowed = ['admin', 'editor'];
    return this.checkAuthorization(user, allowed);
  }

  canDelete(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  // determines if user has matching role
  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) { return false; }
    for (const role of allowedRoles) {
      if ( user.roles[role] ) {
        return true;
      }
    }
    return false;
  }

}
