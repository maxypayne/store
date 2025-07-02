import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

export const authInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>>  => {
  const auth = inject(AuthService);
  const token = auth.getToken();

  if (!token) {
    return next(req)
  }

  const headers = new HttpHeaders({
    Authorization: token
  })

  const newReq = req.clone({
    headers
  })

  return next(newReq)
}
