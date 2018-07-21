import { Injectable } from '@angular/core';
import { SwUpdate } from '../../../node_modules/@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService {
  constructor(private updates: SwUpdate) {
    updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);

      updates
        .activateUpdate()
        .then(() => {
          console.warn('New version will be installed.');
          document.location.reload();
        })
        .catch(err => console.error(err));
    });
    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }
}
