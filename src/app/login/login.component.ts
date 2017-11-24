import {Component, OnInit} from '@angular/core';
import {LoginService} from '../shared/login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <h1>Please Login</h1>
    <button (click)="login()">Login</button>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private returnUrl: string;

  constructor(private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public login() {
    if (this.loginService.login()) {
      this.router.navigate([this.returnUrl]);
    }
  }
}
