import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatCheckbox} from '@angular/material/checkbox';
import {AuthFormInterface} from './auth-form.model';

@Component({
  selector: 'app-auth-form',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatFormField,
    MatCheckbox
  ],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.scss'
})
export class AuthForm implements OnInit {
  form: FormGroup<AuthFormInterface>;
  ngOnInit(): void {
    this.form = new FormGroup<AuthFormInterface>({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      remember: new FormControl(),
    })
  }
}
