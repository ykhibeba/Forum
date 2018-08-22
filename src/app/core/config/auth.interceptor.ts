import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private token: string = 'Bearer 6eXJBbngj3g25OLzhbnU2_7vnAw9njvHR5rQZ0s2t9XFJAFj-Wm020xlRyYjriiduNYNjUwMwdPxTgFf8_iRCQAp-Vxebt26i5rURE6sS6sTPXPVEG-XA7AbUzxxtd3mN9PRSoxOEhqgW5oPmNHuQecxIwB58leHNmV58jKctMNWvmIMcONM2e9_0APoBk9SV7Mx3TKlJ4wml5-WZ5PJ331yG3CbZLV1zftMkVGo_XD5EbWqqsbAPGUvvcXY_2xwV62GAAKuSGamSWoY4Zic7XK2iFbmvwjkJXz625Nl9ciJBchABZr-_wjrQHDnt1nU';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.headers.append('Authorization', this.token);
    const authReq = req.clone({headers});
    return next.handle(authReq);
  }

}
