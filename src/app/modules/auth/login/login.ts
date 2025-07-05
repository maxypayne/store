import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {AuthForm} from '../auth-form/auth-form';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from '@angular/material/card';

@Component({
  selector: 'app-login',
  imports: [
    MatButton,
    MatProgressSpinner,
    AuthForm,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  isLoading: boolean;

  login() {

  }
}
