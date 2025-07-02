import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { computed } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'auth_token';
  private isLoggedInSignal = signal<boolean>(this.hasToken());

  isLoggedIn = computed(() => this.isLoggedInSignal());

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post<{ token: string }>('YOUR_API_URL/login', { username, password })
      .pipe(
        tap(res => {
          localStorage.setItem(this.tokenKey, res.token);
          this.isLoggedInSignal.set(true);
        })
      );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedInSignal.set(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}
