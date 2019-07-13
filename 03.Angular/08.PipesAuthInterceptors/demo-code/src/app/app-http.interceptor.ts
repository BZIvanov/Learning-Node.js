import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { tap, map, catchError } from 'rxjs/operators';

const apiURL = environment.apiURL;

export class AppHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let newHeaders = {
      'Content-Type': 'application/json',
      Authorization: ''
    };

    const token = localStorage.getItem('token');
    if (req.url.includes('feed')) {
      newHeaders = {
        'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`
      };
    }

    return next.handle(req.clone({
      url: `${apiURL}/${req.url}`,
      setHeaders: newHeaders
    })).pipe(catchError());
  }
}
