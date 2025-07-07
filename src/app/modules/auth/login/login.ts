import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {AuthForm} from '../auth-form/auth-form';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from '@angular/material/card';
import {LoginRequest} from '../interfaces/login-request';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoginFormInterface} from './login-form.interface';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    MatButton,
    MatProgressSpinner,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatFormField
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent implements OnInit {
  form: FormGroup<LoginFormInterface>;
  isLoading: boolean;
  authService: AuthService = inject(AuthService);
  ngOnInit(): void {
    this.form = new FormGroup<LoginFormInterface>({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }

  login() {
    console.log(this.form)
    if (this.form.valid) {
      this.authService.login(this.form.value.email as string, this.form.value.password as string).subscribe(({token}) => {
        console.log({token});
      });
    }
  }
}
