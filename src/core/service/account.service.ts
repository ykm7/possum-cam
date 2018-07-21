import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
// import * as auth 'firebase/auth';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private redirectUrl: string;

  public fbAuthUnsubscribe$ = new Subject<null>();

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.getUser$().subscribe(user => {
      if (user) {
        // this.user$.next(user);
      } else {
        this.logoutCleanup();
      }
    });
  }

  public googleLogin() {
    this.afAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(result => {
        this.loginSuccess(result);
      })
      .catch(err => console.error(err));
  }

  public emailLogin(username: string, password: string) {
    this.afAuth.auth
      .signInAndRetrieveDataWithEmailAndPassword(username, password)
      .then(result => this.loginSuccess(result))
      .catch(err => console.error(err));
  }

  // public register() {
  //   this.afAuth.auth.cr
  // }

  public logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  public getUser$(): Observable<firebase.User> {
    // return this.afAuth.user;
    return this.afAuth.authState;
  }

  public setRedirectUrl(inUrl: string | null): void {
    this.redirectUrl = inUrl;
  }

  public consumeRedirectUrl(): string {
    return this.redirectUrl;
  }

  private logoutCleanup(): void {
    this.fbAuthUnsubscribe$.next();
    this.router.navigate(['/login']);
  }

  private loginSuccess(userAuth: auth.UserCredential): void {
    // console.log(userAuth);
    if (this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl);
      this.setRedirectUrl(null);
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
