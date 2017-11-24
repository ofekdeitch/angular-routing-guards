import {NgModule} from '@angular/core';
import {LoginService} from '../shared/login.service';

@NgModule({})
export class CoreModule {
  public static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [LoginService]
    };
  }
}
