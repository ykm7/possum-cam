import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router
} from '@angular/router';

import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { AccountService } from '../service/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authorized(route, state);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  private authorized(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // returns true is a firebase user exists.
    return this.accountService.getUser$().pipe(
      take(1),
      map(authState => !!authState),
      tap(authState => {
        if (!authState) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
