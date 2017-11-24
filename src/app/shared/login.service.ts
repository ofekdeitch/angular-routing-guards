import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {
  private static isLogged = false;

  constructor() {
    console.log('constructing login service');
  }

  public login(): boolean {
    LoginService.isLogged = true;
    return LoginService.isLogged;
  }

  public isLoggedIn() {
    return LoginService.isLogged;
  }
}
