import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SecurityLocalStorageService} from '../service/security-local-storage.service';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private token = 'Bearer ';

  constructor() {
    this.token = this.token + SecurityLocalStorageService.getCurrentUser().access_token;
    console.log(this.token);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.headers.has(InterceptorSkipHeader)) {
      const headers = req.headers.delete(InterceptorSkipHeader);
      const authReq = req.clone({headers});
      return next.handle(authReq);
    } else {
      const headers = req.headers.append('Authorization', this.token);
      const authReq = req.clone({headers});
      return next.handle(authReq);
    }
  }
}
