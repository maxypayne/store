import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {AuthForm} from '../auth-form/auth-form';

@Component({
  selector: 'app-register',
  imports: [
    MatButton,
    MatProgressSpinner,
    AuthForm
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  isLoading: any;

  register() {

  }
}
