import {Component, inject, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import {BASE_URL} from '../../app.tokens';
import {AuthForm} from './auth-form.model';
// import {BASE_URL} from '../../app.tokens';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.html',
  styles: [`.auth-container { max-width: 300px; margin: 2rem auto; display: flex; flex-direction: column; gap: 1rem; }`]
})
export class Auth implements OnInit {
  private auth = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  error = signal<string | null>(null);

  form: FormGroup<AuthForm>;

  ngOnInit() {
    this.form = new FormGroup<AuthForm>({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  login() {
    if (this.form.invalid) return;
    const { username, password } = this.form.value;

    this.auth.login(username!, password!).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: () => this.error.set('Invalid credentials')
    });
  }
}
