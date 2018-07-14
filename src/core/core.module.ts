import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as service from './service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        service.AccountService
      ]
    };
  }
    constructor(
      @Optional()
      @SkipSelf()
      parentModule: CoreModule
    ) {
      if (parentModule) {
        throw new Error(
          'CoreModule is already loaded. Import it in the AppModule only'
        );
      }
    }
}
