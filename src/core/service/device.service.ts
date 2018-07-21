import { Injectable, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { AngularFirestore, QueryFn } from 'angularfire2/firestore';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil, map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor(
    private db: AngularFirestore,
    private accountService: AccountService
  ) {
    // Wait until authorized.
    this.accountService
      .getUser$()
      .pipe(filter(user => user !== null))
      .subscribe(user => {
        const col = this.db.collection('devices', this.getMemberQuery(user));
        console.log(col);
        col
          .valueChanges()
          .pipe(takeUntil(this.accountService.fbAuthUnsubscribe$))
          .subscribe(
            result => {
              console.log(result);
            },
            err => this.dbError(err)
          );
      });
  }

  private getMemberQuery(user: firebase.User): QueryFn {
    const query: QueryFn = ref => ref.where(`group.${user.uid}`, '==', true);
    return query;
  }

  private dbError(error: any) {
    // if (error instanceof ) {

    // } else {
    console.error('Unexpected error type', error);
    // }
  }
}
