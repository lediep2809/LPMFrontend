import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsersService } from '../_Service/users.service';

const apiUrl:string = 'https://localhost:44387/User';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private userService: UsersService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user = this.userService.userValue;
        const isLoggedIn = user && user.token;
        const isApiUrl = request.url.startsWith(apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }
            });
        }

        return next.handle(request);
  }
}
