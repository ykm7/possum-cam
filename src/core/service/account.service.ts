import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private auth$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private redirectUrl: string;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

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

  public logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  public getAuthState$(): Observable<firebase.User> {
    return this.afAuth.user;
  }

  public setRedirectUrl(inUrl: string | null): void {
    this.redirectUrl = inUrl;
  }

  public consumeRedirectUrl(): string {
    return this.redirectUrl;
  }

  private loginSuccess(auth: any): void {
    if (this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl);
      this.setRedirectUrl(null);
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
