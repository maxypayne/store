import { Routes } from '@angular/router';
import {VisualiseProducts} from './modules/product/visualise-products/visualise-products';
import {LoginComponent} from './modules/auth/login/login';
import {Playground} from './modules/playground/playground';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: VisualiseProducts },
  { path: 'playground', component: Playground },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];
