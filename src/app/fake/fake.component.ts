import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fake',
  template: `
    <h1>Fake</h1>
    <a [routerLink]="['/home']">Home</a>
    <a [routerLink]="['/products']">Products</a>
    <div style="border: 15px solid #000">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
