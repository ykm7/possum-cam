import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private afAuth: AngularFireAuth) {}

  public login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  public logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
}
