import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private token: string = 'Bearer fUfdTQMdK2SC1IglYIPuKu_vZGDXQ5jqP1cfEoZ09d2aXeCWUyFqKI1webj8lHCl8oxya_9s_J_TOcEATD3zHH3xh4854esAVrIZzyezRAh6IloTR0zTVRx7tS5Gs0J_Uk_Nn2OidH7bmb0zYuNlXXSJTVfeVv1SNwhfVA6j3ZUuuZhCTDl-luvZUkXWhmpDAqCdnGjYy5DmQzZBWgicYNYXuf37bMV5anye9dp2PxC0SrMQeIauPLKCNsaZ5UKtQSKu02LZtMf0qDu0pLLMB5iWC4sEKZijhrpnRhns7VrNXBuco4gSNytG2EvnK11P';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.headers.append('Authorization', this.token);
    const authReq = req.clone({headers});
    return next.handle(authReq);
  }

}
