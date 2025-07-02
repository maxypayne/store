import { Routes } from '@angular/router';
import {Auth} from './modules/auth/auth';
import {authGuard} from './modules/auth/auth.guard';
import {VisualiseProducts} from './modules/product/visualise-products/visualise-products';

export const routes: Routes = [
  { path: 'login', component: Auth },
  { path: 'products', component: VisualiseProducts },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];
