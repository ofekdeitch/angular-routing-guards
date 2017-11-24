import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginRouteGuard} from './guards/LoginRouteGuard';
import {ProductsComponent} from './products/products.component';
import {CoreModule} from './core/core.module';
import {CommonModule} from '@angular/common';
import {FakeComponent} from './fake/fake.component';

const routes: Routes = [
  {
    path: '',
    component: FakeComponent,
    canActivate: [LoginRouteGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [LoginRouteGuard]
      },
      {
        path: 'products',
        component: ProductsComponent,
        canActivate: [LoginRouteGuard]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    FakeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    LoginRouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


