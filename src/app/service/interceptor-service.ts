import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.includes('/api/company')) {
      console.log('Company request is on its way' + req.url); 
    } else {
      console.log('The other request is on its way' + req.url); 
      }
    return next.handle(req);
  }
}
